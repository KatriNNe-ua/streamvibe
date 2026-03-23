import { useRef, type ReactElement, type ReactNode } from "react";
import FiveElementSwiper from "../../../components/swiper/FiveElementSwiper";
import FourElementSwiper from "../../../components/swiper/FourElementSwiper";

type Prop = {
  title: string;
  p?: string;
  count: 4 | 5;
  children: ReactNode;
};

function SliderSection({ count, title, p, children }: Prop): ReactElement {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="items-slider">
      <div className="items-slider__container">
        <div className="items-slider__header">
          <div className="items-slider__section-header section-header">
            <h2 className="section-header__title">{title}</h2>
            {p && (
              <div className="section-header__text">
                <p>{p}</p>
              </div>
            )}
          </div>
          <div className="items-slider__controls slider-controls">
            <button
              ref={prevRef}
              type="button"
              className="slider-controls__arrow slider-controls__arrow--left -icon-slider-arrow"
              aria-label="button back"
            ></button>
            <div ref={paginationRef} className="slider-controls__bullets"></div>
            <button
              ref={nextRef}
              type="button"
              className="slider-controls__arrow slider-controls__arrow--right -icon-slider-arrow "
              aria-label="button forward"
            ></button>
          </div>
        </div>
        {count === 5 && (
          <FiveElementSwiper
            prevRef={prevRef}
            nextRef={nextRef}
            paginationRef={paginationRef}
            scrollbarRef={scrollbarRef}
          >
            {children}
          </FiveElementSwiper>
        )}
        {count === 4 && (
          <FourElementSwiper
            prevRef={prevRef}
            nextRef={nextRef}
            paginationRef={paginationRef}
            scrollbarRef={scrollbarRef}
          >
            {children}
          </FourElementSwiper>
        )}

        <div ref={scrollbarRef} className="items-slider__scrollbar"></div>
      </div>
    </div>
  );
}

export default SliderSection;
