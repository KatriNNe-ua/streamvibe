import { memo, type ReactElement } from "react";
import type { Cast } from "../../../data/dataDB";
type Props = {
cast:Cast
};

function SwiperSlideCastSlider({cast}:Props): ReactElement {
 return (
 
     <div className="cast__slide swiper-slide">
       <a href={cast.link} className="cast__link">
         <img src={cast.img} alt="img" className="cast__img" />
       </a>
     </div>

 );
} 

export default memo(SwiperSlideCastSlider);