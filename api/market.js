import fetch from "node-fetch";

export default async function handler(req, res) {
  const ALPACA_KEY = process.env.VITE_ALPACA_KEY;
  const ALPACA_SECRET = process.env.VITE_ALPACA_SECRET;

  try {
    // Fetch Alpaca account data as a live test
    const alpacaRes = await fetch("https://paper-api.alpaca.markets/v2/account", {
      headers: {
        "APCA-API-KEY-ID": ALPACA_KEY,
        "APCA-API-SECRET-KEY": ALPACA_SECRET,
      },
    });
    const accountData = await alpacaRes.json();

    // Example live stocks (replace or expand as needed)
    const stocks = [
      { symbol: "AAPL", price: 185.60, high: 187.00, low: 184.50, marketCap: "3T", logo: "https://logo.clearbit.com/apple.com" },
      { symbol: "MSFT", price: 310.40, high: 312.00, low: 308.50, marketCap: "2.5T", logo: "https://logo.clearbit.com/microsoft.com" },
      { symbol: "TSLA", price: 920.50, high: 950.00, low: 910.00, marketCap: "1T", logo: "https://logo.clearbit.com/tesla.com" },
    ];

    // Example live crypto
    const crypto = [
      { symbol: "BTC/USD", price: 27100, marketCap: "520B", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
      { symbol: "ETH/USD", price: 1850, marketCap: "220B", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
      { symbol: "BNB/USD", price: 320, marketCap: "50B", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png" },
    ];

    // Example exchange rates
    const exchange = [
      { currency: "LYD/USD", rate: 0.21 },
      { currency: "LYD/EUR", rate: 0.19 },
      { currency: "LYD/GBP", rate: 0.16 },
    ];

    res.status(200).json({ account: accountData, stocks, crypto, exchange });
  } catch (err) {
    console.error("Error fetching market data:", err);
    res.status(500).json({ error: "Failed to fetch market data" });
  }
}
