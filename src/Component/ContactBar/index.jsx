import './contactbar.css'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import Email from '@mui/icons-material/Email'

export default function ContactBar(){
    return(
        <div className="contact_bar_wrapper">
            <div className="contact_bar">
                    {/* https://www.linkedin.com/in/kadir-shaikh11
                        https://github.com/skkad
                    */}
                    <a href="https://www.linkedin.com/in/kadir-shaikh11"   className="icon" >
                        <LinkedInIcon  />
                    </a>                
                    
                    <a href="https://github.com/skkad"  className="icon" >
                        <GitHubIcon  />
                    </a>
                           
                    <a href="/" target="_blank" className="icon" >
                        <InstagramIcon  />
                    </a>                
                
                    <a href="/" target="_blank" className="icon" >
                        <TwitterIcon  />
                    </a>
                
                    {/* <a href="mailto:kadirshaikh758@gmail.com" className="icon">
                        <Email/>
                    </a> */}
                    <div className="line"></div>
    
            </div>
            <div className="contact_bar">
                    <a href="mailto:kadirshaikh758@gmail.com" className="email">
                        kadirshaikh758@gmail.com
                    </a>
                    <div className="line"></div>
            </div>
            
            
        </div>
    )
}
