import matthewImage from "../public/people/matthew.jpg";
import sebastienImage from "../public/people/sebastien.jpg";
import gilbertImage from "../public/people/gilbert.webp";
import stefanImage from "../public/people/stefan.jpg";

type Person = {
  name: string;
  title: string;
  location?: string;
  image: StaticImageData;
};

const matthew: Person = {
  name: "Matthew Harwood",
  title: "Senior Software Engineer at Uber",
  location: "San Francisco, United States ",
  image: matthewImage,
};

const sebastien: Person = {
  name: "Sebastien Pelletier",
  title: "Senior Fullstack Developer",
  location: "Montreal, Canada",
  image: sebastienImage,
};

const gilbert: Person = {
  name: "Gilbert Jolly",
  title: "Director & Technology Developer, Jolly Futures CIC",
  location: "England, United Kingdom",
  image: gilbertImage,
};

const stefan: Person = {
  name: "Stefan Trockel",
  title: "Founder & CEO @ Mercury.ai",
  location: "Bielefeld, Germany",
  image: stefanImage,
};

export type { Person };
export { matthew, sebastien, gilbert, stefan };
