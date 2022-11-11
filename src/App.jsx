import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'
import './App.css'

function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    console.log("fetching data")
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCoins(data))
  },[])

  console.log(coins)

  const coinElements = coins.map(coin => 
    <Card 
      key={coin.id} 
      name={coin.name}
      symbol={coin.symbol} 
      price={coin.current_price} 
      marketCap={coin.market_cap}
      rank={coin.market_cap_rank}
      image={coin.image}
      priceChange={coin.price_change_24h}/>
  )

  return (
    <div className="app-container">
      <Header />
      <div className="coin-container">
        {coinElements}
      </div>
      <Footer />
    </div>
  )
}

export default App
