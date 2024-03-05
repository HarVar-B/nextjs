import pokemonTypes from "@/sampleData/pokemon/types";

function getHandler(req, res) {
  res.status(200).json(pokemonTypes.slice(0,5))
}

function postHandler(req, res) {
  res.status(403).json({error:"HTTP method: POST is not supported yet"})
}

export default function handler(req, res) {
  switch(req.method){
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
