import React from "react";

export default function CoinDataHeader(props) {
    return (
        <div className="coindata-header">
            <div className="coindata-header-title">
                <img src={props.image} />
                <h1 className="coindata-title">{props.name}</h1>
                <h1 className="coindata-title uppercase">({props.symbol})</h1>
            </div>
            <div className="coindata-price-container">
                <p className="coindata-price">${(props.price).toLocaleString()}</p>
                <p className={props.percent < 0 ? "price-decrease-text" : "price-increase-text"}>{(props.percent).toFixed(1)}%</p>
            </div>
        </div>
    )
}