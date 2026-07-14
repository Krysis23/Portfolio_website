// ============================================================================
// Portfolio Type Definitions
// All TypeScript interfaces for the portfolio data structures
// ============================================================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  domain: string;
  socials: SocialLink[];
}

export interface HeroContent {
  headline: string;
  subheading: string;
  rotatingTexts: string[];
  ctas: {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    icon?: string;
    external?: boolean;
  }[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface TechCategory {
  category: string;
  icon: string;
  color: "indigo" | "emerald" | "violet" | "amber" | "rose" | "cyan" | "blue" | "zinc";
  skills: Skill[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  challenges: string[];
  lessons: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  metrics: ProjectMetric[];
  icon: string;
  url?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  highlights: string[];
}


export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
  category: "sports" | "content" | "adventure" | "academic" | "innovation";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  color: "indigo" | "emerald" | "violet" | "amber";
  url?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
