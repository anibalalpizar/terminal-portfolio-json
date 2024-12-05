import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terminal Portfolio",
    short_name: "Terminal",
    description:
      "An interactive terminal-style portfolio showcasing developer projects and skills",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1e1e",
    theme_color: "#63b7bb",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
