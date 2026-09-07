"use client";
import { fetchGithubSingleProject } from "../github.js";
import SingleProjectsBrief from "./single-projects-brief.jsx";
import SingleProjectsContribute from "./single-projects-contribute.jsx";
import SingleProjectsLinks from "./single-projects-links.jsx";
import SingleProjectsResources from "./single-projects-resources.jsx";
import SingleProjectsRoadmap from "./single-projects-roadmap.jsx";
import SingleProjectsScreenshots from "./single-projects-screenshots.jsx";
import SingleProjectsSectionStart from "./single-projects-section-start.jsx";
import SingleProjectsVolunteer from "./single-projects-volunteer.jsx";
import SingleProjectsContributor from "@/app/(default)/projects/[project]/single-projects-contributor.jsx";
import PageContainer from "@/components/page-container.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { jsonResponse } from "@/utility/response.js";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (...args) =>
  fetchGithubSingleProject(await jsonResponse(await fetch(...args)));

/**
 * Page for displaying a single project
 *
 * @returns {React.JSX.Element}
 */
export default function SingleProject({ githubFullName, sectionType = SectionType.light }) {
  const [contributeAs, setContributeAs] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${githubFullName}`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (data && !contributeAs && data.meta.contributing) {
    const [firstRole] = Object.keys(data.meta.contributing);
    if (firstRole) setContributeAs(firstRole);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <SingleProjectsSectionStart sectionType={sectionType} data={data} />
      <SingleProjectsLinks sectionType={sectionType} />
      <SingleProjectsBrief sectionType={sectionType} data={data} />
      <PageContainer noFlex noPadding sectionType={sectionType}>
        <hr className="single-project-divider" />
      </PageContainer>
      {data.meta.screenshots ? (
        <SingleProjectsScreenshots sectionType={sectionType} data={data} />
      ) : null}
      {data.meta.roadmap ? (
        <SingleProjectsRoadmap sectionType={SectionType.invert(sectionType)} data={data} />
      ) : null}
      {contributeAs !== "" ? (
        <>
          <SingleProjectsContribute
            data={data}
            sectionType={sectionType}
            contributeAs={contributeAs}
            setContributeAs={setContributeAs}
          />
          <SingleProjectsContributor data={data} role={contributeAs} sectionType={sectionType} />
        </>
      ) : null}
      {data.meta.resources ? (
        <SingleProjectsResources sectionType={sectionType} data={data} />
      ) : null}
      <SingleProjectsVolunteer sectionType={SectionType.invert(sectionType)} data={data} />
    </>
  );
}
