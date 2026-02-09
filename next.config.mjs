import getBasePath from "./src/integrations/gh-pages/getBasePath.mjs";
import createMDX from "@next/mdx";

const basePath = getBasePath(true);

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
};

const withMDX = createMDX();

export default withMDX(nextConfig);
