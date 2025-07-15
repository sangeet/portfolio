import React, { FunctionComponent } from "react";
import { CarouselSection } from "../../components/carousel-section";
import { tools } from "../../data/projects";
import { ProjectCard } from "../../components/project-card";

const ToolsSection: FunctionComponent = () => {
  const slides = tools.map((item, index) => (
    <ProjectCard
      projectItem={item}
      link={item.link}
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-5 flex-shrink-0 px-3 snap-start"
    />
  ));
  return <CarouselSection title="Personal Projects" slides={slides} />;
};

export { ToolsSection };
