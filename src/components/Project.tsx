import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PROJECTS } from '../constants/config';
import '../assets/styles/Project.scss';

function Project() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (images: string[], index: number = 0) => {
        setCurrentImages(images);
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            {PROJECTS.map((project, index) => (
                <div className="project" key={project.id}>
                    <div
                        onClick={() => openLightbox(project.images)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={project.images[0]}
                            className="zoom"
                            alt={project.title}
                            width="100%"
                        />
                    </div>
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                    ) : (
                        <h2>{project.title}</h2>
                    )}
                    <p>{project.description}</p>
                    {project.images.length > 1 && (
                        <p style={{ fontSize: '0.9em', color: '#888', marginTop: '10px' }}>
                            Click image to view {project.images.length} photos
                        </p>
                    )}
                </div>
            ))}
        </div>

        <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={currentImages.map(src => ({ src }))}
            index={currentIndex}
        />
    </div>
    );
}

export default Project;