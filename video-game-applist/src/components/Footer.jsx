import React from "react";
import githublogo from "../assets/github_logo.png";
import linkedinlogo from "../assets/linkedin_logo.png";

function Footer() {
  return (
    <div className='flex justify-center items-center border-t-2 py-2 gap-2'>
      <p>Created by Elie</p>
      <a href="https://github.com/Juniorelie/project-react-app" target='_blank'>
        <img src={githublogo} width={40} height={40} alt="github logo image" />
      </a>
      <a href="https://www.linkedin.com/in/junior-mbakop/" target='_blank'>
        <img src={linkedinlogo} width={40} height={40} alt="linkedin logo image" />
      </a>
    </div>
  );
}

export default Footer;
