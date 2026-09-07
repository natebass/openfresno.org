"use client";
import NameChangeSectionLanding from "./name-change-landing.jsx";
import { SectionType } from "@/utility/constants/theme.js";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function NameChange() {
  return (
    <div className="">
      <NameChangeSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
