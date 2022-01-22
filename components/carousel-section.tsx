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

  const [width, setWidth] = useState(100);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });
    //@ts-ignore
    resizeObserver.observe(carouselRef.current);
  });

  const handleLeftClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft - width,
    });
  };
  const handleRightClick = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current.scrollLeft + width,
    });
  };
  return (
    <section className="flex flex-col container py-12 lg:py-24">
      <div className="flex items-end justify-between">
        <div className="flex items-stretch">
          <h2 className="section-heading">{title}</h2>
          <div className="flex ml-5">
            <button
              className="bg-slate-700 px-2 mr-2"
              onClick={() => handleLeftClick()}
            >
              <ChevronRight className="h-6 w-6 transform rotate-180" />
            </button>
            <button
              className="bg-slate-700 px-2"
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
    </section>
  );
};

export { CarouselSection };