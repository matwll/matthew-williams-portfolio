import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer(){
    return (
        <footer>
            <a href="https://github.com/matwll" target="_blank" ><FaGithub style={{height: '50px', width: '50px'}} /></a>
            <h3>Click the icons to be taken to my profile</h3>
            <a href="https://www.linkedin.com/in/matthew-williams-9b70881b1/" target="_blank" ><FaLinkedin style={{height: '50px', width: '50px'}}/></a>
        </footer>
    )
};

export default Footer;