import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, AlertCircle, Play } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import type { Translations } from '../../types';
import './Contact.css';

interface ContactProps {
  t: Translations['contact'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const socialLinks = {
    github: 'https://github.com/nubyoli',
    linkedin: 'https://www.linkedin.com/in/nubiaoliveiras',
    instagram: 'https://www.instagram.com/nbia_oliveira/',
    discord: 'https://discord.com'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('loading');

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || 'Mensagem do Portfólio',
      message: formData.message,
      to_email: 'nubia.oliveiras06@gmail.com'
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );

      setStatus('success');
      setStatusMessage(t.successMessage);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('[EmailJS Error]:', err);
      setStatus('error');
      setStatusMessage(t.errorMessage);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-sidebar">
          <div className="info-card">
            <div className="info-card-header">
              <span className="info-card-title">{t.emailCardLabel}</span>
              <Mail size={16} className="info-card-icon" />
            </div>
            <a
              href={`mailto:${t.emailAddress}`}
              className="info-card-value"
              title="Enviar e-mail diretamente"
            >
              {t.emailAddress}
            </a>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <span className="info-card-title">{t.locationCardLabel}</span>
              <MapPin size={16} className="info-card-icon" />
            </div>
            <span className="info-card-value location-text">{t.locationAddress}</span>
          </div>

          <div className="social-squares-grid">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-square"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-square"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-square"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="social-square"
              aria-label="Discord"
              title="Discord"
            >
              <FaDiscord size={22} />
            </a>
          </div>
        </div>

        <div className="contact-editor-column">
          <div className="editor-window">

            <div className="editor-tab-bar">
              <div className="editor-tab active">
                <span className="tab-lang-badge">TS</span>
                <span className="tab-title">{t.fileTab}</span>
                <span className="tab-close-icon">×</span>
              </div>
            </div>

            <div className="editor-window-inner">
              <div className="editor-meta-header">
                <div className="meta-row meta-top">
                  <span className="meta-label-box">
                    <Mail size={13} className="meta-icon-purple" />
                    <span className="meta-compose-title">{t.headerCompose}</span>
                  </span>
                  <span className="meta-tag-secure">{t.secureChannel}</span>
                </div>

                <div className="meta-row meta-bottom">
                  <span className="meta-recipient">
                    <span className="meta-prefix">{t.toPrefix} </span>
                    <span className="meta-recipient-address">{t.emailAddress}</span>
                  </span>
                  <span className="meta-response">
                    <span className="meta-prefix">{t.responsePrefix} </span>
                    <span className="meta-response-highlight">{t.responseTime}</span>
                  </span>
                </div>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-two-cols">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.nameLabel}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.emailLabel}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    {t.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    required
                    className="form-textarea"
                  />
                </div>

                <div className="editor-footer-note">
                  <span>{t.securityNote}</span>
                </div>

                {status === 'success' && (
                  <div className="feedback-banner success">
                    <Check size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="feedback-banner error">
                    <AlertCircle size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="form-action-row">
            <button
              type="submit"
              form="contact-form"
              disabled={status === 'loading'}
              className="send-message-btn"
            >
              {status === 'loading' ? (
                <>
                  <Send size={15} className="spinner" />
                  <span>{t.sendingButton}</span>
                </>
              ) : (
                <>
                  <Play size={14} fill="currentColor" />
                  <span>{t.sendButton}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
