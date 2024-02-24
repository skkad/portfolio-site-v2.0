import React from "react";
import Heading from "../../Component/Heading";
import "./skills.css";
import s1 from "../../assets/logos/react.png";
import s2 from "../../assets/logos/js.png";
import s3 from "../../assets/logos/html-5.png";
import s4 from "../../assets/logos/css-3.png";
import s5 from "../../assets/logos/nodejs.png";
import s6 from "../../assets/logos/express-logo.png";
import s7 from "../../assets/logos/mongodb.jpeg";
import s8 from "../../assets/logos/java.png";

export default function Skills() {
  return (
    <section id="skills">
      <Heading heading="My Skills" />
      <div className="container_skills">
        <div className="column right">
          <div className="bar">
            <img className="logo" src={s1} alt="ReactJS-logo" />
            <img className="logo" src={s2} alt="Javascript-logo" />
            <img className="logo" src={s3} alt="html-logo" />
            <img className="logo" src={s4} alt="css-logo" />
          </div>

          <div className="bar">
            <img className="logo" src={s5} alt="nodejs-logo" />
            <img className="logo express" src={s6} alt="expressjs-logo" />
            <img className="logo mongodb" src={s7} alt="mongodb-logo" />
            {/* <img className="logo sql" src="./logos/mySql-logo.png" alt="mySql-logo" /> */}
            <img className="logo" src={s8} alt="java-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
