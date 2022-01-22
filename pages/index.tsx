/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "../components/layout/layout";
import { SocialIcons } from "../components/social-icons";
import { CarouselSection } from "../components/carousel-section";

import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import myPhoto from "../public/people/me.jpg";

const Index: NextPage = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
      <Testimonials />
    </Layout>
  );
};

const Intro: FunctionComponent = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-4 lg:grid-cols-12 gap-12 xl:gap-24 py-12 lg:py-24 container"
    >
      <div className="flex items-center justify-center col-span-4 p-10 lg:p-0 nm-flat-slate-800-lg rounded bg-pattern">
        <div className="h-72 w-72 p-5 rounded-full nm-inset-slate-800-lg overflow-hidden relative">
          <Image
            src={myPhoto}
            alt="Sangeet Profile Photo"
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center col-span-4 lg:col-span-8 nm-flat-slate-800-lg p-10 md:px-16 md:py-12 rounded bg-pattern">
        <div className="flex flex-col">
          <span className="text-5xl font-medium text-orange-400 mb-5">Hi,</span>
          <span className="font-medium text-slate-300 text-xl">
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
          <div className="flex flex-wrap items-center">
            <div className="flex items-center mt-8">{<SocialIcons />}</div>
            <Link href="/profile">
              <a className="mt-8 px-7 py-5 nm-flat-slate-800 font-bold">View Full Profile</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects: FunctionComponent = () => {
  const slides = projects.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-5 flex-shrink-0 px-3 snap-start"
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
  ));
  return <CarouselSection title="Projects" slides={slides} />;
};

const Testimonials: FunctionComponent = () => {
  const slides = testimonials.map((testimonial, index) => (
    <div key={index} className="w-full my-5 flex-shrink-0 px-3 snap-start">
      <div className="max-w-5xl mx-auto px-8 md:px-12 py-5 lg:py-12 flex flex-col items-center justify-center h-full nm-flat-slate-800-lg bg-pattern rounded-xl testimonial-card">
        <p className="text-center md:text-lg">{testimonial.text}</p>
        <div className="flex items-center mt-10 px-6 py-4 nm-inset-slate-800 rounded-full">
          <div className="rounded-full shadow overflow-hidden h-24 w-24 flex-shrink-0">
            <Image
              src={testimonial.profile.image}
              alt={testimonial.profile.name}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col ml-5" style={{ maxWidth: "250px" }}>
            <span className="text-sm sm:text-base font-bold">
              {testimonial.profile.name}
            </span>
            <span className="text-xs sm:text-sm my-1">
              {testimonial.profile.title}
            </span>
            <span className="text-xs">{testimonial.profile.location}</span>
          </div>
        </div>
      </div>
    </div>
  ));
  return <CarouselSection title="Testimonials" slides={slides} />;
};

export default Index;
