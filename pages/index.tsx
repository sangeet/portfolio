/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "../components/layout/layout";
import { ChevronRight } from "../components/icons/chevron-right";
import { projects } from "../data/projects";

const Index: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
};

const Intro: FunctionComponent = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-24 py-12 lg:py-24 container"
    >
      <div className="flex items-center justify-center col-span-4">
        <img
          src="https://via.placeholder.com/500/334155"
          alt=""
          className="rounded-full shadow-lg border-4 border-slate-400"
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
            I&apos;m interested in learning things related to technology and
            expand my skills to contribute higher quality code which helps solve
            new problems.
          </p>
        </div>
      </div>
    </section>
  );
};

const Projects: FunctionComponent = () => {
  return (
    <section className="flex flex-col container py-12 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex items-stretch">
          <h2 className="section-heading">Projects</h2>
          <div className="flex ml-5">
            <button className="bg-slate-700 px-2 mr-2">
              <ChevronRight className="h-6 w-6 transform rotate-180" />
            </button>
            <button className="bg-slate-700 px-2">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Link href="/projects">
          <a className="text-lg border-b-2">View all</a>
        </Link>
      </div>
      <div className="flex w-full overflow-scroll my-5">
        {projects.map((item, index) => (
          <Link href="/" key={index}>
            <a className={`card w-96 my-5 ${index > 0 && "ml-6"}`}>
              <Image src={item.image} alt={item.title} />
              <div className="flex flex-col p-5 flex-grow">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="my-5">{item.description}</p>
                {item.tags && (
                  <div className="flex mr-2 mt-auto">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="mr-3 bg-slate-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Index;
