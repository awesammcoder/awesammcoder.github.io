import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/config';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio by {PERSONAL_INFO.name} - {PERSONAL_INFO.title}</p>
    </footer>
  );
}

export default Footer;