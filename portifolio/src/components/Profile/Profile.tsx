import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { Theme, Translations } from '../../types';
import fotoPerfil from '../../assets/perfil.jpeg';
import './Profile.css';

interface ProfileProps {
  theme: Theme;
  t: Translations['hero'];
  profileJson: Translations['profileJson'];
}

export const Profile: React.FC<ProfileProps> = ({ t, profileJson }) => {
  const [copied, setCopied] = useState(false);
  const profilePhoto = fotoPerfil;

  const formattedJson = JSON.stringify(profileJson, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-content-container">
        <div className="hero-photo-wrapper">
          <div className="photo-card">
            <div className="photo-card-inner">
              <div className="photo-display">
                {profilePhoto ? (
                  <div className="avatar-frame">
                    <img
                      src={profilePhoto}
                      alt={profileJson.nome}
                      className="avatar-image"
                    />
                  </div>
                ) : (
                  <div className="avatar-frame avatar-placeholder">
                    <span className="avatar-initials">NT</span>
                  </div>
                )}

                <div className="photo-badge">
                  <span className="status-indicator-dot" />
                  <span className="photo-badge-text">{t.status}</span>
                </div>
              </div>

              <div className="photo-info-bar">
                <h1 className="photo-name">{profileJson.nome}</h1>
                <p className="photo-role">{profileJson.cargo}</p>
                <div className="photo-tags">
                  <span className="tag-pill">React</span>
                  <span className="tag-pill">TypeScript</span>
                  <span className="tag-pill">Java</span>
                  <span className="tag-pill">.NET</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-code-wrapper">
          <div className="code-window">
            <div className="code-titlebar">
              <span className="code-filename">perfil.json</span>

              <button
                type="button"
                className={`copy-code-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title={copied ? t.copySuccess : t.copyButton}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? t.copySuccess : t.copyButton}</span>
              </button>
            </div>

            <div className="code-content">
              <pre className="code-pre">
                <code>
                  <span className="json-bracket">&#123;</span>
                  {'\n'}  <span className="json-key">"nome"</span>: <span className="json-string">"{profileJson.nome}"</span>,
                  {'\n'}  <span className="json-key">"cargo"</span>: <span className="json-string">"{profileJson.cargo}"</span>,
                  {'\n'}  <span className="json-key">"formacao"</span>: <span className="json-bracket">&#123;</span>
                  {'\n'}    <span className="json-key">"curso"</span>: <span className="json-string">"{profileJson.formacao.curso}"</span>,
                  {'\n'}    <span className="json-key">"instituicao"</span>: <span className="json-string">"{profileJson.formacao.instituicao}"</span>,
                  {'\n'}    <span className="json-key">"status"</span>: <span className="json-highlight">"{profileJson.formacao.status}"</span>
                  {'\n'}  <span className="json-bracket">&#125;</span>,
                  {'\n'}  <span className="json-key">"sobreMim"</span>: <span className="json-string">"{profileJson.sobreMim}"</span>,
                  {'\n'}  <span className="json-key">"habilidades"</span>: <span className="json-bracket">&#123;</span>
                  {'\n'}    <span className="json-key">"linguagens"</span>: <span className="json-array">[{profileJson.habilidades.linguagens.map(l => `"${l}"`).join(', ')}]</span>,
                  {'\n'}    <span className="json-key">"frontend"</span>: <span className="json-array">[{profileJson.habilidades.frontend.map(f => `"${f}"`).join(', ')}]</span>,
                  {'\n'}    <span className="json-key">"backend"</span>: <span className="json-array">[{profileJson.habilidades.backend.map(b => `"${b}"`).join(', ')}]</span>,
                  {'\n'}    <span className="json-key">"bancoDeDados"</span>: <span className="json-array">[{profileJson.habilidades.bancoDeDados.map(d => `"${d}"`).join(', ')}]</span>,
                  {'\n'}    <span className="json-key">"ferramentas"</span>: <span className="json-array">[{profileJson.habilidades.ferramentas.map(t => `"${t}"`).join(', ')}]</span>
                  {'\n'}  <span className="json-bracket">&#125;</span>
                  {'\n'}<span className="json-bracket">&#125;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
