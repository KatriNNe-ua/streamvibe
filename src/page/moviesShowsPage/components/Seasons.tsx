import type { ReactElement } from "react";
import type {  ShowEntry } from "../../../data/dataDB";
import SeasonItem from "./SeasonItem";

type Props = {
  item: ShowEntry;
};

function Seasons({item}:Props): ReactElement {
 return (
   <div className="info__seasons seasons">
     <div className="seasons__body">
       <h2 className="seasons__title">Seasons and Episodes</h2>
       <ul className="seasons__list">
         {item.seasons.map((season) => (
           <SeasonItem item={season} key={season.season}/>
         ))}
       </ul>
     </div>
   </div>
 );
}

export default Seasons;