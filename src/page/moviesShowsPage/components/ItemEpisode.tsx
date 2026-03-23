import { memo, type ReactElement } from "react";
import type { Episode } from "../../../data/dataDB";
import { formatMinutesToHours } from "../../../utils/formatMinutesToHours";

type Props = {
  episode: Episode;
};

function ItemEpisode({ episode }:Props): ReactElement {
  return (
    <li className="season__item item-season">
      <a href="#" className="item-season__img -icon-video-play">
        <img src={episode.poster} alt="img" />
      </a>
      <div className="item-season__wrapper">
        <div className="item-season__header">
          <h4 className="item-season__title">
            <a href="#" className="item-season__link">
              {episode.title}
            </a>
          </h4>
          <div className="item-season__duration -icon-clock">
            {formatMinutesToHours(episode.duration)}
          </div>
        </div>

        <div className="item-season__text">
          <p>{episode.description}</p>
        </div>
      </div>
    </li>
  );
}

export default memo(ItemEpisode);