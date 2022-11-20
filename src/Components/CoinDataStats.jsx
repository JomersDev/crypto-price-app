import React from "react";

export default function CoinDataStats(props) {
    return (
        <div className="coindatastats-container">
            <h3>Price Statistics</h3>
            <div className="coindatastats-item">
                <p className="coindatastats-text">24h High</p>
                <p className="coindatastats-stat">${(props.high24).toLocaleString()}</p>
            </div>
            <div className="coindatastats-item">
                <p className="coindatastats-text">24h Low</p>
                <p className="coindatastats-stat ">${(props.low24).toLocaleString()}</p>
            </div>
            <div className="coindatastats-item">
                <p className="coindatastats-text">Market Cap Rank</p>
                <p className="coindatastats-stat ">#{props.marketCapRank}</p>
            </div>
            <div className="coindatastats-item">
                <p className="coindatastats-text">All-Time High</p>
                <p className="coindatastats-stat ">${(props.ath).toLocaleString()}</p>
            </div>
            <div className="coindatastats-item">
                <p className="coindatastats-text">All-Time Low</p>
                <p className="coindatastats-stat ">${(props.atl).toLocaleString()}</p> 
            </div>
    </div>
    )
}