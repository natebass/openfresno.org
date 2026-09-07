import SingleProject from "./single-project.jsx";
import { githubOwner } from "@/utility/constants/appData.js";
import { SectionType } from "@/utility/constants/theme.js";

// See https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const response = await fetch(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=21&sort=updated&direction=desc`,
  );
  const ghResponses = await response.json();

  if (!Array.isArray(ghResponses)) {
    console.error("GitHub API error:", ghResponses);
    return [];
  }

  return ghResponses.map((ghResponse) => ({
    project: ghResponse.name,
  }));
  /*
  return [
    { project: "project1" },
    { project: "project2" },
    { project: "project3" },
  ];
   */
}

export default async function Page({ params }) {
  return (
    <>
      <SingleProject
        githubFullName={`${githubOwner}/${(await params).project}`}
        sectionType={SectionType.light}
      ></SingleProject>
    </>
  );
}
