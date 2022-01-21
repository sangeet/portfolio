/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "../components/layout/layout";
import { SocialIcons } from "../components/social-icons";
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
      <div className="flex items-center justify-center col-span-4 p-10 lg:p-0">
        <img
          src="https://via.placeholder.com/500/334155"
          alt=""
          className="rounded-full shadow-lg border-4 border-slate-400"
        />
      </div>
      <div className="flex flex-col justify-center col-span-4 lg:col-span-8">
        <div className="flex flex-col">
          <span className="text-5xl font-medium text-orange-400 mb-5">Hi,</span>
          <span className="font-medium text-slate-100 text-xl">
            My name is Sangeet Khatri.
          </span>
        </div>
        <div className="my-5">
          <p className="white-strong">
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
          <div className="flex items-center mt-8">{<SocialIcons />}</div>
        </div>
      </div>
    </section>
  );
};

const Projects: FunctionComponent = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(100);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    //@ts-ignore
    resizeObserver.observe(document.getElementById("project-carousel"));
  });

  const handleLeftClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft - width,
    });
  };
  const handleRightClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft + width,
    });
  };
  return (
    <section className="flex flex-col container py-12 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex items-stretch">
          <h2 className="section-heading">Projects</h2>
          <div className="flex ml-5">
            <button
              className="bg-slate-700 px-2 mr-2"
              onClick={() => handleLeftClick()}
            >
              <ChevronRight className="h-6 w-6 transform rotate-180" />
            </button>
            <button
              className="bg-slate-700 px-2"
              onClick={() => handleRightClick()}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Link href="/projects">
          <a className="text-lg border-b-2">View all</a>
        </Link>
      </div>
      <div
        className="flex w-full overflow-scroll scroll-smooth my-5 -mx-3 snap-x"
        id="project-carousel"
        ref={carouselRef}
      >
        {projects.map((item, index) => (
          <div
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-5 flex-shrink-0 px-3 snap-start"
            key={index}
          >
            <Link href={`/project/${item.slug}`}>
              <a className="card h-full">
                <div className="block w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    placeholder="blur"
                    layout="responsive"
                  />
                </div>

                <div className="flex flex-col p-5 flex-grow">
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <p className="my-5">{item.description}</p>
                  {item.tags && (
                    <div className="flex mr-2 mt-auto flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="tag mr-3">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
