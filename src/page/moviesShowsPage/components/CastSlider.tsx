import { useRef, type ReactElement } from "react";
import EightElementSwiper from "../../../components/swiper/EightElementSwiper";
import type { DataDB } from "../../../data/dataDB";
import SwiperSlideCastSlider from "./SwiperSlideCastSlider";
import { SwiperSlide } from "swiper/react";

type Props = {
  item: DataDB;
};

function CastSlider({ item }: Props): ReactElement {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="info__cast cast">
      <div className="cast__header">
        <h3 className="cast__label">Cast</h3>
        <div className="cast__controls controls-cast">
          <button
            ref={prevRef}
            type="button"
            className="controls-cast__arrow controls-cast__arrow--left -icon-slider-arrow"
            aria-label="button back"
          ></button>
          <button
            ref={nextRef}
            type="button"
            className="controls-cast__arrow controls-cast__arrow--right -icon-slider-arrow"
            aria-label="button forward"
          ></button>
        </div>
      </div>
      <EightElementSwiper prevRef={prevRef} nextRef={nextRef}>
        {item.cast.map((cast, index) => (
          <SwiperSlide className="cast__slider" key={index}>
            <SwiperSlideCastSlider cast={cast} />
          </SwiperSlide>
        ))}
      </EightElementSwiper>
    </div>
  );
}

export default CastSlider;

