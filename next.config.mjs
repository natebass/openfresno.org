import getBasePath from "./src/integrations/gh-pages/getBasePath.mjs";
import createMDX from "@next/mdx";

const basePath = getBasePath();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  reactCompiler: true,
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    appNewScrollHandler: true,
    inlineCss: true,
    turbopackRustReactCompiler: true,
    typedEnv: true,
    useOffline: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
