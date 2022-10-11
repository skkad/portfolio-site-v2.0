import React from "react";
import Heading from "../../Component/Heading";
import './skills.css';

export default function Skills(){
    return(
        <section id="skills">
            <Heading heading="My Skills"/>
            <div className="container_skills">
                <div className="column right">
                    <div className="bar">
                        <img className="logo" src="../logos/react.png" alt="ReactJS-logo" />
                        <img className="logo" src="../logos/js.png" alt="Javascript-logo" />
                        <img className="logo" src="../logos/html-5.png" alt="html-logo"/>
                        <img className="logo" src="../logos/css-3.png" alt="css-logo" />
                    </div>
                                     
                    <div className="bar">
                        <img className="logo" src="../logos/nodejs.png" alt="nodejs-logo" />
                        <img className="logo express" src="../images/express-logo.png" alt="expressjs-logo" />
                        <img className="logo mongodb" src="../logos/mongodb.jpeg" alt="mongodb-logo" />
                        {/* <img className="logo sql" src="./logos/mySql-logo.png" alt="mySql-logo" /> */}
                        <img className="logo" src="../logos/java.png" alt="java-logo" />
                    </div>
                    
                </div>
                
                
            </div>
        </section>
    )
}