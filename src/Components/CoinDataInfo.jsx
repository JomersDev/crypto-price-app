import React from "react";

export default function CoinDataInfo(props) {
    return (
        <div className="coindatainfo-grid">
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Market Cap</p>
                <p className="coindatainfo-stat">${(props.marketCap).toLocaleString()}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Total Volume</p>
                <p className="coindatainfo-stat">${(props.totalVolume).toLocaleString()}</p> 
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Fully Diluted Valuation</p>
                <p className="coindatainfo-stat">{props.fdv ? props.fdv : "unavailable"}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Circulating Supply</p>
                <p className="coindatainfo-stat">{(props.circulatingSupply).toLocaleString()}</p> 
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Total Supply</p>
                <p className="coindatainfo-stat">{(props.totalSupply).toLocaleString()}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Max Supply</p>
                <p className="coindatainfo-stat">{props.maxSupply > 0 ? (props.maxSupply).toLocaleString() : "infinite"}</p>  
            </div>
        </div>
    )
}