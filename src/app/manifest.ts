import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parth Borkute — AI Engineer Portfolio",
    short_name: "Parth Borkute",
    description:
      "AI Engineer specializing in Machine Learning, Generative AI, Computer Vision, and production-ready AI systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
