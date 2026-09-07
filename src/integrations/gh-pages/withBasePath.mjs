import getBasePath from "./getBasePath.mjs";

const basePath = getBasePath();

/**
 * Prefix a public folder URL with the GitHub Pages base path.
 *
 * Next.js applies `basePath` and `assetPrefix` to `<Link>` hrefs, imported assets, and framework chunks, but not to URLs inside the metadata or manifest exports. Those must be prefixed manually.
 *
 * @param {string} path - A root relative path to a file in the public folder, for example "/assets/logo/favicon.ico".
 * @returns {string} - The path prefixed with the base path.
 */
export default function withBasePath(path) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
