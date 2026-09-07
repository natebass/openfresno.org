import ProjectInformationSection from "@/app/(default)/projects/project-information-section.jsx";

export default function SingleProjectsContributor({ data, role, sectionType }) {
  return <ProjectInformationSection sectionType={sectionType} obj={data.meta.contributing[role]} />;
}
