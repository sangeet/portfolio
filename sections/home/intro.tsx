import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "../../components/social-icons";
import myPhoto from "../../public/people/me.jpg";

const IntroSection: FunctionComponent = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-4 lg:grid-cols-12 gap-12 xl:gap-24 py-12 lg:py-24 container"
    >
      <div className="flex items-center justify-center col-span-4 p-10 lg:p-0 nm-flat-slate-800-lg rounded bg-pattern">
        <div className="w-64 h-64 sm:h-72 sm:w-72 p-5 rounded-full nm-inset-slate-800-lg overflow-hidden relative">
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
              <a className="mt-8 px-7 py-5 nm-flat-slate-800 font-bold">
                View Full Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntroSection };
