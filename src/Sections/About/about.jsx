import React from "react";
import './about.css'
import Heading from '../../Component/Heading';


export default function About(){
    return(
        <section id="about">
            <Heading heading="About Me"/>
            <div className="container_about">
				
					<p className="desc_about">
                        Enthusiastic and aspiring Software Developer student with an interest in developing responsive web application.
                        Completed my bachelors in Mechanical Engneering and looking forward for an opportunity to start my professional carrier as software developer.
					</p>
                    {/* A Computer Science graduate student with an interest in Frontend technologies, Algorithms, and problem-solving. 
                    Looking forward to an opportunity where I can utilize my professional skills that offers challenge and
                     professional growth while being ingenious and pliable. */}

					<img
						src='../images/profile_img.jpg'
						alt="profile"
						className="profile_image"
					/>
					<div className="image_border"></div>
				
			</div>
        </section>
    )
}