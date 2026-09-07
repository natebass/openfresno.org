import withBasePath from "@/integrations/gh-pages/withBasePath.mjs";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Open Fresno",
    short_name: "Open Fresno",
    description: "Open Fresno civic technology.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#196aed",
    icons: [
      {
        src: withBasePath("/assets/logo/logo192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: withBasePath("/assets/logo/logo512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
