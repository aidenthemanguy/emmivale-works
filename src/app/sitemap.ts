import type { MetadataRoute } from "next";

const baseUrl = "https://emmivaleworks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl },
    { url: `${baseUrl}/work` },
    { url: `${baseUrl}/work/velora-auto-detail` },
    { url: `${baseUrl}/work/velora-manager` },
    { url: `${baseUrl}/start-a-project` },
  ];
}
