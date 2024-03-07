import pokemon from "@/sampleData/pokemon";

function getHandler(req, res) {
  res.status(200).json(pokemon.slice(0,15))
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
