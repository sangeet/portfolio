import React, { FunctionComponent } from "react";
import Image from "next/image";
import { CarouselSection } from "../../components/carousel-section";
import { testimonials } from "../../data/testimonials";

const TestimonialsSection: FunctionComponent = () => {
  const slides = testimonials.map((testimonial, index) => (
    <div key={index} className="w-full my-5 flex-shrink-0 px-3 snap-start">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 py-5 lg:py-12 flex flex-col items-center justify-center h-full bg-gray-800 border border-gray-700 rounded-xl testimonial-card relative">
        <p className="text-center text-sm sm:text-base md:text-lg">
          {testimonial.text}
        </p>
        <a href={testimonial.profile.link} target="_blank" className="flex flex-col sm:flex-row items-center mt-10 p-6 sm:py-4 sm:border border-gray-700 rounded-xl sm:rounded-full">
          <div className="rounded-full shadow overflow-hidden w-20 h-20 sm:h-24 sm:w-24 flex-shrink-0">
            <Image
              src={testimonial.profile.image}
              alt={testimonial.profile.name}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div
            className="flex flex-col sm:ml-5 items-center sm:items-start text-center sm:text-left  mt-5 sm:mt-0"
            style={{ maxWidth: "250px" }}
          >
            <span className="text-sm sm:text-base font-bold">
              {testimonial.profile.name}
            </span>
            <span className="text-xs sm:text-sm my-1">
              {testimonial.profile.title}
            </span>
            <span className="text-xs">{testimonial.profile.location}</span>
          </div>
        </a>
        <a href={testimonial.source.link} target="_blank" className="absolute bottom-0 right-0 text-sm underline mr-5 mb-3">{testimonial.source.site}</a>
      </div>
    </div>
  ));
  return <CarouselSection title="Testimonials" slides={slides} />;
};

export { TestimonialsSection };
