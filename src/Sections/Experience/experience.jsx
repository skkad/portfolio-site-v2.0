import React from "react";
import { useState } from "react";
import Heading from '../../Component/Heading/index.jsx';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import experienceData from "../../Data/experiencedata.js";
import  "./experience.css";


export default function Experience(){
    const [currIndex,setCurrIndex] = useState(0);
    const data = experienceData;
    return(
        <section id="experience">
            <Heading heading="Where I've worked" />
            <div className="container">
                <div className="left_exp">
                    {data.map((exper,index)=>{
                        return(
                        <div 
                            key={index}
                            className={ index === currIndex ? "tab active_tab" : "tab" } 
                            onClick={()=>setCurrIndex(index)}
                        
                        >{exper.company}</div>
                    )})}
                </div>
                <div className="right_exp">
                    <h1 className="title">
                        {data[currIndex].title}{" "}
						<a
							href={data[currIndex].link}
							target="_blank"
							rel="noreferrer"
						>
							@ {data[currIndex].company}
						</a>

                    </h1>
                    <p className="duration">
                        {data[currIndex].duration}
                    </p>
                    {data[currIndex].desc.map((point,index) => (
						<p key={index} className="desc_exp">
							<PlayArrowIcon /> {point}
						</p>
					))}                   
                </div>
            </div>
        </section>
    )
}