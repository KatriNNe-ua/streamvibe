import {
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

type Prop = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  paginationRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

function TwoElementSwiper({
  prevRef,
  nextRef,
  paginationRef,
  children,
}: Prop): ReactElement {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }

    if (
      swiper.params.pagination &&
      typeof swiper.params.pagination !== "boolean"
    ) {
      swiper.params.pagination.el = paginationRef.current;
      swiper.params.pagination.clickable = true;
      swiper.params.pagination.bulletElement = "button";
      swiper.params.pagination.bulletClass =
        "swiper-pagination-bullet slider-controls__bullet-item";
      swiper.params.pagination.bulletActiveClass =
        "swiper-pagination-bullet-active slider-controls__bullet-item--active";

      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }

  
  }, [prevRef, nextRef, paginationRef, ]);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      autoHeight={true}
	  speed={700} 
      breakpoints={{
        320: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 10,
        },
        880: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1450: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {children}
    </Swiper>
  );
}

export default TwoElementSwiper;
