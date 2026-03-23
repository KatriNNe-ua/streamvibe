import { memo, type ReactElement } from "react";
import type { DataDB } from "../../../data/dataDB";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../../routes/frontRoutes";

type Prop = {
  item: DataDB;
};

function GeneralHeroItem({ item }: Prop): ReactElement {
  return (
    <div className="general-hero__body general-hero__body--padding-bottom">
      <div className="general-hero__content">
        <div className="general-hero__section-header section-header">
          <h1 className="section-header__title section-header__title--center">
            {item.title}
          </h1>
          <div className="section-header__text section-header__text--center">
            <p>{item.tagline}</p>
          </div>
        </div>
        <div className="general-hero__actions">
          <Link
            to={frontRoutes.navigator.moviesShows.item(item.id)}
            className="inner-hero__button  button button--min-padding button--icon"
          >
            <span className="-icon-play"></span>Play Now
          </Link>

          <button
            className="button button--border button--min-padding  inner-hero__button"
            aria-label="button plus"
          >
            <span className="-icon-plus"></span>
          </button>
          <button
            className="button button--border button--min-padding  inner-hero__button"
            aria-label="button like"
          >
            <span className="-icon-like"></span>
          </button>
          <button
            className="button button--border button--min-padding  inner-hero__button"
            aria-label="button volume"
          >
            <span className="-icon-volume"></span>
          </button>
        </div>
        <div className="general-hero__bg">
          <img
            src={item.poster}
            alt="image"
            className="inner-hero__img"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(GeneralHeroItem);
