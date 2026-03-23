import type { ReactElement } from "react";
import Rating from "../../components/Rating";
import type { DataDB } from "../../../data/dataDB";

type Props = {
  item: DataDB;
};



function Aside({item}:Props): ReactElement {
 return (
   <aside className="info__sidebar sidebar-info">
     <div className="sidebar-info__released-year released-year">
       <h3 className="released-year__header -icon-calendar">Released Year</h3>
       <div className="released-year__year">{item.releasedYear}</div>
     </div>
     <div className="sidebar-info__languages languages">
       <h3 className="languages__header -icon-langs">Available Languages</h3>
       <ul className="languages__items">
         {item.availableLanguages.map((lang) => (
           <li className="languages__item" key={lang}>
             <div className="languages__button">{lang}</div>
           </li>
         ))}
       </ul>
     </div>
     <div className="sidebar-info__ratings ratings">
       <h3 className="ratings__header -icon-star">Ratings</h3>
       <div className="ratings__items">
         <div className="ratings__item">
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
     <div className="sidebar-info__languages languages">
       <h3 className="languages__header -icon-gernes">Gernes</h3>
       <ul className="languages__items">
         {item.genres.map((g) => (
           <li className="languages__item" key={g}>
             <div className="languages__button">{g}</div>
           </li>
         ))}
       </ul>
     </div>
     <div className="sidebar-info__director director">
       <h3 className="director__header">Director</h3>
       <div className="director__body">
         <div className="director__img">
           <img src="/images/data/person/1.webp" alt="image" />
         </div>
         <div className="director__name">
           {item.director.name}
           <span>From {item.director.country}</span>
         </div>
       </div>
     </div>
     <div className="sidebar-info__director director">
       <h3 className="director__header">Music</h3>
       <div className="director__body">
         <div className="director__img">
           <img src="/images/data/person/2.webp" alt="image" />
         </div>
         <div className="director__name">
           {item.music.name}
           <span>From {item.music.country}</span>
         </div>
       </div>
     </div>
   </aside>
 );
}

export default Aside;