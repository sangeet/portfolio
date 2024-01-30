import {gilbert, matthew, Person, sebastien, stefan} from "./people";

type TestimonialType = {
    profile: Person;
    text: string;
    source: TestimonialSource;
};

type TestimonialSource = {
    site: string,
    link: string,
}

const testimonials: TestimonialType[] = [
    {
        profile: matthew,
        text: "Sangeet got true grit. I've been happily contracting Sangeet for personal projects\
     for nearly two years now. For every projects, the acceptance criteria change, the technology shifts, \
     the timelines get smaller, and yet, Sangeet always delivers. There is a sea of employable web engineers \
     in the world but very few of them have the design thinking, team collaboration, or laser sharp focus to \
     the smallest of details like Sangeet. Overall, it is a joy to collaborate with Sangeet and I'm excited to \
     continue our relationship for years to come.",
        source: {
            site: "LinkedIn",
            link: "https://www.linkedin.com/in/sangeet-khatri"
        },
    },
    {
        profile: gilbert,
        text: "Sangeet is fantastic to work with. I hired him for a variety of Tailwind based projects, and each page\
     was created professionally, quickly and to the highest quality, with excellent communication. Highly recommended,\
      and I hope to work with him more going forward",
        source: {
            site: "LinkedIn",
            link: "https://www.linkedin.com/in/sangeet-khatri"
        },
    },
    {
        profile: stefan,
        text: "We have worked with Sangeet multiple times on JAMstack related projects (Gatsby, Tailwind, Contentful, Netlify),\
     and has been a perfect experience every single time. Sangeet is knowledgeable, solution-oriented, proactive, and also \
     pleasant to communicate with. I can wholeheartedly recommend Sangeet and look forward to working with him in the future.",
        source: {
            site: "Upwork",
            link: "https://www.upwork.com/freelancers/~015f4ecffa7bc1b547"
        },
    },
    {
        profile: sebastien,
        text: "I had the pleasure of hiring Sangeet for multiple freelance gigs between 2019 and 2021. As\
     a senior developer myself, I was very picky about the skillset I was looking for and I am so glad \
     I gave him a chance because he left me utterly impressed. His communication skills are second to none\
      and his thirst for knowledge is immediately apparent. He turned out to be an excellent programmer, well \
      versed in the stack I was looking for and eager to get the job done right while nailing the deadlines. \
      He is definitely a rockstar in the making. I am just saddened that he isn't available at the moment but \
      I'm not surprised, if you can get your hands on him, by all means do it but do it fast!",
        source: {
            site: "LinkedIn",
            link: "https://www.linkedin.com/in/sangeet-khatri"
        },
    },
];

export {testimonials};
