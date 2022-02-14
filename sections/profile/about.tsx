import { BlockLayout } from "./block-layout";

const AboutBlock = () => {
  return (
    <BlockLayout title="About">
      <div>
        <p>
          I am a <strong>Frontend Engineer</strong> based in{" "}
          <strong>India</strong>. National and International customers have
          relied on me for remote frontend web services including{" "}
          <strong>
            HTML, CSS, JS, Typescript, React, Vue, Jamstack, TailwindCSS, CMS,
            CI/CD setups and other related technologies
          </strong>
          .
        </p>
        <p className="my-5">
          I have worked with web agencies, companies, startups and individuals
          to meet their development needs for their digital businesses.
        </p>
        <p>
          I&apos;m interested in learning things related to technology and
          expand my skills to contribute higher quality code which helps solve
          new problems.
        </p>
      </div>
    </BlockLayout>
  );
};

export { AboutBlock };
