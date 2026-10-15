import React, { useState } from 'react';
import { Cpu, RotateCcw, Sparkles } from 'lucide-react';
import SkillsGlobe from '../SkillsGlobe/SkillsGlobe';
import SKILLS, { CATEGORIES } from '../../data/skills';
import type { Theme, Translations } from '../../types';
import './SkillsSection.css';

interface SkillsSectionProps {
  theme: Theme;
  t: Translations['skills'];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ theme, t }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const filteredSkills =
    selectedCategory === 'Todas' || selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s: { category: string }) => s.category === selectedCategory);

  const categories = ['Todas', ...CATEGORIES];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-tag">
            <Cpu size={18} className="tag-icon" />
            <span>TECH STACK</span>
          </div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Categories Bar */}
        <div className="skills-categories-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Globe Container Card */}
        <div className="globe-showcase-card">
          <div className="globe-hint-banner">
            <RotateCcw size={14} className="hint-icon spin-icon" />
            <span>{t.dragHint}</span>
            <span className="skill-counter">
              <Sparkles size={12} /> {filteredSkills.length} techs
            </span>
          </div>

          <div className="globe-viewport">
            <SkillsGlobe
              key={`${theme}-${selectedCategory}`}
              skills={filteredSkills}
              color={theme === 'dark' ? '#7C3AED' : '#8B5CF6'}
              speed={0.16}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
