import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home_section" id="home">
        <p className="greet">Hi, my name is</p>
        <h1 className="heading1">Kadir.</h1>
        <h1 className="heading2">I am a Software Developer</h1>
        {/* <p className="desc">
                    
                </p> */}

        <a href="#projects">
          <button className="btn">Check out my work !</button>
        </a>
      </section>
      {/* <section className="image_section" id="image">
                <image className="photo" src="https://c.ndtvimg.com/2022-07/ei3ojfgg_salman-khan-_625x300_15_July_22.jpg" alt="my image will be there in short time"/>
            </section>    */}
    </>
  );
}
