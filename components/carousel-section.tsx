import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ChevronRight } from "../components/icons/chevron-right";

type CarouselSectionProps = {
  title: string;
  slides: ReactNode[];
};

const CarouselSection: FunctionComponent<CarouselSectionProps> = (props) => {
  const { title, slides } = props;

  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesList = carouselRef.current?.children;

  const [width, setWidth] = useState(100);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentRect.width);
    });
    //@ts-ignore
    resizeObserver.observe(carouselRef.current);
  });

  const handleLeftClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft - width,
      behavior: "smooth",
    });
  };
  const handleRightClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft + width,
      behavior: "smooth",
    });
  };

  const scrollTo = (index: number) => {
    if (slidesList) {
      slidesList[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section className="flex flex-col container py-12 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex items-stretch">
          <h2 className="section-heading">{title}</h2>
          <div className="flex ml-5">
            <button
              className="nm-flat-slate-800 px-2 mr-2"
              onClick={() => handleLeftClick()}
            >
              <ChevronRight className="h-6 w-6 transform rotate-180" />
            </button>
            <button
              className="nm-flat-slate-800 px-2"
              onClick={() => handleRightClick()}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex w-full overflow-scroll scroll-smooth my-5 -mx-3 snap-mandatory snap-x scrollbar-hidden"
        ref={carouselRef}
      >
        {slides}
      </div>
      {/* <div className="flex justify-center items-center mt-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="dot"
          ></button>
        ))}
      </div> */}
    </section>
  );
};

export { CarouselSection };
