import React from "react";
import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <div className="header-container">
            <Link to="/"><h1 className="title">Coin Stats</h1></Link>
            <button 
                className="btn" 
                onClick={props.changeCurrency}>
                {props.currency === "usd" ? "USD" : "AUD"}
            </button>
        </div>
    )
}