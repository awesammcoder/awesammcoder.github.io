import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/config';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={PERSONAL_INFO.profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{PERSONAL_INFO.name}</h1>
          <p>{PERSONAL_INFO.title}</p>

          <div className="mobile_social_icons">
            <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;