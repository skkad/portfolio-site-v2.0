import React from "react";
import Heading from "../../Component/Heading";
import './contact.css';


export default function Contact(){
    return(
        <section id="contact" className="contact_section">
            <div className="heading_1">
                <Heading heading="What's next"/>
            </div>
            <h1 className="heading_2">Get In Touch</h1>
            <p className="desc_contact">
                Feel free to get in touch with me. I am always open to discussing new
				projects, creative ideas or opportunities to be part of your visions.                
            </p>
            <a href="mailto:kadirshaikh758@gmail.com">
				<button className="btn">Say Hello</button>
			</a>
        </section>
    )
}