import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faNode } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { TECH_STACK, PERSONAL_INFO } from '../constants/config';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    ...TECH_STACK.frontend,
    ...TECH_STACK.backend.slice(0, 2),
    ...TECH_STACK.mobile.slice(0, 2)
];

const labelsSecond = [
    ...TECH_STACK.devops,
    ...TECH_STACK.databases.slice(0, 3)
];

const labelsThird = TECH_STACK.aiAndRealtime;

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack JavaScript Development</h3>
                    <p>Building scalable web and mobile applications with modern JavaScript frameworks. {PERSONAL_INFO.yearsOfExperience}+ years of experience creating real-world applications using React, Next.js, Vue.js, Svelte, and Node.js across the full stack.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud Infrastructure</h3>
                    <p>End-to-end deployment expertise from development to production. Proficient in containerization, CI/CD pipelines, cloud platforms, and managing scalable infrastructure for high-traffic applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNode} size="3x"/>
                    <h3>AI Integration & Real-Time Systems</h3>
                    <p>Building intelligent, interactive applications with AI APIs and real-time technologies. Specialized in integrating Claude, ChatGPT, automation workflows, and implementing WebRTC, WebSockets for live communication features.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;