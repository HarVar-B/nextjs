//Consider using this repo, if caching is required on server side: https://github.com/PokeAPI/pokedex-promise-v2
import pokemon from "@/sampleData/pokemon";
import fetcher from "@/fetcher";

async function getHandler(req, res) {
  try {
    const data = await fetcher(process.env.POKEMON_API_BASE + "pokemon/")
    console.log("pokemonResponse:", data)
    const {results} = data;
    const promises = results.map(({url})=>fetcher(url))
    Promise.all(promises).then(values=>res.status(200).json(values))
  } catch (e) {
    res.status(500).json({error: e})
  }
}

function postHandler(req, res) {
  res.status(403).json({error: "HTTP method: POST is not supported yet"})
}

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      getHandler(req, res);
      break;
    case "POST":
      postHandler(req, res);
      break;
    default:
      break;
  }
}
