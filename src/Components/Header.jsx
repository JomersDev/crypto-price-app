import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="header-container">
            <Link to="/"><h1 className="title">Coin Stats</h1></Link>
        </div>
    )
}