import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { Translations } from '../../types';
import './Footer.css';

interface FooterProps {
  t: Translations['footer'];
}

export const Footer: React.FC<FooterProps> = ({  }) => {

  return (
    <footer id="footer" className="footer-section">
      <div className="section-container">

        <div className="footer-divider" />

        <div className="footer-bottom-bar">
          <div className="footer-social-links">
            <a
              href="https://github.com/nubyoli"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/nubiaoliveiras"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:nubia.oliveiras06@gmail.com"
              className="social-icon-btn"
              aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
