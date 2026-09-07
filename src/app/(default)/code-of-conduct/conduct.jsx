import ConductSectionBullets from "./conduct-section-bullets.jsx";
import ConductSectionEmail from "./conduct-section-email.jsx";
import ConductSectionLanding from "./conduct-section-landing.jsx";
import ConductSectionPolicies from "./conduct-section-policies.jsx";
import { SectionType } from "@/utility/constants/theme.js";

export default function Conduct() {
  return (
    <div className="">
      <ConductSectionLanding sectionType={SectionType.light} />
      <ConductSectionBullets sectionType={SectionType.light} />
      <ConductSectionPolicies sectionType={SectionType.dark} />
      <ConductSectionEmail sectionType={SectionType.gray} />
    </div>
  );
}
