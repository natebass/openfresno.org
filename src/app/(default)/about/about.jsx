import AboutSectionCollage from "./about-section-collage.jsx";
import AboutSectionLanding from "./about-section-landing.jsx";
import AboutSectionMission from "./about-section-mission.jsx";
import AboutSectionOpportunities from "./about-section-opportunities.jsx";
import AboutSectionTeam from "./about-section-team.jsx";
import { SectionType } from "@/utility/constants/theme.js";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function About() {
  return (
    <div className="">
      <AboutSectionLanding sectionType={SectionType.light} />
      <AboutSectionCollage sectionType={SectionType.light} />
      <AboutSectionMission sectionType={SectionType.dark} />
      <AboutSectionTeam sectionType={SectionType.light} />
      <AboutSectionOpportunities sectionType={SectionType.dark} />
    </div>
  );
}
