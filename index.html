<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Global Trade Capital - Live Markets</title>

<style>
body{
    margin:0;
    background:#0b1120;
    font-family:Arial, Helvetica, sans-serif;
    color:white;
}

header{
    text-align:center;
    padding:30px;
    font-size:28px;
    font-weight:bold;
    background:#111827;
}

.container{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding:30px;
    gap:20px;
}

.card{
    background:#1f2937;
    width:260px;
    padding:25px;
    border-radius:14px;
    text-align:center;
    box-shadow:0 0 15px rgba(0,0,0,0.4);
    transition:0.3s;
}

.card:hover{
    transform:translateY(-5px);
}

.title{
    font-size:16px;
    margin-bottom:15px;
    color:#9ca3af;
}

.price{
    font-size:26px;
    font-weight:bold;
}

footer{
    text-align:center;
    padding:20px;
    color:#6b7280;
}
</style>
</head>

<body>

<header>
Global Trade Capital – Live Market Dashboard
</header>

<div class="container">

<div class="card">
<div class="title">AAPL (Apple)</div>
<div class="price" id="stock">Loading...</div>
</div>

<div class="card">
<div class="title">Bitcoin (BTC)</div>
<div class="price" id="btc">Loading...</div>
</div>

<div class="card">
<div class="title">Ethereum (ETH)</div>
<div class="price" id="eth">Loading...</div>
</div>

<div class="card">
<div class="title">USD → EUR</div>
<div class="price" id="usd">Loading...</div>
</div>

</div>

<footer>
Auto updates every 60 seconds
</footer>

<script>
async function loadData(){
try{

// Bitcoin & Ethereum
const crypto = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
const cryptoData = await crypto.json();

document.getElementById("btc").innerText = "$" + cryptoData.bitcoin.usd;
document.getElementById("eth").innerText = "$" + cryptoData.ethereum.usd;

// USD to EUR
const fx = await fetch("https://open.er-api.com/v6/latest/USD");
const fxData = await fx.json();
document.getElementById("usd").innerText = fxData.rates.EUR;

// Apple Stock (Yahoo public endpoint)
const stock = await fetch("https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL");
const stockData = await stock.json();
document.getElementById("stock").innerText =
"$" + stockData.quoteResponse.result[0].regularMarketPrice;

}catch(error){
console.log("Error loading data:", error);
}
}

loadData();
setInterval(loadData,60000);
</script>

</body>
</html>
