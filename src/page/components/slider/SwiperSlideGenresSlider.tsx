import { memo, type ReactElement } from "react";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../../routes/frontRoutes";
import type { Genres } from "../../../data/genresData";
type Props = {
  item: Genres;
};


function SwiperSlideGenresSlider({item}:Props): ReactElement {
 return (
  
     <article className="items-slider__item item-slider ">
       <Link
         to={frontRoutes.navigator.moviesShows.list(item.list)}
         className="item-slider__body"
       >
         <div className="item-slider__images">
           {item.poster.map((img, index) => (
             <div className="item-slider__image" key={index}>
               <img src={img} alt="cover" />
             </div>
           ))}
         </div>
         <div className="item-slider__footer">
           <h3 className="item-slider__title -icon-slider-arrow">
             {item.name}
           </h3>
         </div>
       </Link>
     </article>

 );
}

export default memo(SwiperSlideGenresSlider);