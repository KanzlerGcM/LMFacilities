import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LM Facilities – Terceirização de Serviços",
    short_name: "LM Facilities",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f1f3",
    theme_color: "#0b1f40",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
