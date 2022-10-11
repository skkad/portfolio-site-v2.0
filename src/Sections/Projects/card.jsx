
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProjectCard({project}){
    return(
        <Card >
            <CardMedia
                component="img"
                alt="project_img"
                // height="140"
                // width="200"
                image={project.image}
                className="img"
            />
            <CardContent className='component'>
                <a href={project.link} className="heading">
		 			{project.title}
		 		</a>
		 		<p className="desc_pro">{project.desc}</p>
                <div className="skill_container">
		 			{project.skills.map((skill,index) => (
						<p key={index}>{skill}</p>
					))}
				</div>  
                <div >
                    <a href={project.github} className="link">
                        <GitHubIcon />
                    </a>
                    <a href={project.link} className="link">
                        <OpenInNewIcon />
                    </a>
                </div>                
            </CardContent>

        </Card>

        // <Carousel>
        //     <Carousel.Item interval={1000}>
        //         <img
        //         className="img"
        //         src={project.image}
        //         alt="project_image"
        //         />
        //         <Carousel.Caption>
        //             <div className="right_pro">
        //                 <a href={project.link} className="heading">
		// 					{project.title}
		// 				</a>
		// 				<p className="desc_pro">{project.desc}</p>
		// 				<div className="skill_container">
		// 				    {project.skills.map((skill,index) => (
		// 						<p key={index}>{skill}</p>
		// 					))}
		// 				</div>
		// 				<div>
		// 					<a href={project.github} className="link">
		// 						<GitHubIcon />
		// 					</a>
		// 					<a href={project.link} className="link">
		// 						<OpenInNewIcon />
		// 					</a>
		// 				</div>                                
        //             </div>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        
    )
}
