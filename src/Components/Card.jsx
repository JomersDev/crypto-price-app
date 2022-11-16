import React from "react";
import { Link } from "react-router-dom"

export default function Card(props) {
    return (
        <Link to={`/${props.id}`}>
            <div className={props.priceChange < 0 ? "card-container price-decrease" : "card-container price-increase"}>
                <div className="card-container--image">
                    <img src={props.image} className={"image"}/>
                </div>
                <div>
                    <h1 className="coin-name">{props.name}</h1>
                    <p className="coin-symbol">{props.symbol}</p>
                </div>
                <div className="card-container--price">
                    <p className={props.priceChange < 0 ? "price-decrease-text" : "price-increase-text"}>${(props.price).toLocaleString()}</p>
                </div>
            </div>
        </Link>
    )
}