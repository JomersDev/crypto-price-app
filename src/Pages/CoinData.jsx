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
                    <h1 className="title">{coinInfo.name}</h1>
                    <p className="coin-symbol">{coinInfo.symbol}</p>
                    <p className="coin-symbol">{coinInfo.developer_score}</p>
                    <p className="coin-symbol">{coinInfo.market_data.current_price.usd}</p>
                </div>
            }
        </div>
    )
}
