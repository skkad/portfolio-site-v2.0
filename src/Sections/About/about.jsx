import React from "react";
import "./about.css";
import Heading from "../../Component/Heading";
import profileImg from "../../assets/images/profile_img.jpg";

export default function About() {
  return (
    <section id="about">
      <Heading heading="About Me" />
      <div className="container_about">
        <p className="desc_about">
          {/* Enthusiastic and aspiring Software Developer student with an interest
          in developing responsive web application. Completed my bachelors in
          Mechanical Engneering and looking forward for an opportunity to start
          my professional carrier as software developer. */}
        </p>
        {/* A Computer Science graduate student with an interest in Frontend technologies, Algorithms, and problem-solving. 
                    Looking forward to an opportunity where I can utilize my professional skills that offers challenge and
                     professional growth while being ingenious and pliable. */}
        Proficient in various programming languages and frameworks, including
        [React, Node, Express, MongoDB, MySQL], I'm driven by a passion for
        building elegant solutions that make a meaningful impact. Whether it's
        designing intuitive user interfaces, architecting robust backend
        systems, or troubleshooting complex technical challenges, I approach
        every task with enthusiasm and a commitment to excellence.
        <img src={profileImg} alt="profile" className="profile_image" />
        <div className="image_border"></div>
      </div>
    </section>
  );
}
