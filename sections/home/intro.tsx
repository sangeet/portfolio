import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "../../components/social-icons";
import { IntroText } from "../../sections/profile/intro-text";
import myPhoto from "../../public/people/sangeet.jpeg";

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
        <IntroTextSection />
      </div>
    </section>
  );
};

const IntroTextSection = () => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-5xl font-medium text-orange-400 mb-5">Hi,</span>
        <div className="font-medium text-slate-300 text-xl">
          My name is <h1 className="inline">Sangeet Khatri</h1>.
        </div>
      </div>
      <div className="my-5">


        <div className="white-strong">
          <IntroText/>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center mt-8 gap-3">{<SocialIcons />}</div>
          <Link href="/profile">
            <a className="mt-8 px-7 py-5 nm-flat-slate-800 font-bold">
              View Full Profile
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export { IntroSection };
