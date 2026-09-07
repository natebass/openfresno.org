"use client";
import { fetchGithubProjectData } from "./github.js";
import ProjectSearch from "@/app/(default)/projects/project-search.jsx";
import ProjectsCardsContainer from "@/app/(default)/projects/projects-cards-container.jsx";
import ProjectsSectionStart from "@/app/(default)/projects/projects-section-start.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { jsonResponse } from "@/utility/response.js";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (...args) => fetchGithubProjectData(await jsonResponse(await fetch(...args)));

/**
 * Page for information about how to pitch a project.
 * @returns {React.JSX.Element}
 */
export default function Projects({ githubOwner }) {
  const [projectsData, setProjectsData] = useState([]);
  const [prevData, setPrevData] = useState(null);

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (data && data !== prevData) {
    setPrevData(data);
    setProjectsData(data.toSorted((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
  }

  return (
    <div className="projects-main">
      <ProjectsSectionStart sectionType={SectionType.light} />
      <ProjectSearch data={data} setProjectsData={setProjectsData} />
      <ProjectsCardsContainer
        error={error}
        isLoading={isLoading}
        projectsData={projectsData}
        sectionType={SectionType.light}
      />
    </div>
  );
}
