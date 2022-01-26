/* eslint-disable @next/next/no-img-element */

import React from "react";
import { SocialIcons } from "../social-icons";
import { location, email, phone } from "../../data/profile";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container flex flex-col sm:flex-row items-center text-center sm:text-left justify-between">
        <div className="flex flex-col">
          <h4 className="font-medium text-lg">Sangeet Khatri</h4>
          <address className="text-sm flex flex-col mt-5 not-italic">
            <span>{location}</span>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone}`}>{phone}</a>
          </address>
        </div>
        <div className="flex items-center mt-10 sm:mt-0">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
