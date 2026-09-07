export const dynamic = "force-static";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/code-of-conduct", priority: 0.5, changeFrequency: "yearly" },
  {
    path: "/community-support-statement-2025",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/donate", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/get-started", priority: 0.7, changeFrequency: "monthly" },
  { path: "/name-change", priority: 0.5, changeFrequency: "yearly" },
  { path: "/pitch", priority: 0.6, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.6, changeFrequency: "monthly" },
];

export default async function sitemap() {
  return STATIC_ROUTES.map((route) => ({
    url: `https://openfresno.org${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
