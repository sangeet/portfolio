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
      <div className="flex items-center justify-center col-span-4 p-10 lg:p-0 bg-gray-800 border border-gray-700 rounded">
        <div className="w-64 h-64 sm:h-72 sm:w-72 p-5 rounded-full border border-gray-700 overflow-hidden relative">
          <Image
            src={myPhoto}
            alt="Sangeet Profile Photo"
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center col-span-4 lg:col-span-8 bg-gray-800 border border-gray-700 p-10 md:px-16 md:py-12 rounded">
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
          <IntroText />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center mt-8 gap-3">{<SocialIcons />}</div>
          <Link href="/profile">
            <a className="mt-8 px-7 py-5 bg-gray-800 border border-gray-700 font-bold rounded">
              View Full Profile
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/resume_sangeet_khatri.pdf"
            className="mt-8 px-7 py-5 bg-gray-800 border border-gray-700 font-bold flex items-center gap-2 rounded"
          >
            <DownloadIcon className="inline w-6 h-6 ml-2 text-orange-500" />
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-3 w-3 opacity-75"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
};

export { IntroSection };
