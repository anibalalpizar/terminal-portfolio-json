export const portfolioData = {
  name: "Aníbal Alpízar",
  bio: "A passionate web developer specializing in frontend development.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
  ],
  projects: [
    {
      name: "Json to Xml converter",
      description: "Convert JSON to XML easily with modern UI tools.",
      link: "https://github.com/anibalalpizar/json-to-xml-converter",
    },
    {
      name: "Costa Rica API",
      description: "API with information about Costa Rica.",
      link: "https://github.com/anibalalpizar/api-geo-cr",
    },
  ],
  socialLinks: {
    github: "https://github.com/anibalalpizar",
    linkedin: "https://linkedin.com/in/anibalalpizar",
  },
};

export type Command =
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "help"
  | "clear";

export const commands: Record<Command, string> = {
  about: "Display information about me",
  projects: "Show my projects",
  skills: "List my technical skills",
  contact: "Display contact information",
  help: "Show available commands",
  clear: "Clear the terminal",
};
