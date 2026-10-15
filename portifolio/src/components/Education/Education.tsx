import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import type { Translations } from '../../types';
import './Education.css';

interface EducationProps {
  t: Translations['education'];
}

export const Education: React.FC<EducationProps> = ({ t }) => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-tag">
            <GraduationCap size={18} className="tag-icon" />
            <span>ACADEMIC</span>
          </div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Education Cards */}
        <div className="education-list">
          {t.items.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-card-glow" />
              <div className="education-card-content">
                <div className="education-icon-wrapper">
                  {index === 0 ? (
                    <GraduationCap size={28} className="edu-icon" />
                  ) : (
                    <Award size={28} className="edu-icon" />
                  )}
                </div>

                <div className="education-details">
                  <div className="education-meta">
                    <span className="education-period">
                      <Calendar size={13} className="meta-icon" />
                      {item.period}
                    </span>
                    <span
                      className={`education-badge ${
                        item.status === 'Em andamento' || item.status === 'In progress'
                          ? 'status-ongoing'
                          : 'status-completed'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="education-institution">{item.institution}</h3>
                  <div className="education-degree">
                    <BookOpen size={15} className="degree-bullet" />
                    <span>{item.degree}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
