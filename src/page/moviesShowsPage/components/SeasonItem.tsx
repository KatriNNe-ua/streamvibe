import { memo, useEffect, useRef, useState, type ReactElement } from "react";
import type { Season } from "../../../data/dataDB";
import { slideDown, slideUp } from "../../../utils/slide";
import ItemEpisode from "./ItemEpisode";
type Props = {
  item: Season;
};

function SeasonItem({item}:Props): ReactElement {
 const [isOpen, setIsOpen] = useState(false);
 const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.hidden = true;
    }
  }, []);

  function toggle() {
    const content = contentRef.current;
    if (!content) return;

    if (isOpen) {
      slideUp(content, 500);
    } else {
      slideDown(content, 500);
    }

    setIsOpen(!isOpen);
  }

 return (
   <li
     className={
       isOpen ? " seasons__item season --active" : "seasons__item season"
     }
   >
     <div className="season__body">
       <button className="season__header -icon-slider-arrow" onClick={toggle}>
         <div className="season__info">
           Season {item.season < 10 ? `0${item.season}` : item.season}
           <span>
             {`${item.episodes.length} `}
             Episodes
           </span>
         </div>
       </button>
       <ul className="season__content" ref={contentRef} hidden>
         {item.episodes.map((episode) => (
           <ItemEpisode episode={episode} key={episode.number} />
         ))}
       </ul>
     </div>
   </li>
 );
}

export default memo(SeasonItem);