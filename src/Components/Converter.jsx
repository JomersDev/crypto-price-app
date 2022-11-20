import React, { useState} from "react";

export default function Converter({price, symbol}) {

    const [amount, setAmount] = useState(0)

    return (
        <div className="converter-container">
            <h3 className="converter-title">Convert <span className="uppercase">{symbol}</span> to USD</h3>
            <div className="converter-item">
                <p className="converter-currency uppercase">{symbol}</p>
                <input type="text" placeholder="enter amount" name="coinAmount" onChange={event => setAmount(event.target.value)} />
            </div>
            <div className="converter-item">
                <p className="converter-currency">USD</p>
                <p className="converter-currency converter-background">${amount === 0 ? " " : (amount * price).toLocaleString()}</p>
            </div>
        </div>
    )
}