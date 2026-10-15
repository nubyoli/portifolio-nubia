import type { Translations } from '../types';
import sintonizaVideo from '../assets/SINTONIZA_TELA.mp4';
import jogoImage from '../assets/jogo.png';

export const portfolioContent: Record<'pt' | 'en', Translations> = {
  pt: {
    nav: {
      about: 'Sobre mim',
      projects: 'Projetos',
      interests: 'Interesses',
      posts: 'Postagens',
      contact: 'Contato',
      resume: 'Currículo'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Trabalhos desenvolvidos, acadêmicos e pessoais',
      viewCode: 'Código no GitHub',
      viewLive: 'Visualizar projeto',
      imagePlaceholder: 'IMAGEM / GIF',
      items: [
        {
          id: 'sintoniza',
          name: 'Sintoniza',
          purpose: 'Trabalho Interdisciplinar — Desenvolvimento Web',
          description:
            'Plataforma web que conecta artistas musicais independentes a estabelecimentos e organizadores de eventos, facilitando a divulgação, a comunicação e as propostas de contratação.',
          technologies: ['Desenvolvimento Web', 'Scrum', 'MVP', 'ODS 8'],
          githubUrl: '',
          videoUrl: sintonizaVideo
        },
        {
          id: 'algoritmos',
          name: 'Star Storm',
          purpose: 'Engenharia de Software — PUC Minas',
          description:
            'Resolução de problemas computacionais, estruturas de dados fundamentais e algoritmos clássicos implementados para a disciplina de Introdução a Algoritmos.',
          technologies: ['Python', 'Algoritmos', 'Lógica de Programação'],
          githubUrl: 'https://github.com/nubyoli/TP9-Trabalho-Pratico-Algoritmos',
          imageUrl: jogoImage
        }
      ]
    },
    hero: {
      status: 'Disponível para novos desafios',
      greeting: 'Olá, eu sou a Núbia',
      role: 'Estudante de Engenharia de Software',
      copySuccess: 'JSON copiado!',
      copyButton: 'Copiar JSON'
    },
    education: {
      title: 'Formação',
      subtitle: 'Trajetória acadêmica e base técnica',
      inProgress: 'Em andamento',
      completed: 'Concluído',
      items: [
        {
          institution: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
          period: '2024 — o momento',
          degree: 'Bacharelado em Engenharia de Software',
          status: 'Em andamento'
        },
        {
          institution: 'Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)',
          period: '2022 — 2024',
          degree: 'Ensino Médio e Técnico em Informática',
          status: 'Concluído'
        }
      ]
    },
    skills: {
      title: 'Skills',
      subtitle: 'Tecnologias, linguagens e ferramentas do meu ecossistema',
      dragHint: 'Arraste para girar a esfera e clique nos ícones para explorar'
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Vivência prática no mercado e projetos de extensão',
      items: [
        {
          id: 'exp-1',
          company: 'RDI - Rocha Digital Intelligence',
          role: 'Desenvolvedora de software júnior',
          period: '2025 — presente',
          badge: 'Atual',
          description:
            'Atuação no desenvolvimento de soluções de software full stack, criação de componentes reutilizáveis, integração de APIs e boas práticas de engenharia de software.'
        },
        {
          id: 'exp-2',
          company: 'Projeto de Extensão Mulheres Mil — CEFET-MG',
          role: 'Redatora Técnica & Bolsista',
          period: '2025',
          badge: 'Extensão',
          description:
            'Atuei como redatora das apostilas e materiais didáticos do curso, desenvolvendo conteúdo de capacitação em tecnologia com foco em inclusão sociodigital.'
        }
      ]
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos construir algo incrível juntos',
      emailCardLabel: 'E-mail',
      emailAddress: 'nubia.oliveiras06@gmail.com',
      locationCardLabel: 'Localização',
      locationAddress: 'Belo Horizonte, MG — Brasil',
      fileTab: 'enviarMensagem.ts',
      headerCompose: 'email.compor',
      secureChannel: 'canal seguro',
      toPrefix: 'para:',
      responsePrefix: 'resposta:',
      responseTime: 'em até 24h',
      nameLabel: 'NOME',
      namePlaceholder: 'Seu nome',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'seu@email.com',
      subjectLabel: 'ASSUNTO',
      subjectPlaceholder: 'Proposta de projeto / Colaboração',
      messageLabel: 'MENSAGEM',
      messagePlaceholder: 'Conte sobre seu projeto, prazos e objetivos...',
      securityNote: '// Protegido por filtros de spam e limites de envio',
      sendButton: 'ENVIAR MENSAGEM',
      sendingButton: 'ENVIANDO...',
      successMessage: 'Mensagem enviada com sucesso! Retornarei em breve.',
      errorMessage: 'Erro ao enviar mensagem. Tente novamente ou use o e-mail direto.'
    },
    footer: {
      ctaText: '<Veja mais sobre meus projetos e interesses nos demais menus! />',
      rights: 'Feito com carinho por Núbia Torres de Oliveira'
    },
    profileJson: {
      nome: 'Núbia Torres de Oliveira',
      cargo: 'Estudante de Engenharia de Software',
      formacao: {
        curso: 'Engenharia de Software',
        instituicao: 'PUC Minas',
        status: 'Em andamento'
      },
      sobreMim:
        'Sou estudante de Engenharia de Software, interessada em desenvolvimento de software, criação de interfaces e resolução de problemas por meio da tecnologia.',
      habilidades: {
        linguagens: ['Java', 'Python', 'JavaScript', 'C#'],
        frontend: ['HTML', 'CSS', 'React'],
        backend: ['.NET', 'Spring Boot'],
        bancoDeDados: ['SQL Server', 'Supabase'],
        ferramentas: ['Git', 'GitHub', 'VS Code']
      }
    }
  },
  en: {
    nav: {
      about: 'About me',
      projects: 'Projects',
      interests: 'Interests',
      posts: 'Posts',
      contact: 'Contact',
      resume: 'Resume'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Featured academic and personal projects',
      viewCode: 'GitHub Repository',
      viewLive: 'Live Demo',
      imagePlaceholder: 'IMAGE / GIF',
      items: [
        {
          id: 'sintoniza',
          name: 'Sintoniza',
          purpose: 'Interdisciplinary Project — Web Development',
          description:
            'A web platform that connects independent music artists with venues and event organizers, making promotion, communication, and booking proposals easier to manage.',
          technologies: ['Web Development', 'Scrum', 'MVP', 'SDG 8'],
          githubUrl: '',
          videoUrl: sintonizaVideo
        },
        {
          id: 'algoritmos',
          name: 'Star Storm',
          purpose: 'Software Engineering — PUC Minas',
          description:
            'Classic data structures and computational problem-solving algorithms built for the Introduction to Algorithms course.',
          technologies: ['Python', 'Algorithms', 'Logic'],
          githubUrl: 'https://github.com/nubyoli/TP9-Trabalho-Pratico-Algoritmos',
          imageUrl: jogoImage
        }
      ]
    },
    hero: {
      status: 'Open to new challenges',
      greeting: "Hello, I'm Núbia",
      role: 'Software Engineering Student',
      copySuccess: 'JSON copied!',
      copyButton: 'Copy JSON'
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background & technical foundation',
      inProgress: 'In progress',
      completed: 'Completed',
      items: [
        {
          institution: 'Pontifical Catholic University of Minas Gerais (PUC Minas)',
          period: '2024 — Present',
          degree: 'Bachelor of Science in Software Engineering',
          status: 'In progress'
        },
        {
          institution: 'Federal Center for Technological Education of Minas Gerais (CEFET-MG)',
          period: '2022 — 2024',
          degree: 'High School & Vocational Technical Degree in Computer Science',
          status: 'Completed'
        }
      ]
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies, languages, and tools in my ecosystem',
      dragHint: 'Drag to rotate the 3D sphere and click icons to explore'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Practical industry experience & community projects',
      items: [
        {
          id: 'exp-1',
          company: 'RDI - Rocha Digital Intelligence',
          role: 'Junior Software Developer',
          period: '2025 — Present',
          badge: 'Current',
          description:
            'Working on full-stack software development, building reusable UI components, integrating APIs, and applying modern software engineering patterns.'
        },
        {
          id: 'exp-2',
          company: 'Mulheres Mil Extension Project — CEFET-MG',
          role: 'Technical Writer & Academic Fellow',
          period: '2023',
          badge: 'Extension',
          description:
            'Authored educational handouts and course materials for digital literacy training focused on community and social empowerment through technology.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's build something great together",
      emailCardLabel: 'Email',
      emailAddress: 'nubia.oliveiras06@gmail.com',
      locationCardLabel: 'Location',
      locationAddress: 'Belo Horizonte, MG — Brazil',
      fileTab: 'enviarMensagem.ts',
      headerCompose: 'email.compor',
      secureChannel: 'secure channel',
      toPrefix: 'to:',
      responsePrefix: 'response:',
      responseTime: 'within 24h',
      nameLabel: 'NAME',
      namePlaceholder: 'Your name',
      emailLabel: 'EMAIL',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'SUBJECT',
      subjectPlaceholder: 'Project proposal / Collaboration',
      messageLabel: 'MESSAGE',
      messagePlaceholder: 'Tell me about your project, goals, and timeline...',
      securityNote: '// Protected by spam filters and rate limits',
      sendButton: 'SEND MESSAGE',
      sendingButton: 'SENDING...',
      successMessage: 'Message sent successfully! I will reply shortly.',
      errorMessage: 'Failed to send message. Please try again or reach out directly.'
    },
    footer: {
      ctaText: '<Explore more about my projects and interests in the other menus! />',
      rights: 'Crafted with care by Núbia Torres de Oliveira'
    },
    profileJson: {
      nome: 'Núbia Torres de Oliveira',
      cargo: 'Software Engineering Student',
      formacao: {
        curso: 'Software Engineering',
        instituicao: 'PUC Minas',
        status: 'In progress'
      },
      sobreMim:
        'Software Engineering student passionate about software development, interface craft, and solving real-world problems through technology.',
      habilidades: {
        linguagens: ['Java', 'Python', 'JavaScript', 'C#'],
        frontend: ['HTML', 'CSS', 'React'],
        backend: ['.NET', 'Spring Boot'],
        bancoDeDados: ['SQL Server', 'Supabase'],
        ferramentas: ['Git', 'GitHub', 'VS Code']
      }
    }
  }
};
