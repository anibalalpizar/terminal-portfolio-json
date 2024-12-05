import { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://terminal-portfolio-json.vercel.app";

  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const projectRoutes = portfolioData.projects.map((project) => ({
    url: project.link,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
