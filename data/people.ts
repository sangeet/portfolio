import matthewImage from "../public/people/matthew.jpg";
import sebastienImage from "../public/people/sebastien.jpg";
import gilbertImage from "../public/people/gilbert.webp";
import stefanImage from "../public/people/stefan.jpg";

type Person = {
    name: string;
    title: string;
    location?: string;
    image: StaticImageData;
    link?: string;
};

const matthew: Person = {
    name: "Matthew Harwood",
    title: "Engineering Manager at Uber",
    location: "San Francisco, United States ",
    image: matthewImage,
    link: "https://www.linkedin.com/in/morningharwood/"
};

const sebastien: Person = {
    name: "Sebastien Pelletier",
    title: "Senior Fullstack Developer",
    location: "Montreal, Canada",
    image: sebastienImage,
    link: "https://www.linkedin.com/in/sepelletier"
};

const gilbert: Person = {
    name: "Gilbert Jolly",
    title: "CTO, Jolly Technologies UK",
    location: "Valencia, Spain",
    image: gilbertImage,
    link: "https://www.linkedin.com/in/gilbert-jolly-23b47434"
};

const stefan: Person = {
    name: "Stefan Trockel",
    title: "Founder & CEO @ Mercury.ai",
    location: "Bielefeld, Germany",
    image: stefanImage,
    link: "https://www.linkedin.com/in/stefantrockel/"
};

export type {Person};
export {matthew, sebastien, gilbert, stefan};
