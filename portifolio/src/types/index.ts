export type Theme = 'dark' | 'light';
export type Language = 'pt' | 'en';

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  status: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  purpose: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Translations {
  nav: {
    about: string;
    projects: string;
    interests: string;
    posts: string;
    contact: string;
    resume: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewLive: string;
    imagePlaceholder: string;
    items: ProjectItem[];
  };
  hero: {
    status: string;
    greeting: string;
    role: string;
    copySuccess: string;
    copyButton: string;
  };
  education: {
    title: string;
    subtitle: string;
    inProgress: string;
    completed: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    dragHint: string;
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailCardLabel: string;
    emailAddress: string;
    locationCardLabel: string;
    locationAddress: string;
    fileTab: string;
    headerCompose: string;
    secureChannel: string;
    toPrefix: string;
    responsePrefix: string;
    responseTime: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    securityNote: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    ctaText: string;
    rights: string;
  };
  profileJson: {
    nome: string;
    cargo: string;
    formacao: {
      curso: string;
      instituicao: string;
      status: string;
    };
    sobreMim: string;
    habilidades: {
      linguagens: string[];
      frontend: string[];
      backend: string[];
      bancoDeDados: string[];
      ferramentas: string[];
    };
  };
}
