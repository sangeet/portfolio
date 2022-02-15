/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { Layout } from "../components/layout/layout";

import { IntroBlock } from "../sections/profile/intro";
import { AboutBlock } from "../sections/profile/about";
import { ExperienceBlock } from "../sections/profile/experience";
import { EducationBlock } from "../sections/profile/education";
import { SkillsetBlock } from "../sections/profile/skillset";

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 nm-flat-slate-800-lg rounded-lg shadow-lg bg-pattern">
        <IntroBlock />
        <AboutBlock />
        <ExperienceBlock />
        <EducationBlock />
        <SkillsetBlock />
      </div>
    </Layout>
  );
};
export default Profile;
