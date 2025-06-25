import { GithubIcon } from "../components/icons/github";
import { LinkedinIcon } from "../components/icons/linkedin";
import { RedditIcon } from "../components/icons/reddit";
import { UpworkIcon } from "../components/icons/upwork";

const skillset = [
    "Web Development",
    "React.js",
    "Javascript/Typescript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Next.js",
    "grpc", "Kotlin",
    "Firebase", 
    "Firestore", 
    "Linux"
];

const experiences = [
    {
        title: "Full Stack Developer",
        employer: "Jolly Learning Ltd.",
        startDate: "October 2023",
        endDate: "April 2025",
        location: "Valencia, Spain (Remote)",
        description: `
        - Contributed to data models and back-end (Kotlin) + gRPC (gRPC-web) API using the said models.
        - Managed user permissions, security rules, and data migrations for changes in data models, workflows, and APIs. Mix of Firebase and custom solutions.
        - Developed and maintained Firestore and BigQuery data along with data models and permissions
        - Contributed to Google Cloud scheduled scripts and services along with CI/CD setup.`
    },
    {
        title: "Frontend Developer",
        employer: "Jolly Learning Ltd.",
        startDate: "March 2022",
        endDate: "September 2023",
        location: "Valencia, Spain (Remote)",
        description: `Technologies: Web, React, TailwindCSS, Firebase, Flutter.
        - Created and maintained an internal distribution platform for product distribution, purchases, administrative tasks, support, and related workflows.
        - Developed and maintained multiple public-facing static websites.
        - Contributed to Flutter and Flutter web-based applications.
        - Provided technical support and wrote documentation for app workflows, internal dashboards, and technical queries.
        - Technologies: Web, React, Typescript, TailwindCSS, Firebase, Flutter, Next.js, protobuf, grpc, Kotlin`,
    },
    {
        title: "Frontend Developer (Freelance)",
        employer: "Freelance, Self Employed",
        startDate: "May 2019",
        endDate: "January 2022",
        location: "Remote",
        description: `- Freelance work with front-end web technologies on hourly and contract basis.
        - Specialized in Gatsby, Next.js, and related static site generators along with TailwindCSS, CI/CD, CMS setups, hosting and related development tasks.
        - Contributed in 30+ projects in collaboration with over 15 clients/teams remotely across 10+ countries.`
    },
    {
        title: "Technology Associate - Sysadmin",
        employer: "D. E. SHAW INDIA PRIVATE LIMITED",
        startDate: "May 2017",
        endDate: "October 2018",
        location: "Hyderabad Area, India",
        description:
        `- 7th Largest Hedge fund in the world by AUM (as of 2025)
        - Helpdesk + Sysadmin roles - First line of support and systems administration tasks involving Linux,
        Windows, Storage, Mail Servers, Unified Communication infrastructure
        - Administering user facing infrastructure by co-coordinating with senior engineering teams.
        `
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
