import React from 'react';
import "./App.css";

export default function ProgressBar({progress}) {
    return(
        <div className="amount-consumed">
            <progress min="0" max="100" value={progress}></progress>
        </div>
    );

}