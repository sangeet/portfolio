import { GithubIcon } from "../components/icons/github";
import { LinkedinIcon } from "../components/icons/linkedin";
import { RedditIcon } from "../components/icons/reddit";
import { UpworkIcon } from "../components/icons/upwork";

const skillset = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Vue",
  "Gatsby",
  "TailwindCSS",
  "Next.js",
  "Node.js",
  "Express",
];

const experiences = [
  {
    title: "Frontend Engineer",
    employer: "Freelance, Self Employed",
    startDate: "May 2019",
    endDate: "Present",
    description:
      "Remote work with front-end web technologies on hourly and per project basis. Includes projects of all levels of pre-dominantly JAMStack sites as well as front end development with Javascript and related frameworks, CI/CD setups, hosting, etc.",
  },
  {
    title: "Technology Associate - Sysadmin",
    employer: "D. E. SHAW INDIA PRIVATE LIMITED",
    startDate: "May 2017",
    endDate: "October 2018",
    location: "Hyderabad Area, India",
    description:
      "Systems Technical Support Administrator - First line of support and systems administration tasks involving Linux/Windows/Storage/UC in a firm of around 2000 employees worldwide in HYD, NYC, HK, LON. Administering user sided infrastructure by co-coordinating with senior engineering teams.",
  },
];

const education = {
  school: "Christ University Bangalore",
  duration: "2014 – 2017",
  course:
    "Bachelor of Science - B.Sc Computer Science, Mathematics and Electronics",
  gpa: "3.2 GPA / 4.0",
};

const location = "Bangalore, India";
const email = "sangeet.khatri@outlook.com";
const phone = "+91 8553221820";

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
    href: "https://www.upwork.com/freelancers/~015f4ecffa7bc1b547",
  },
  {
    title: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/user/SangeetDev",
  },
];

export {
  education,
  email,
  experiences,
  location,
  phone,
  skillset,
  socialLinks,
};
