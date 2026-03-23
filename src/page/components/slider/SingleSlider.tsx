import type { ReactElement } from "react";
import SliderSection from "./SliderSection";
import type { DataDB } from "../../../data/dataDB";
import SwiperSlideSingleSlider from "./SwiperSlideSingleSlider";
import { SwiperSlide } from "swiper/react";

type Prop = {
  title: string;
  additionalClass: string;
  data: DataDB[];
  count: 4 | 5;
  bottom: "trending" | "released" | "watch";
  id?: string
};
 
function SingleSlider({
  title,
  additionalClass,
  data,
  count,
  bottom,
  id
}: Prop): ReactElement {
  return (
    <section className={`page__items-slider ${additionalClass}`} id={id}>
      <SliderSection title={title} count={count}>
        {data?.map((item) => (
          <SwiperSlide className="items-slider__swiper-wrapper" key={item.id}>
            <SwiperSlideSingleSlider bottom={bottom} item={item} />
          </SwiperSlide>
        ))}
      </SliderSection>
    </section>
  );
}

export default SingleSlider;
