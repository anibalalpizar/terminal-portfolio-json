import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terminal-portfolio-json.vercel.app/"),
  title: {
    default: "Terminal Portfolio | Interactive Developer Portfolio",
    template: "%s | Terminal Portfolio",
  },
  description:
    "An interactive terminal-style portfolio showcasing my projects, skills, and experience as a developer. Built with Next.js and TypeScript.",
  keywords: [
    "portfolio",
    "developer",
    "terminal",
    "interactive",
    "web developer",
    "software engineer",
    "projects",
  ],
  authors: [{ name: "Aníbal Alpízar" }],
  creator: "Aníbal Alpízar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terminal-portfolio-json.vercel.app/",
    title: "Terminal Portfolio | Interactive Developer Portfolio",
    description:
      "An interactive terminal-style portfolio showcasing my projects, skills, and experience as a developer.",
    siteName: "Terminal Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Your Company",
              },
              description:
                "A passionate web developer specializing in frontend development.",
              knowsAbout: [
                "JavaScript",
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "TailwindCSS",
              ],
            }),
          }}
        />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
