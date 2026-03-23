import { memo, type ReactElement } from "react";
import type { DataDB } from "../../../data/dataDB";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../../routes/frontRoutes";
import { formatDate } from "../../../utils/formatDate";
import { formatMinutesToHours } from "../../../utils/formatMinutesToHours";
import Rating from "../Rating";

type Props = {
  item: DataDB;
  bottom:string
};


function SwiperSlideSingleSlider({item, bottom}:Props): ReactElement {
 return (
  
     <article className="items-slider__item item-slider ">
       <Link
         to={frontRoutes.navigator.moviesShows.item(item.id)}
         className="item-slider__body"
       >
         <div className="item-slider__cover">
           <img src={item.cover} alt="cover" />
         </div>
         <div className="item-slider__bottom">
           {bottom === "released" && (
             <div className="item-slider__element ">
               Released at
               <span>{item.dateReleases && formatDate(item.dateReleases)}</span>
             </div>
           )}
           {bottom === "trending" && (
             <>
               <div className="item-slider__element -icon-clock">
                 {item.duration && formatMinutesToHours(item.duration)}
               </div>
               <div className="item-slider__element -icon-eye">
                 {`${item.views}K`}
               </div>
             </>
           )}
           {bottom === "watch" && (
             <>
               <div className="item-slider__element -icon-clock">
                 {item.duration && formatMinutesToHours(item.duration)}
               </div>
               <div className="item-slider__element rating">
                 <Rating value={item.ratings.imdb} />
                 {`${item.views}K`}
               </div>
             </>
           )}
         </div>
       </Link>
     </article>

 );
}

export default memo(SwiperSlideSingleSlider);