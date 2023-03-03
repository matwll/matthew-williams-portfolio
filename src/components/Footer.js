import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ justifyContent: "space-around" }}>
      <a href="https://github.com/matwll" target="_blank">
        <FaGithub style={{ height: "50px", width: "50px" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-williams-9b70881b1/"
        target="_blank"
      >
        <FaLinkedin style={{ height: "50px", width: "50px" }} />
      </a>
      <a href="https://www.hackerrank.com/maw01091989" target="_blank">
        <FaHackerrank style={{ height: "50px", width: "50px" }} />
      </a>
    </footer>
  );
}

export default Footer;
