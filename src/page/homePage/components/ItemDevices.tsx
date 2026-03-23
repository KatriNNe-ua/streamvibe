import { memo, type ReactElement } from "react";
import type { DeviceCard } from "../../../data/deviceData";

type Props = {
  card: DeviceCard;
};

function ItemDevices({card}:Props): ReactElement {
 return (
   <article className="devices__item item-devices" key={card.id}>
     <div className="item-devices__header">
       <div className="item-devices__icon">
         <img src={card.icon} alt="icon" />
       </div>
       <h3 className="item-devices__title">{card.title}</h3>
     </div>
     <div className="item-devices__text">
       <p>{card.description}</p>
     </div>
   </article>
 );
}

export default memo(ItemDevices);