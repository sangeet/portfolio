/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { FunctionComponent } from "react";
import { Layout } from "../components/layout/layout";

const experiences = [
  {
    title: "Frontend Engineer",
    employer: "Freelance, Self Employed",
    startDate: "May 2019",
    endDate: "Present",
    description:
      "Remote work with front-end web technologies on hourly and per project basis. Includes projects of all levels of pre-dominantly JAMStack sites as well as front end development with Javascript and related frameworks, CI/CD setups, hosting, etc.",
  },
  {
    title: "Technology Associate - Sysadmin",
    employer: "D. E. SHAW INDIA PRIVATE LIMITED",
    startDate: "May 2017",
    endDate: "October 2018",
    location: "Hyderabad Area, India",
    description:
      "Systems Technical Support Administrator - First line of support and systems administration tasks involving Linux/Windows/Storage/UC in a firm of around 2000 employees worldwide in HYD, NYC, HK, LON. Administering user sided infrastructure by co-coordinating with senior engineering teams.",
  },
];

const skillset = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Vue",
  "Gatsby",
  "TailwindCSS",
  "Next.js",
  "Node.js",
  "Express",
];

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col bg-slate-800 rounded shadow-lg">
        <IntroBlock />
        <AboutBlock />
        <ExperienceBlock />
        <EducationBlock />
        <SkillsetBlock />
      </div>
    </Layout>
  );
};

type BlockLayoutPropsType = {
  title: string;
  hasMarginBottom?: boolean;
  children: React.ReactNode;
};
const BlockLayout: FunctionComponent<BlockLayoutPropsType> = ({
  title,
  hasMarginBottom = true,
  children,
}) => {
  const margin = hasMarginBottom ? "mb-10" : "mb-0";
  return (
    <div className={margin}>
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <div className="flex flex-col mb-10">{children}</div>
    </div>
  );
};

const SkillsetBlock = () => {
  return (
    <BlockLayout title="Skillset" hasMarginBottom={false}>
      <div className="flex flex-wrap">
        {skillset.map((skill, index) => (
          <span key={index} className="mr-3">
            {skill}
          </span>
        ))}
      </div>
    </BlockLayout>
  );
};

const EducationBlock = () => {
  return (
    <BlockLayout title="Education">
      <h3 className="text-xl font-bold">Christ University Bangalore</h3>
      <span className="text-sm">2014 – 2017</span>
      <div className="mt-3 flex flex-col">
        <p>
          Bachelor of Science - B.Sc Field Of Study Computer Science,
          Mathematics and Electronics
        </p>
        <span>3.2 GPA / 4.0</span>
      </div>
    </BlockLayout>
  );
};

const ExperienceBlock = () => {
  return (
    <BlockLayout title="Experience">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index === experiences.length - 1 ? "" : "mb-10"
          }`}
        >
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <span className="text-sm">{exp.employer}</span>
          <div className="text-sm">
            <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
          </div>
          <p className="mt-3">{exp.description}</p>
        </div>
      ))}
    </BlockLayout>
  );
};

const AboutBlock = () => {
  return (
    <BlockLayout title="About">
      <div className="mt-3">
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
          As a freelancer, I also work with web agencies, companies, startups
          and individuals to meet their development needs for their digital
          businesses.
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

const IntroBlock = () => {
  return (
    <div className="flex flex-col mb-16">
      <div className="flex flex-col">
        <h1 className="mt-5 mb-3 font-bold text-3xl">Sangeet Khatri</h1>
        <span className="text-2xl">
          Freelance Frontend Engineer | Ex - D. E. Shaw
        </span>
        <span className="text-sm">Bengaluru, Karnataka, India</span>
      </div>
      <div className="flex flex-col mt-5">
        <span>+91 8553221820</span>
        <span>sangeet.khatri@outlook.com</span>
      </div>
    </div>
  );
};

export default Profile;
