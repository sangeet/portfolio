/* eslint-disable @next/next/no-img-element */

import React from "react";
import { SocialIcons } from "../social-icons";

const Footer = () => {
  return (
    <footer className="py-10">
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
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
