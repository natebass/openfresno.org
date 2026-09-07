/**
 * Get a relative base path for the website assets when deploying to a fork on GitHub Pages. This only affects forks. Even if it is not configured properly, images will still work correctly in development and production (empty string base path).
 *
 * This file must have a .mjs because it is used in next.config.mjs.
 *
 * ### **Important!** Set environment variables in the "Build with Next.js" step in GitHub Actions.
 *
 * - GITHUB_ACTIONS: Whether the app is running in a GitHub Actions environment.
 * - GITHUB_REPOSITORY: The repository name in the format "owner/repo".
 * - NEXT_PUBLIC_BASE_PATH: Optional manual override. Takes precedence over everything else. Use "/" or "" to force no base path.
 *
 * ### Example base paths.
 *
 * - **If it is a fork:** /fe-openfresno-doc.
 * - **If it is the main repository:** Empty string, because it is served from the custom domain https://openfresno.org.
 * - **Custom domain:** Empty string.
 * - **Local development:** Empty string.
 *
 * The main repository is served from a custom domain, so it must be built with an empty base path. GitHub Pages redirects the https://openfresno.github.io/openfresno.org URL to the custom domain, so the project page URL keeps working.
 *
 * @param {boolean} repositoryCustomDomain - Whether the main repository uses a custom domain. If true, the base path will be an empty string.
 * @param {string} repositoryName - The name of the main repository, in the format "owner/repo".
 * @returns {string} - The base path of the website URL. Either an empty string or a path starting with a slash and without a trailing slash.
 */
export default function getBasePath(
  repositoryCustomDomain = true,
  repositoryName = "openfresno/openfresno.org",
) {
  const override = process.env.NEXT_PUBLIC_BASE_PATH;
  if (typeof override === "string") {
    return normalize(override);
  }

  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  const repository = process.env.GITHUB_REPOSITORY;
  if (!isGitHubActions || !repository) {
    return "";
  }

  const isMainRepo = repository === repositoryName;
  if (isMainRepo && repositoryCustomDomain) {
    return "";
  }

  return normalize(repository.split("/")[1]);
}

/**
 * Normalize a base path so it is either an empty string or starts with a slash and has no trailing slash.
 *
 * @param {string} value - The raw base path.
 * @returns {string} - The normalized base path.
 */
function normalize(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed === "" ? "" : `/${trimmed}`;
}
