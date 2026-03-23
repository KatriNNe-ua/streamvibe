import { useState, type ReactElement } from "react";
import MovesSliderSection from "./components/MovesSliderSection";
import ShowsSliderSection from "./components/ShowsSliderSection";
import { useMediaQuery } from "react-responsive";
import HeaderSectionSlider from "./components/HeaderSectionSlider";

function MoviesShowsPage(): ReactElement {
	const [type, setType] = useState<"moves" | "shows">("moves");
	const isMobile = useMediaQuery({ maxWidth: 767.98 });
  return (
    <>
      <HeaderSectionSlider />
      {isMobile && (
        <div className="type">
          <div className="type__container">
            <div className="plan__switcher switcher">
              <button
                className={
                  type === "moves"
                    ? "switcher__item switcher__item--active"
                    : "switcher__item"
                }
                type="button"
                onClick={() => setType("moves")}
              >
                Moves
              </button>
              <button
                className={
                  type === "shows"
                    ? "switcher__item switcher__item--active"
                    : "switcher__item"
                }
                type="button"
                onClick={() => setType("shows")}
              >
                Shows
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "moves" && isMobile && <MovesSliderSection />}
      {type === "shows" && isMobile && <ShowsSliderSection />}
      {!isMobile && (
        <>
          <MovesSliderSection />
		   <ShowsSliderSection />
        </>
      )}
    </>
  );
}

export default MoviesShowsPage;
