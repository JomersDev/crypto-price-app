import React from "react";

export default function CoinDataInfo(props) {
    return (
        <div className="coindatainfo-grid">
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Market Cap</p>
                <p className="coindatainfo-stat">${(props.marketCap)}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Total Volume</p>
                <p className="coindatainfo-stat">${(props.totalVolume)}</p> 
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Fully Diluted Valuation</p>
                <p className="coindatainfo-stat">${(props.fdv)}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Circulating Supply</p>
                <p className="coindatainfo-stat">{(props.circulatingSupply)}</p> 
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Total Supply</p>
                <p className="coindatainfo-stat">{(props.totalSupply)}</p>
            </div>
            <div className="coindatainfo-grid-item">
                <p className="coindatainfo-text">Max Supply</p>
                <p className="coindatainfo-stat">{(props.maxSupply)}</p>  
            </div>

        </div>
    )
}