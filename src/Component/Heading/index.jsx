import React from "react";
import './heading.css';

export default function Heading({index,heading}){
    return(
        <div className="container">
            <p className="index">{index}</p>
            <p className="heading">{heading}</p>
            <div className="line_heading"></div>
        </div>
    )
}