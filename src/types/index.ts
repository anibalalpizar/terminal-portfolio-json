export type Command =
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "help"
  | "clear"
  | "theme";

export interface Theme {
  name: string;
  background: string;
  foreground: string;
  accent: string;
  selection: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  bio: string;
  skills: string[];
  projects: Project[];
  socialLinks: {
    github: string;
    linkedin: string;
  };
}
