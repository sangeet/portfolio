import React, { FunctionComponent } from "react";
import { CarouselSection } from "../../components/carousel-section";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/project-card";

const ProjectsSection: FunctionComponent = () => {
  const slides = projects.map((item, index) => (
    <ProjectCard
      projectItem={item}
      link={`/project/${item.slug}`}
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-5 flex-shrink-0 px-3 snap-start"
    />
  ));
  return <CarouselSection title="Past Freelance Gigs" slides={slides} />;
};

export { ProjectsSection };
