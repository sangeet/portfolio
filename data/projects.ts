import nomadSoulmates from "../public/projects/nomad-soulmates.png";
import jollyFutures from "../public/projects/jolly-futures.png";
import jollyClassroom from "../public/projects/jolly-classroom.png";
import mercuryAi from "../public/projects/mercury-ai.png";
import datasisar from "../public/projects/datasisar.png";
import classementPOC from "../public/projects/classementpoc.png";
import gigarBox from "../public/projects/gigarbox.png";
import stateOfMatter from "../public/projects/state-of-matter.png";
import metAvtar from "../public/projects/metavtar.png";
import growcraft from "../public/projects/growcraft.png";
import { StaticImageData } from "next/image";

type ProjectItemType = {
  title: string;
  slug: string;
  type: string;
  description?: string;
  link: string;
  image: StaticImageData;
  tags?: string[];
  github?: string;
};

const tools: ProjectItemType[] = [
  {
    title: "Music Tools",
    slug: "music-tools",
    type: "Hobby Project",
    description:
      "A website for custom mini tools for aiding my Piano learning journey.",
    link: "https://www.musictools.dev/tools/progressions",
    github: "https://github.com/sangeet/musictools",
    image: require("../public/tools/music-tools.jpeg"),
    tags: ["Next.js", "Supabase", "Gemini AI Model"],
  }
]

const projects: ProjectItemType[] = [
  {
    title: "Jolly Futures",
    slug: "jolly-futures",
    type: "Brand Website",
    description:
      "Jolly Futures provides children in the world’s most challenging contexts with \
      the opportunity to learn to read and write with Jolly Phonics.",
    link: "https://jollyfutures.org",
    image: jollyFutures,
    tags: ["Gatsby", "Airtable", "TailwindCSS"],
  },
  {
    title: "Mercury.ai",
    slug: "mercury-ai",
    type: "Brand Website",
    description: "AI-chatbots and live-messaging for eCommerce and Service.",
    link: "https://www.mercury.ai/",
    image: mercuryAi,
    tags: ["Gatsby", "Contentful", "TailwindCSS"],
  },
  {
    title: "Jolly Classroom",
    slug: "jolly-classroom",
    type: "Brand Website",
    description: "Bringing Jolly Phonics to an online classroom.",
    link: "https://jollyclassroom.com",
    image: jollyClassroom,
    tags: ["Next.js", "TailwindCSS"],
  },
  {
    title: "Nomad Soulmates",
    slug: "nomad-soulmates",
    type: "Web Application",
    description:
      "A dating website for Digital Nomads and people intersted in dating while working remotely across the world.",
    link: "https://nomadsoulmates.com/",
    image: nomadSoulmates,
    tags: ["Vue", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Classement POC",
    slug: "classement-poc",
    type: "Hockey Website",
    description:
      "Classement POC is a site dedicated to the evaluation and ranking of Quebec's minor league hockey teams.",
    link: "https://www.classementpoc.com/",
    image: classementPOC,
    tags: ["Vue", "TailwindCSS"],
  },
  {
    title: "Datasisar",
    slug: "datasisar",
    type: "Brand Website",
    description:
      "Datasisar is an IT Services co providing outsourced IT consulting services.",
    link: "https://www.datasisar.com/",
    image: datasisar,
    tags: ["Gatsby", "Contentful", "TailwindCSS"],
  },
  {
    title: "GigarBox",
    slug: "gigarbox",
    type: "Brand Website",
    description:
      "Decentralized, Immutable, Cryptographically-Secured File Storage and Management System",
    link: "https://gigarbox.com/",
    image: gigarBox,
    tags: ["Gatsby", "TailwindCSS"],
  },
  {
    title: "State Of Matter",
    slug: "state-of-matter",
    type: "Magazine",
    description:
      "An e-Magazine with the idea to uplift and promote, primarily, the wide diversity of Indian and South-East Asian voices.",
    link: "https://www.stateofmatter.in/",
    image: stateOfMatter,
    tags: ["Gatsby", "Sanity CMS", "TailwindCSS"],
  },
  {
    title: "MetAvtar",
    slug: "metavtar",
    type: "Brand Website",
    description:
      "MetAvatar is an educational and fun NFT Collection that brings gamified learning to kids across the world.",
    link: "https://metavatar.digital/",
    image: metAvtar,
    tags: ["Gatsby", "TailwindCSS"],
  },
  {
    title: "Growcraft",
    slug: "growcraft",
    type: "Brand Website",
    description:
      "The Grow Craft is a soilless agriculture company that grows healthy, pesticide-free produce hydroponically and also teaches you how to do it yourself!",
    link: "https://www.thegrowcraft.com/",
    image: growcraft,
    tags: ["Gatsby", "TailwindCSS"],
  },
];

export { projects, tools };
export type { ProjectItemType };
