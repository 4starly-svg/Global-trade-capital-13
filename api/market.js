import fetch from "node-fetch";

export default async function handler(req, res){
  const ticker = req.query.ticker;
  const API_KEY = process.env.ALPACA_API_KEY;
  const API_SECRET = process.env.ALPACA_SECRET;
  const BASE_URL = "https://paper-api.alpaca.markets";
    
  try{
    const resp = await fetch(`${BASE_URL}/v2/stocks/${ticker}/quotes/latest`, {
      headers:{
        "APCA-API-KEY-ID": API_KEY,
        "APCA-API-SECRET-KEY": API_SECRET
      }
    });
    const data = await resp.json();
    res.status(200).json({ price: data?.quote?.ap ?? 0 });
  }catch(e){
    res.status(500).json({price:"N/A"});
  }
}
