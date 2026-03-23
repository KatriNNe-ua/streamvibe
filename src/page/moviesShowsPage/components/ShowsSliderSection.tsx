
import type { ReactElement } from "react";
import GenresSlider from "../../components/slider/GenresSlider";
import { genres } from "../../../data/genresData";
import SingleSlider from "../../components/slider/SingleSlider";
import { useGetFilterDataQuery } from "../../../services/moviesShowsAPI";

function ShowsSliderSection(): ReactElement {
  const {
    data: trendingData,
    error: trendingError,
    isLoading: trendingIsLoading,
  } = useGetFilterDataQuery({
    trendingNow: true,
    type: "show",
  });
  const {
    data: releasedData,
    error: releasedError,
    isLoading: releasedIsLoading,
  } = useGetFilterDataQuery({
    newReleases: true,
    type: "show",
  });
  const {
    data: watchData,
    error: watchError,
    isLoading: watchIsLoading,
  } = useGetFilterDataQuery({
    watch: true,
    type: "show",
  });

  return (
    <section className="page__movies-slider movies-slider">
      <div className="movies-slider__container">
        <h2 className="movies-slider__title">Movies</h2>
        <div className="movies-slider__wrapper">
          <GenresSlider
            title="Our Genres"
            additionalClass="list-main"
            data={genres}
            count={5}
            id="genresS"
          />
          <GenresSlider
            title="Popular Top 10 In Genres"
            additionalClass="top10 list-main"
            data={genres}
            count={4}
            id="popularS"
          />

          {Boolean(trendingError) && <div>Error loading data</div>}
          {trendingIsLoading && (
            <div className="loader">
              <div className="loader__item"></div>
            </div>
          )}
          {trendingData && (
            <SingleSlider
              title="Trending Shows Now"
              additionalClass="single list-main trending"
              data={trendingData}
              count={5}
              bottom="trending"
              id="trendingS"
            />
          )}
          {Boolean(releasedError) && <div>Error loading data</div>}
          {releasedIsLoading && (
            <div className="loader">
              <div className="loader__item"></div>
            </div>
          )}
          {releasedData && (
            <SingleSlider
              title="New Released Shows"
              additionalClass="single list-main"
              data={releasedData}
              count={5}
              bottom="released"
              id="newS"
            />
          )}
          {Boolean(watchError) && <div>Error loading data</div>}
          {watchIsLoading && (
            <div className="loader">
              <div className="loader__item"></div>
            </div>
          )}
          {watchData && (
            <SingleSlider
              title="Must - Watch Shows"
              additionalClass="single list-main trending"
              data={watchData}
              count={4}
              bottom="watch"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ShowsSliderSection;
