import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from 'react-masonry-css';
import { PROJECTS } from '../constants/config';
import '../assets/styles/Project.scss';

function Project() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

    const PROJECTS_PER_PAGE = 6;
    const SUMMARY_LENGTH = 150; // Characters to show in summary

    const openLightbox = (images: string[], index: number = 0) => {
        setCurrentImages(images);
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    // Calculate pagination
    const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = PROJECTS.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of projects section
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDescription = (projectId: string) => {
        setExpandedProjects(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <Masonry
            breakpointCols={breakpointColumns}
            className="projects-masonry-grid"
            columnClassName="projects-masonry-grid_column"
        >
            {currentProjects.map((project, index) => {
                const isExpanded = expandedProjects.has(project.id);
                const needsTruncation = project.description.length > SUMMARY_LENGTH;

                return (
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
                        <p>
                            {isExpanded || !needsTruncation
                                ? project.description
                                : truncateText(project.description, SUMMARY_LENGTH)}
                        </p>
                        {needsTruncation && (
                            <button
                                className="read-more-btn"
                                onClick={() => toggleDescription(project.id)}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                        <div className="tech-badges">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.images.length > 1 && (
                            <p style={{ fontSize: '0.9em', color: '#888', marginTop: '10px' }}>
                                Click image to view {project.images.length} photos
                            </p>
                        )}
                    </div>
                );
            })}
        </Masonry>

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                >
                    Previous
                </button>

                <div className="pagination-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>
        )}

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