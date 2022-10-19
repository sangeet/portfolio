import React from "react";
import Link from "next/link";
import { socialLinks } from "../data/profile";

const SocialIcons = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="nm-flat-slate-800 p-3">
            {React.createElement(link.icon, { className: "h-10 w-10" })}
          </a>
        </Link>
      ))}
    </>
  );
};

export { SocialIcons };
