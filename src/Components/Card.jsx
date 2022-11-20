import React from "react";
import { Link } from "react-router-dom"

export default function Card(props) {
    return (
        <Link to={`/${props.id}`}>
            <div className="card-container">
                    <p className="card-text">{props.rank}</p>
                <div className="card-container-name">
                    <img src={props.image} className="image"/>
                    <h1 className="coin-name">{props.name}</h1>
                    <p className="coin-symbol">{props.symbol}</p>
                </div>
                    <p className="card-text">${(props.price).toLocaleString()}</p>
                    <p className={props.priceChange1hr < 0 ? "price-decrease-text card-text" : "price-increase-text card-text"}>{(props.priceChange1hr).toFixed(1)}%</p>
                    <p className={props.priceChange24hr < 0 ? "price-decrease-text card-text" : "price-increase-text card-text"}>{(props.priceChange24hr).toFixed(1)}%</p>
                    <p className={props.priceChange7d < 0 ? "price-decrease-text card-text" : "price-increase-text card-text"}>{(props.priceChange7d).toFixed(1)}%</p>
                    <p className="card-text">${(props.marketCap).toLocaleString()}</p>
            </div>
        </Link>
    )
}