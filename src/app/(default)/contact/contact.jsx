"use client";
import ContactSectionLanding from "./contact-section-landing.jsx";
import ContactSectionMission from "./contact-section-mission.jsx";
import { SectionType } from "@/utility/constants/theme.js";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function Contact() {
  return (
    <div className="">
      <ContactSectionLanding sectionType={SectionType.light} />
      <ContactSectionMission sectionType={SectionType.dark} />
    </div>
  );
}
