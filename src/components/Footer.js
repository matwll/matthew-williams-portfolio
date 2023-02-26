import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer(){
    return (
        <footer>
            <h2>Footer</h2>
            <a href="https://github.com/matwll" target="_blank" ><FaGithub style={{height: '50px', width: '50px'}} /></a>
            <a href="https://www.linkedin.com/in/matthew-williams-9b70881b1/" target="_blank" ><FaLinkedin style={{height: '50px', width: '50px'}}/></a>
        </footer>
    )
};

export default Footer;