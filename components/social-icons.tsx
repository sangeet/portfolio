import React from "react";
import Link from "next/link";
import { LinkedinIcon } from "./icons/linkedin";
import { UpworkIcon } from "./icons/upwork";
import { GithubIcon } from "./icons/github";

const SocialIcons = () => {
  const socialLinks = [
    {
      title: "Github",
      icon: GithubIcon,
      href: "https://www.github.com/sangeet",
    },
    {
      title: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/sangeet-khatri-16283027/",
    },
    {
      title: "Upwork",
      icon: UpworkIcon,
      href: "https://www.upwork.com/freelancers/~015f4ecffa7bc1b54",
    },
  ];
  return (
    <>
      {socialLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="mr-3 nm-flat-slate-800 p-3">
            {React.createElement(link.icon, { className: "h-10 w-10" })}
          </a>
        </Link>
      ))}
    </>
  );
};

export { SocialIcons };
