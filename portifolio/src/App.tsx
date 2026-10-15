import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TimelineGuide from './components/TimelineGuide/TimelineGuide';
import CurriculumViewer from './components/CurriculumViewer/CurriculumViewer';
import { portfolioContent } from './data/portfolioData';
import type { Theme, Language } from './types';
import './App.css';

export function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme;
    return saved === 'light' ? 'light' : 'dark';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language;
    return saved === 'en' ? 'en' : 'pt';
  });

  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    const sections = ['about', 'projects', 'education', 'skills', 'experience', 'contact', 'footer'];
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = portfolioContent[language];
  const isCurriculumPage = window.location.pathname.replace(/\/+$/, '') === '/curriculo';

  return (
    <div className="app-wrapper">
      {!isCurriculumPage && <TimelineGuide activeSection={activeSection} />}

      <Navbar
        theme={theme}
        language={language}
        onToggleTheme={toggleTheme}
        onToggleLanguage={handleLanguageChange}
        t={content.nav}
        isCurriculumPage={isCurriculumPage}
      />

      {isCurriculumPage ? (
        <main className="curriculum-page">
          <CurriculumViewer />
        </main>
      ) : (
      <main>
        <Profile
          theme={theme}
          t={content.hero}
          profileJson={content.profileJson}
        />

        <div className="section-horizontal-divider" />

        <Education t={content.education} />

        <div className="section-horizontal-divider" />

        <SkillsSection theme={theme} t={content.skills} />

        <div className="section-horizontal-divider" />

        <Experience t={content.experience} />

        <div className="section-horizontal-divider" />

        <Projects t={content.projects} />

        <div className="section-horizontal-divider" />

        <Contact t={content.contact} />

      </main>
      )}

      <Footer t={content.footer} />
    </div>
  );
}

export default App;
