import { memo, type ReactElement } from "react";
import Rating from "./Rating";
import type { DataDB } from "../../data/dataDB";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../routes/frontRoutes";
import { truncateText } from "../../utils/truncateText";

type Props={
	item: DataDB
}

function ItemList({item}:Props): ReactElement {
 return (
   <li className="list-genre__item">
     <Link
       to={frontRoutes.navigator.moviesShows.item(item.id)}
       className="list-genre__link"
     >
       <div className="list-genre__img">
         <img src={item.cover} alt="cover" />
       </div>
       <div className="list-genre__content">
         <h2 className="list-genre__title">{item.title}</h2>
         <div className="list-genre__description">
           {truncateText(item.description)}
         </div>
         <div className="list-genre__ratings ratings">
           <div className="ratings__items">
             <div className="ratings__item ratings__item--first">
               <div className="ratings__label">IMDb</div>
               <div className="ratings__inner">
                 <Rating value={item.ratings.imdb} />
                 {item.ratings.imdb}
               </div>
             </div>
             <div className="ratings__item">
               <div className="ratings__label">Streamvibe</div>
               <div className="ratings__inner">
                 <Rating value={item.ratings.streamvibe} />
                 {item.ratings.streamvibe}
               </div>
             </div>
           </div>
         </div>
       </div>
     </Link>
   </li>
 );
}

export default memo(ItemList);