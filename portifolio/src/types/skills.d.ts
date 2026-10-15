declare module '../SkillsGlobe/SkillsGlobe' {
  import { ComponentType } from 'react';
  interface SkillsGlobeProps {
    skills: any[];
    speed?: number;
    color?: string;
  }
  const SkillsGlobe: ComponentType<SkillsGlobeProps>;
  export default SkillsGlobe;
}

declare module '../../data/skills' {
  export const CATEGORIES: string[];
  const SKILLS: Array<{
    name: string;
    icon: any;
    color: string;
    category: string;
    link: string;
  }>;
  export default SKILLS;
}
