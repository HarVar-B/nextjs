// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dummyContestData from '@/sampleData/contests'

function getHandler(req, res) {
  res.status(200).json(dummyContestData)
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
