/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Layout } from "../components/layout/layout";

const ColorPage = () => {
  const [isActive, setActive] = useState(false);
  const color = isActive ? "red" : "yellow";
  return (
    <Layout>
      <Icon color="#DDD"/>
    </Layout>
  );
};

const Icon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 20 20"
      fill="none"
      style={{ color: color }}
      className="transition-all duration-200 ease-linear"
    >
      <path
        d="M10.0001 1L19.0003 5.00007L10.0001 9.00013L1 5.00007L10.0001 1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0003 10.0007L10.0002 14.0008L1 10.0007"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0003 15L10.0002 19.0001L1 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ColorPage;
