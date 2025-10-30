import Link from "next/link";
import { SectionType } from "@/utility/constants/theme";
import CenteredInImage from "@/components/ui/CenteredInImage";
import AboutSectionPositionList from "@/app/about/components/aboutSectionPositionList";
import HeadingPair from "@/components/ui/HeadingPair";

/**
 * About opportunities section.
 * @returns {JSX.Element}
 */
export default function AboutSectionOpportunities({ sectionType }) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className={`w-full page-container overflow-hidden`}>
        <div className="w-full overflow-hidden">
          <div
            className={`lg:w-[55%] px-4 sm:px-8 md:px-12 lg:px-0 float-left about-${sectionType}-heading-container about-heading-underline about-underline-alt`}
          >
            <HeadingPair
              heading="Opportunities"
              subHeading="Join Our Team"
              sectionType={sectionType}
            />
            <p className={`my-12`}>
              <span className={`paragraph-bold`}>
                Are you passionate about civic tech leadership?
              </span>{" "}
              Open Fresno invites you to join our Core Team, organizing events,
              fostering partnerships, and driving community impact. Shape
              Fresno&apos;s civic innovation future – connect with us and
              explore joining our dedicated team.
            </p>
          </div>
          <div
            className={`max-lg:hidden w-[45%] h-fit opportunities-get-started relative float-right`}
          >
            <CenteredInImage
              src="/img/about/rectangle-blue.png"
              alt="rectangle"
              float="right"
            >
              <div className="w-fit mx-auto font text-xl sm:text-3xl font-bold">
                <span
                  className={`app-text--${SectionType.invert(sectionType)}`}
                >
                  Not a volunteer yet?
                </span>
                <br />
                <Link href="/get-started" className="underline">
                  Get Started
                </Link>
              </div>
            </CenteredInImage>
          </div>
        </div>

        <h3 className={`hidden lg:block h3-bold app-text--primary mb-8`}>
          Open Positions within Our Team
        </h3>

        <div className={`w-full flex flex-row flex-wrap space-between`}>
          <AboutSectionPositionList
            header="Community"
            listText={[
              "Director of Fundraising",
              "Director of Community Engagement",
              "Director of Recruitment",
            ]}
          />
          <AboutSectionPositionList
            header="Communications"
            listText={[
              "Director of Product Management",
              "Director of Marketing & Engagement",
              "Director of Event Management",
            ]}
          />
        </div>

        <div className={`w-full flex flex-row flex-wrap space-between`}>
          <AboutSectionPositionList
            header="Product"
            listText={[
              <s>Director of Frontend Engineering</s>,
              "Director of Design & Usability",
            ]}
          />
          <AboutSectionPositionList
            header="Platform"
            listText={[
              "Director of Backend Engineering",
              "Director of Data Science",
            ]}
          />
        </div>
        <div className={`lg:hidden w-full h-fit relative`}>
          <CenteredInImage
            src="/img/about/rectangle-blue.png"
            alt="rectangle"
            float="center"
          >
            <div className="w-fit mx-auto font text-xl sm:text-3xl font-bold">
              <span className={`app-text--${SectionType.invert(sectionType)}`}>
                Not a volunteer yet?
              </span>
              <br />
              <Link href="/get-started" className="underline">
                Get Started
              </Link>
            </div>
          </CenteredInImage>
        </div>
      </div>
    </section>
  );
}
