import React from "react";
import Project from './Project'
import thmbTemplate from "../images/thumbnail-template.jpg"

function Projects(){
    return(
        <section className="projects">
            <h2>Projects</h2>
            <Project
            title={'Sebastian Leonard Designs'}
            thumbnail={thmbTemplate}
            desc={'The initial and currently running portfolio website. It has been fully hand-coded by yours truly, using primarily HTML and CSS, with small hints of JavaScript. The overall design of the website is my proudest work, and being able to create the level of functionality that I have with mostly CSS is impressive given my skills at the time of development.'}
            link={'https://sebastianleonarddesigns.com'}
            ></Project>

            
            <Project
            title={'Test 1'}
            thumbnail={thmbTemplate}
            desc={'Lorem Ipsum'}
            link={'https://www.google.com'}
            ></Project>
{
            /*<Project
            title={}
            thumbnail={}
            desc={}
            link={}
            ></Project> */
            }   

        </section>
    );
}

export default Projects;