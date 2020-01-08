import React from 'react';
import './nav.css';
import '../../experience/experience.jsx';
const nav = () =>{
    return(
        <nav className = "Nav">
            <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href="#education">Education</a></li>
            </ul>
        </nav>
    );
};

export default nav;