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
    title: "Frontend Developer",
    employer: "Jolly Technologies",
    startDate: "March 2022",
    endDate: "Present",
    location: "Valencia, Spain (Remote)",
    description: "https://jollytechnologies.co.uk",
  },
  {
    title: "Frontend Developer (Freelance)",
    employer: "Freelance, Self Employed",
    startDate: "May 2019",
    endDate: "January 2022",
    location: "Remote",
    description:
      "Freelance work with front-end web technologies on hourly and project basis. Specialized in JAMSTACK architecture along with Javascript, TailwindCSS, CI/CD setups, hosting and related development tasks. Contributed in 30+ projects in collaboration with over 15 clients/teams remotely across 10+ countries.",
  },
  {
    title: "Technology Associate - Sysadmin",
    employer: "D. E. SHAW INDIA PRIVATE LIMITED",
    startDate: "May 2017",
    endDate: "October 2018",
    location: "Hyderabad Area, India",
    description:
      "Helpdesk + Sysadmin roles - First line of support and systems administration tasks involving Linux/Windows/Storage/UC in one of the biggest hedge fund worldwide with employees in HYD, NYC, HK, LON. Administering user facing infrastructure by co-coordinating with senior engineering teams.",
  },
];

const education = [
  {
    school: "Christ University Bangalore",
    duration: "2014 – 2017",
    course:
      "Bachelor of Science - B.Sc Computer Science, Mathematics and Electronics",
    gpa: "3.2 GPA / 4.0",
  },
  {
    school: "Gyan Ganga International School, Jabalpur",
    duration: "2012 – 2014",
    course: "High School: Physics, Chemistry, Mathematics",
    // gpa: "3.2 GPA / 4.0",
  },
];

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
