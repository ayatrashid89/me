import React from 'react';
import './sidebar.css'
import Nav from './nav/Nav';
import SocialMedia from './socialmedia/SocialMedia';
import Button from '@material-ui/core/Button';
import DownloadLink from "react-download-link";

import Resume from "../../assets/resume/AyatRashid.pdf";

const sidebar = () =>{
    return(
        <div className = "Sidebar">

            <div className="myPic">
           <a href="#home"> <img className= "myimg" src={ require('./ayat12.jpeg') } /> </a>
            </div >
            
            <Nav/>
            <SocialMedia/>
            <Button>
                <a href={Resume}>Download Resume</a>
            </Button>
            
            
        </div>
    );
};

export default sidebar;
