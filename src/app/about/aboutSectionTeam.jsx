import { SectionType } from "@/utility/constants/theme";
import AboutSectionTeamMember from "@/app/about/components/aboutSectionTeamMember";

/**
 * About team section.
 * @returns {JSX.Element}
 */
export default function AboutSectionTeam({ sectionType = SectionType.light }) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className={`page-container`}>
        <div className={`team-paragraph-container md:w-[60%]`}>
          <div className="mb-6">
            <h1
              className={`heading-main app-color--${SectionType.invert(sectionType)}`}
            >
              OUR TEAM
            </h1>
            <h2 className="sub-heading-main">
              Meet the Heartbeat of Open Fresno
            </h2>
          </div>
          <p className={`mb-16 team-paragraph`}>
            Open Fresno is powered by a volunteer Core Team that orchestrates
            events, fosters strategic partnerships, and ensures seamless
            communication among cross-functional project teams. Our dedicated
            team members bring diverse skills and expertise to the table, all
            with a shared passion for civic tech and community empowerment.
          </p>
        </div>

        <div className={`team-members-container`}>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}
          >
            <AboutSectionTeamMember
              src={"/img/about/dan_fey.jpg"}
              name="Dan Fey"
              title="Executive Director, Open Fresno"
            />
            <AboutSectionTeamMember
              src={"/img/about/mary_fey_norris.jpg"}
              name="Mary Fey Norris"
              title="Executive Director, Open Fresno"
            />
            <AboutSectionTeamMember
              src="/img/about/walter_yu.png"
              name="Walter Yu"
              title="Senior Director, Platform"
            />
            <AboutSectionTeamMember
              src="/img/about/brianda_hernandez.png"
              name="Brianda Hernandez"
              title="Senior Director, Communications"
            />
            <AboutSectionTeamMember
              src="/img/about/nate_bass.jpg"
              name="Nate Bass"
              title="Senior Director, Product"
            />
            <AboutSectionTeamMember
              src="/img/about/alexandre_steinhauslin.jpg"
              name="Alexandre Steinhauslin"
              title="Director, Frontend Engineering"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
