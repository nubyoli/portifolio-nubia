import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Translations } from '../../types';
import './Projects.css';

interface ProjectsProps {
  t: Translations['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const projectsList = t.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = projectsList.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentProject = projectsList[currentIndex] || t.items[0];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-title-row">
            <h2 className="projects-title">{t.title}</h2>
          </div>
          <p className="projects-subtitle">{t.subtitle}</p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-card-container">
            <div className="project-card">
              <div className="project-image-slot">
                {currentProject.videoUrl ? (
                  <video
                    className="project-image"
                    src={currentProject.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={`Prévia em vídeo do projeto ${currentProject.name}`}
                  />
                ) : currentProject.imageUrl ? (
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.name}
                    className="project-image"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <ImageIcon size={32} className="placeholder-icon" />
                    <span className="placeholder-text">{t.imagePlaceholder}</span>
                  </div>
                )}
              </div>
              <div className="project-details">
                <div className="project-details-top">
                  <div className="project-heading-block">
                    <h3 className="project-name">{currentProject.name}</h3>
                    <span className="project-purpose">{currentProject.purpose}</span>
                  </div>

                  <div className="project-tags">
                    {currentProject.technologies.map((tech, idx) => (
                      <span key={`${tech}-${idx}`} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">{currentProject.description}</p>
                </div>

                <div className="project-actions">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="Ver repositório no GitHub"
                    >
                      <FaGithub size={16} />
                      <span>{t.viewCode}</span>
                    </a>
                  )}

                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                      title="Abrir projeto online"
                    >
                      <ExternalLink size={16} />
                      <span>{t.viewLive}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button
              type="button"
              onClick={handlePrev}
              className="carousel-arrow-btn"
              aria-label="Projeto anterior"
              title="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-pagination">
              {projectsList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                  aria-label={`Ir para projeto ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="carousel-arrow-btn"
              aria-label="Próximo projeto"
              title="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
