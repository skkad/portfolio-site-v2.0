import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Heading from "../../Component/Heading";
import './projects.css';
import projectsData from "../../Data/projectdata";
import ProjectCard from './card';

function Project()
{

    const data = projectsData.frontend; // frontend projects

    return (
        <section id="projects">
            <Heading heading="Some of my Projects" />
            <Carousel className="container_project"  >
            {
                data.map( (project, index) => <ProjectCard key={index} project={project} /> )
            }
            </Carousel>
        </section>
        
    )
}


export default Project;