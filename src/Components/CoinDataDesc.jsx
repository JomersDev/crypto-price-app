import React from "react";
import DOMPurify from "dompurify";

export default function CoinDataDesc(props) {
    return (
        <div className="coindatadesc-container">
            <p dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.desc)
            }}>
            </p>
        </div>
    )
}