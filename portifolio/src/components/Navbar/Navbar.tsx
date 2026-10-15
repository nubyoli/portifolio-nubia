import React, { useState } from 'react';
import { Sun, Moon, Globe, Menu, X, Check, ArrowUpRight } from 'lucide-react';
import type { Language, Theme, Translations } from '../../types';
import './Navbar.css';

interface NavbarProps {
  theme: Theme;
  language: Language;
  onToggleTheme: () => void;
  onToggleLanguage: (lang: Language) => void;
  t: Translations['nav'];
  isCurriculumPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  language,
  onToggleTheme,
  onToggleLanguage,
  t,
  isCurriculumPage = false
}) => {
  const [activeItem, setActiveItem] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'about', label: t.about, href: '#about' },
    { id: 'projects', label: t.projects, href: '#projects' },
    { id: 'contact', label: t.contact, href: '#contact' },
    { id: 'resume', label: t.resume, href: '/curriculo' }
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveItem(id);
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.location.assign(`/${href}`);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.assign(href);
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Navegação principal">
        {/* Desktop Nav Items */}
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`nav-link ${(item.id === 'resume' ? isCurriculumPage : activeItem === item.id) ? 'active' : ''}`}
                >
                  {item.label}
                  {item.id === 'resume' && <ArrowUpRight size={14} aria-label="abre uma nova página" />}
                  {item.id !== 'resume' && activeItem === item.id && <span className="active-pill" />}
                </button>
              </li>
              {index < navItems.length - 1 && <span className="nav-divider">|</span>}
            </React.Fragment>
          ))}
        </ul>

        {/* Controls: Language and Theme */}
        <div className="navbar-controls">
          {/* Language Selector */}
          <div className="lang-switcher">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Alterar idioma"
              aria-expanded={langDropdownOpen}
            >
              <Globe size={15} className="lang-icon" />
              <span className="lang-code">{language.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown">
                <button
                  type="button"
                  className={`lang-option ${language === 'pt' ? 'active' : ''}`}
                  onClick={() => {
                    onToggleLanguage('pt');
                    setLangDropdownOpen(false);
                  }}
                >
                  <span>🇧🇷 Português</span>
                  {language === 'pt' && <Check size={14} className="check-icon" />}
                </button>
                <button
                  type="button"
                  className={`lang-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    onToggleLanguage('en');
                    setLangDropdownOpen(false);
                  }}
                >
                  <span>🇺🇸 English</span>
                  {language === 'en' && <Check size={14} className="check-icon" />}
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            <div className={`theme-toggle-slider ${theme}`}>
              <span className="theme-icon sun-icon">
                <Sun size={14} />
              </span>
              <span className="theme-icon moon-icon">
                <Moon size={14} />
              </span>
              <span className="theme-toggle-knob" />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`mobile-nav-link ${(item.id === 'resume' ? isCurriculumPage : activeItem === item.id) ? 'active' : ''}`}
                >
                  {item.label}
                  {item.id === 'resume' && <ArrowUpRight size={16} aria-label="abre uma nova página" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
