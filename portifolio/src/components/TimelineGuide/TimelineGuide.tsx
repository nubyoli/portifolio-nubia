import React from 'react';
import './TimelineGuide.css';

interface TimelineGuideProps {
  activeSection?: string;
}

export const TimelineGuide: React.FC<TimelineGuideProps> = ({ activeSection = 'about' }) => {
  const sections = [
    { id: 'about', label: 'Sobre mim' },
    { id: 'education', label: 'Formação' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
    { id: 'footer', label: 'Final' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="timeline-guide-rail" aria-label="Navegador vertical da página">
      <div className="rail-line" />
      <div className="rail-nodes">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`rail-node-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollTo(section.id)}
            title={section.label}
            aria-label={`Ir para a seção ${section.label}`}
          >
            <span className="node-bracket">&lt;/&gt;</span>
            <span className="node-tooltip">{section.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default TimelineGuide;
