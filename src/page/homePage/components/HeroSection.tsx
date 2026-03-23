import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../../routes/frontRoutes";

function HeroSection(): ReactElement {
  return (
    <section className="page__hero hero">
      <div className="hero__body">
        <div className="hero__container">
          <div className="hero__play">
            <img
              className="hero__icon-play"
              src="/images/home/hero/play.webp"
              alt="Image"
            />
          </div>
          <div className="hero__content">
            <div className="section-header">
              <h1 className="section-header__title section-header__title--h1">
                The Best Streaming Experience
              </h1>
              <div className="section-header__text section-header__text--center">
                <p>
                  StreamVibe is the best streaming experience for watching your
                  favorite movies and shows on demand, anytime, anywhere. With
                  StreamVibe, you can enjoy a wide variety of content, including
                  the latest blockbusters, classic movies, popular TV shows, and
                  more. You can also create your own watchlists, so you can
                  easily find the content you want to watch.
                </p>
              </div>
            </div>
            <Link
              to={frontRoutes.navigator.moviesShows.base}
              className="hero__btn button button--icon"
            >
              <span className="-icon-play"></span>Start Watching Now
            </Link>
          </div>
        </div>
        <div className="hero__bg" data-pl="inset">
          <img
            src="/images/home/hero/bg.webp"
            alt="image"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
