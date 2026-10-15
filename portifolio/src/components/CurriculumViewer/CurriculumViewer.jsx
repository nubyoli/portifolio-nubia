import { FiDownload, FiExternalLink } from "react-icons/fi";
import CURRICULUM_CONFIG from "../../config/curriculumConfig";
import "./CurriculumViewer.css";

export default function CurriculumViewer() {
  const { FILE } = CURRICULUM_CONFIG;

  return (
    <div className="cv-viewer">
      <div className="cv-toolbar">
        <div className="cv-actions">
          <a className="cv-button primary" href={FILE.path} download={FILE.downloadName}>
            <FiDownload aria-hidden="true" /> Baixar PDF
          </a>
          <a className="cv-button" href={FILE.path} target="_blank" rel="noopener noreferrer">
            <FiExternalLink aria-hidden="true" /> Abrir
          </a>
        </div>
      </div>

      <iframe className="cv-document" src={FILE.path} title="Currículo em PDF" />
    </div>
  );
}
