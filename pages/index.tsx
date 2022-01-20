/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import type { NextPage } from "next";
import { Layout } from "../components/layout/layout";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
};

const Intro = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-24 py-24 container"
    >
      <div className="flex items-center justify-center col-span-4">
        <img
          src="https://via.placeholder.com/500"
          alt=""
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center col-span-4 lg:col-span-8">
        <h2 className="section-heading">About</h2>
        <div className="my-5">
          <p>
            Hi, My name is Sangeet Khatri. I am a Frontend Engineer based in
            India. National and International customers have relied on me for
            remote frontend web services including HTML, CSS, JS, Typescript,
            React, Vue, Jamstack, TailwindCSS, CMS, CI/CD setups and other
            related technologies.
          </p>
          <p className="my-5">
            As a freelancer, I also work with web agencies, companies, startups
            and individuals to meet their development needs for their digital
            businesses.
          </p>
          <p>
            I&apos;m interested in learning things related to technology and expand
            my skills to contribute higher quality code which helps solve new
            problems.
          </p>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const sampleItem = {
    title: "Website Name",
    image: "https://via.placeholder.com/1920x1080",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sint.",
  };
  const projectItems = [
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
    sampleItem,
  ];
  return (
    <section className="flex flex-col container py-24">
      <div className="flex items-end justify-between">
        <h2 className="section-heading">Projects</h2>
        <Link href="/projects">
          <a className="text-gray-400 text-lg border-b-2 border-gray-400">
            View all
          </a>
        </Link>
      </div>
      <div className="flex w-full overflow-scroll my-5">
        {projectItems.map((item, index) => (
          <div
            className={`flex flex-col w-96 flex-shrink-0 my-5 bg-white rounded shadow ${
              index > 0 && "ml-6"
            }`}
            key={index}
          >
            <img src={item.image} alt={item.title} />
            <div className="flex flex-col p-5">
              <h3 className="text-2xl font-medium mb-5">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
