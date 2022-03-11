const title = "Sangeet Khatri | Portfolio";
const URL = "https://sangeet.dev";
const description = "Frontend Developer based in India";

type MetaTag = {
  name: string;
  content: string;
};
const metatags: MetaTag[] = [
  {
    name: "title",
    content: title,
  },
  {
    name: "description",
    content: description,
  },
  {
    name: "subject",
    content: `Portfolio | ${title}`,
  },
  {
    name: "subtitle",
    content: `Portfolio | ${title}`,
  },
  {
    name: "author",
    content: "Sangeet Khatri, sangeet.khatri@outlook.com",
  },
  {
    name: "url",
    content: URL,
  },
  {
    name: "identifier-URL",
    content: URL,
  },
  {
    name: "keywords",
    content: "web developer, freelancer, frontend, portfolio",
  },
  {
    name: "theme-color",
    content: "#1E293B",
  },
  {
    name: "og:title",
    content: title,
  },
  {
    name: "og:type",
    content: "Portfolio",
  },
  {
    name: "og:url",
    content: URL,
  },
  {
    name: "og:image",
    content: "/public/people/me.jpg",
  },
  {
    name: "og:description",
    content: description,
  },
];

export { metatags };
