import React from "react";

export default function CardHeader() {
    return (
        <div className="cardheader">
            <p className="card-text">#</p>
            <p className="card-text">Coin</p>
            <p className="card-text">Price</p>
            <p className="card-text">1h</p>
            <p className="card-text">24h</p>
            <p className="card-text">7d</p>
            <p className="card-text">Mkt Cap</p>
        </div>
    )
}