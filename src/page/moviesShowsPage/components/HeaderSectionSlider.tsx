import { useRef, type ReactElement } from "react";
import { useGetFilterDataQuery } from "../../../services/moviesShowsAPI";
import LoadingPage from "../../../components/LoadingPage";
import { SwiperSlide } from "swiper/react";
import GeneralHeroItem from "./GeneralHeroItem";
import OneElementSwiper from "../../../components/swiper/OneElementSwiper";

function HeaderSectionSlider(): ReactElement {
  const { data, error, isLoading } = useGetFilterDataQuery({
    showFirstPage: true,
  });

    const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const paginationRef = useRef<HTMLDivElement>(null);

  let content;
  if (error) content = <div>Error</div>;
  else if (isLoading) content = <LoadingPage />;
  else if (data)
    content = (
      <div className="general-hero__container">
        <OneElementSwiper
          prevRef={prevRef} 
          nextRef={nextRef}
          paginationRef={paginationRef}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <GeneralHeroItem item={item} />
            </SwiperSlide>
          ))}
        </OneElementSwiper>

        <div className="general-hero__controls slider-controls">
          <button
            ref={prevRef}
            type="button"
            className="slider-controls__hero slider-controls__arrow--left -icon-slider-arrow button button--border button--min-padding"
            aria-label="button back"
          ></button>
          <div ref={paginationRef} className="slider-controls__bullets"></div>
          <button
            ref={nextRef}
            type="button"
            className="slider-controls__hero slider-controls__arrow--right -icon-slider-arrow button button--border button--min-padding"
            aria-label="button forward"
          ></button>
        </div>
      </div>
    );

  return (
    <section className="page__general-hero general-hero">{content}</section>
  );
}

export default HeaderSectionSlider;
