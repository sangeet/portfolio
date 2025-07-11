
import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { CarouselSection } from "../../components/carousel-section";
import { tools } from "../../data/projects";

const ToolsSection: FunctionComponent = () => {
  const slides = tools.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-5 flex-shrink-0 px-3 snap-start"
    >
      <Link href={`/tools/${item.slug}`} className="card h-full">
          <div className="block w-full">
            <Image
              src={item.image}
              alt={item.title}
              placeholder="blur"
              layout="responsive"
            />
          </div>

          <div className="flex flex-col p-5 grow">
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="my-5">{item.description}</p>
            {item.tags && (
              <div className="flex mr-2 mt-auto flex-wrap">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag mr-3">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
      </Link>
    </div>
  ));
  return <CarouselSection title="Personal Projects" slides={slides} />;
};

export { ToolsSection };
