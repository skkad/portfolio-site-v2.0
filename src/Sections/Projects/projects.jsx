import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import Heading from "../../Component/Heading";
import './projects.css';
import projectsData from "../../Data/projectdata";
import ProjectCard from './card';

function Project()
{
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]
    const data = projectsData.frontend; // frontend projects

    // const settings = {
    //     slidesToShow: 2,
    //     slidesToScroll: 1
    // }
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

// function Item(props){
//     return (
//         // <Paper>
            

//         //     <Button className="CheckButton">
//         //         Check it out!
//         //     </Button>
//         // </Paper>
//     )
// }

export default Project;