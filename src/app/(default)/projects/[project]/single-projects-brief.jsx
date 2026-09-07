import ProjectInformationSection from "@/app/(default)/projects/project-information-section.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { titleCase } from "@/utility/string.js";

export default function SingleProjectsBrief({ data, sectionType = SectionType.light }) {
  const trimList = [
    "project_status",
    "resources",
    "roadmap",
    "screenshots",
    "tags",
    "contributing",
  ];
  const titleCaseList = ["project_type"];
  const concatLists = [["communications", "channels"]];
  const toConcatList = concatLists.flat();
  const meta = {};
  for (const [key, value] of Object.entries(data.meta)) {
    if (trimList.includes(key)) continue;

    if (!toConcatList.includes(key)) {
      meta[key] = titleCaseList.includes(key) ? titleCase(value) : value;
      continue;
    }

    const concatList = concatLists.find((list) => list.includes(key));
    const [a, b] = concatList;
    if (data.meta[a] && data.meta[b]) {
      meta[`${a}\\n${b}`] = (
        <>
          {data.meta[a]}
          <br />
          {data.meta[b]}
        </>
      );
    } else {
      meta[key] = value;
    }
  }
  return <ProjectInformationSection obj={meta} title={"Project Brief"} sectionType={sectionType} />;
}
