import MDXComponents from "./MDXComponents.js";
import GeneralSection from "@/components/general-section.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

function extractToc(content) {
  return Array.from(content.matchAll(/^###\s+(.+)$/gm), ([, text]) => ({
    text,
    slug: text.toLowerCase().replaceAll(/\s/g, "_"),
  }));
}

const rootDir = path.join(process.cwd(), "src", "app", "(default)", "faq");

function fetchMdx() {
  const filePath = path.join(rootDir, "faqMDXTexts.mdx");
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const tableOfContents = extractToc(fileContent);
  return { fileContent, tableOfContents };
}

/**
 * Frequently-asked questions page.
 */
export default function FaqPage() {
  const { fileContent, tableOfContents } = fetchMdx();
  return (
    <>
      <div className="faq-main">
        <GeneralSection
          heading="FAQ"
          subHeading="Frequently Asked Questions"
          sectionType={SectionType.light}
        >
          Welcome to our FAQ page, designed to provide you with quick and informative answers to
          commonly asked questions about Open Fresno. Whether you&apos;re curious about
          volunteering, projects, collaborations, or more, we&apos;ve compiled a list of queries to
          guide you through our mission, initiatives, and how you can get involved. Browse through
          the questions to find the information you need and embark on a journey of civic
          engagement, innovation, and community empowerment.
        </GeneralSection>
        <section className="faq-nav app-color--primary py-6">
          <nav className="page-container flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between">
            {tableOfContents.map((item) => (
              <Link key={item.slug} className="nav-link underline" href={`#${item.slug}`}>
                {item.text}
              </Link>
            ))}
          </nav>
        </section>
        <section className="mx-auto max-w-[calc(var(--screen-xxl)+80px)] px-6 pt-12 pb-16 lg:px-10">
          <MDXRemote source={fileContent} components={MDXComponents} />
        </section>
        <hr className="mx-auto h-px max-w-(--screen-xxl) border-0 bg-(--neutral-400)" />
      </div>
    </>
  );
}
