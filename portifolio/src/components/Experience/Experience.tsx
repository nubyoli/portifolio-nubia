import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import type { Translations } from '../../types';
import './Experience.css';

interface ExperienceProps {
  t: Translations['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ t }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="section-header">
          <div className="section-title-tag">
            <Briefcase size={18} className="tag-icon" />
            <span>CAREER</span>
          </div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-spine-line" aria-hidden="true" />

          {t.items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`timeline-entry ${isLeft ? 'entry-left' : 'entry-right'}`}
              >
                <div className="timeline-spine-node">
                  <div className="spine-dot" />
                  <div className="spine-badge">
                    <Calendar size={12} className="calendar-icon" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="timeline-card-window">

                  <div className="card-window-topbar">
                    <div className="window-dots">
                      <span className="dot dot-close" />
                      <span className="dot dot-minimize" />
                      <span className="dot dot-expand" />
                    </div>
                    <span className="window-role-tag">{item.badge}</span>
                  </div>

                  <div className="card-window-body">
                    <h3 className="company-title">{item.company}</h3>
                    <h4 className="role-title">{item.role}</h4>
                    <p className="experience-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
