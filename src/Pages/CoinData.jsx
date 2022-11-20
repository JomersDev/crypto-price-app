import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CoinDataHeader from "../Components/CoinDataHeader";
import CoinDataInfo from "../Components/CoinDataInfo";
import CoinDataStats from "../Components/CoinDataStats";
import CoinDataDesc from "../Components/CoinDataDesc";
import Converter from "../Components/Converter";

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
        <div className="coindata-container">
            {coinInfo.market_data && 
                <div>
                    <CoinDataHeader 
                        image={coinInfo.image.thumb} 
                        name={coinInfo.name} 
                        symbol={coinInfo.symbol} 
                        price={coinInfo.market_data.current_price.usd}
                        percent={coinInfo.market_data.price_change_percentage_24h}
                    />
                    <CoinDataInfo 
                        marketCap={coinInfo.market_data.market_cap.usd}
                        totalVolume={coinInfo.market_data.total_volume.usd}
                        fdv={coinInfo.market_data.fully_diluted_valuation.usd}
                        circulatingSupply={coinInfo.market_data.circulating_supply}
                        totalSupply={coinInfo.market_data.total_supply}
                        maxSupply={coinInfo.market_data.max_supply}/>
                    <div className="bottom-grid">
                        <CoinDataDesc 
                            desc={coinInfo.description.en}/>
                        <div>
                            <CoinDataStats
                                low24={coinInfo.market_data.low_24h.usd}
                                high24={coinInfo.market_data.high_24h.usd}
                                ath={coinInfo.market_data.ath.usd}
                                atl={coinInfo.market_data.atl.usd}
                                marketCapRank={coinInfo.market_cap_rank}
                            />
                            <Converter
                                symbol={coinInfo.symbol}
                                price={coinInfo.market_data.current_price.usd} />
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}
