import {
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

type Prop = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  children: ReactNode;
};

function EightElementSwiper({
  prevRef,
  nextRef,
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
  }, [prevRef, nextRef]);

  return (
    <Swiper
      modules={[Navigation]}
      autoHeight={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        430: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        560: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
        1500: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {children}
    </Swiper>
  );
}

export default EightElementSwiper;
