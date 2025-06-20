/**
 * contact landing section.
 * @returns {JSX.Element}
 */
export default function ContactSectionLanding({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-container heading-underline`}>
        <h1 className={`general-heading-section`}>Contact Us</h1>
        <h2 className={`contact-sub-heading`}>
          Contact<br></br> Open Fresno
        </h2>
      </div>

      <div className={`general-section-container`}>
        <p className={`section-paragraph`}>
          Get in touch with us through our contact page for questions, ideas, or
          just to say hello.{" "}
          <span className={`paragraph-bold`}>
            We welcome inquiries about volunteering, projects, collaborations,
            or anything related to our mission of using technology for positive
            change.
          </span>{" "}
          Your feedback and engagement are crucial to our progress. We&apos;re
          eager to hear from you and build a better future for our community!
        </p>
      </div>
    </section>
  );
}
