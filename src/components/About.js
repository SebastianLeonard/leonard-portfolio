import React from "react";
import photo from "../images/self-portrait-3-2-2023.jpg"

function About(){
    return(
        <section className='about'>
            <h2>About Me</h2>
            <img src={photo} alt="Sebastian Leonard" width={250} height={265}></img>
            <p className='bio' class="bio">Sebastian Leonard is a web developer and designer who has dedicated the past 2 years to constant growth. Between academic studies, website designing, and playing piano, he never ceases to live life to the fullest. Feel free to look below to explore some of the hard work he has devoted his mind, heart, and soul towards.</p>
        </section>
    );
}

export default About;