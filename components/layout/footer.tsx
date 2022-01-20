/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { LinkedinIcon } from "../icons/linkedin";
import { UpworkIcon } from "../icons/upwork";

const Footer = () => {
  const socialLinks = [
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
    <footer className="py-5">
      <div className="container flex justify-between">
        <div className="flex flex-col">
          <h4 className="font-medium text-lg">Sangeet Khatri</h4>
          <address className="text-sm flex flex-col mt-5 not-italic">
            <span>Bangalore, India</span>
            <a href="mailto:sangeet.khatri@outlook.com">
              sangeet.khatri@outlook.com
            </a>
            <a href="tel:+918553221820">+91 8553221820</a>
          </address>
        </div>
        <div className="flex items-center">
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <a className="h-10 w-10 ml-2">{React.createElement(link.icon)}</a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
