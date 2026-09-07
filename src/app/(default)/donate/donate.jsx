"use client";
import DonateSectionLanding from "./donate-section-landing.jsx";
import { SectionType } from "@/utility/constants/theme.js";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function Donate() {
  return (
    <div className="">
      <DonateSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
