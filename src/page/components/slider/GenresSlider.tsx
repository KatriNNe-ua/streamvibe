import type { ReactElement } from "react";
import SliderSection from "./SliderSection";
import { type Genres } from "../../../data/genresData";
import SwiperSlideGenresSlider from "./SwiperSlideGenresSlider";
import { SwiperSlide } from "swiper/react";

type Prop = {
  title: string;
  p?: string;
  additionalClass: string;
  data: Genres[];
  count: 4|5
  id?:string
};

function GenresSlider({ title, p, additionalClass, data, count , id}: Prop): ReactElement {
  return (
    <section className={`page__items-slider ${additionalClass}`} id={id}>
      <SliderSection title={title} p={p} count={count}>
        {data?.map((item) => (
          <SwiperSlide className="items-slider__swiper-wrapper" key={item.id}>
            <SwiperSlideGenresSlider item={item} />
          </SwiperSlide>
        ))}
      </SliderSection>
    </section>
  );
}

export default GenresSlider;
