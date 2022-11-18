import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function CoinData(props) {

    const {name} = useParams()

    const [coinData, setCoinData] = useState({name: "coin"})

    useEffect(() => {
        console.log("fetching data")
        fetch(`https://api.coingecko.com/api/v3/coins/${name}?localization=false&market_data=true&community_data=true`)
        .then(response => response.json())
        .then(data => setCoinData(data))
    },[])

    const coinInfo = coinData
    console.log(coinInfo)

    return (
        <div className="header-container">
            {coinInfo.market_data && 
                <div>
                    <div>
                        <img src={coinInfo.image.thumb} /><h1 className="title">{coinInfo.name}</h1>
                        <p className="coin-symbol">{coinInfo.symbol}</p>
                        <p className="coin-symbol">${coinInfo.market_data.current_price.usd}</p>
                        <p className="coin-symbol">Market Cap: ${coinInfo.market_data.market_cap.usd}</p>
                        <p className="coin-symbol">Total Volume: ${coinInfo.market_data.total_volume.usd}</p>
                        <p className="coin-symbol">Fully Diluted Valuation: ${coinInfo.market_data.fully_diluted_valuation.usd}</p>
                        <p className="coin-symbol">Circulating Supply: {coinInfo.market_data.circulating_supply}</p>
                        <p className="coin-symbol">Total Supply: {coinInfo.market_data.total_supply}</p>
                        <p className="coin-symbol">Max Supply: {coinInfo.market_data.max_supply}</p>
                    </div>
                    <div>
                        <h3>{coinInfo.symbol} Price Statistics</h3>
                            <p className="coin-symbol">24h Low / 24h High</p>
                            <p className="coin-symbol">7d Low / 7d High</p>
                            <p className="coin-symbol">Market Cap Rank</p>
                            <p className="coin-symbol">Market Cap Dominance</p>
                            <p className="coin-symbol">Volume / Market Cap</p>
                            <p className="coin-symbol">All-Time High</p>
                            <p className="coin-symbol">All-Time Low</p>
                    </div>
                </div>

            }
        </div>
    )
}
