import "./global.css";
import withBasePath from "@/integrations/gh-pages/withBasePath.mjs";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Open Fresno",
  description: "Open Fresno civic technology.",
  icons: {
    icon: [
      { url: withBasePath("/assets/logo/favicon.ico"), sizes: "any" }, // classic favicon
      { url: withBasePath("/assets/logo/logo192.png"), type: "image/png", sizes: "192x192" },
      { url: withBasePath("/assets/logo/logo512.png"), type: "image/png", sizes: "512x512" },
      {
        url: withBasePath("/assets/logo/logo-blue.svg"),
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: [{ url: withBasePath("/assets/logo/logo192.png"), sizes: "192x192", type: "image/png" }],
    shortcut: [withBasePath("/assets/logo/favicon.ico")],
  },
};

/**
 * Root layout for the application.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
