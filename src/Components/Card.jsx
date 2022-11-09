import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <p>{props.rank}</p>
            <img src={props.image} />
            <h1>{props.name}</h1>
            <p>${(props.price).toLocaleString()} USD</p>
            <p>Market Cap: ${(props.marketCap).toLocaleString()} USD</p>
        </div>
    )
}