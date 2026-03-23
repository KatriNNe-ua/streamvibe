import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { useGetFilteredPaginatedInfiniteQuery } from "../../services/moviesShowsAPI";

function List(): ReactElement {
  const { list } = useParams<{ list: string }>();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useGetFilteredPaginatedInfiniteQuery(
      {
        filter: { genre: list },
        limit: 5,
      },
      {
        skip: !list,
      },
    );

  const allPages = data?.pages ?? [];
  const currentPageMovies = allPages[currentPageIndex]?.items ?? [];
  const totalPages = allPages.length;

  const handlePageClick = (index: number) => {
    setCurrentPageIndex(index);
  }; 

  const handleNext = async () => {
    if (currentPageIndex + 1 === totalPages && hasNextPage) {
      await fetchNextPage();
    }
    setCurrentPageIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

useEffect(() => {
  const section = document.querySelector(".page__genre.genre");
  if (section) {
    const rect = section.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - window.innerHeight * 0.5;
    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }
}, [currentPageIndex]);

  return (
    <>
      {isError && <div>Error loading list</div>}
      {isLoading && (
        <div className="loader">
          <div className="loader__item"></div>
        </div>
      )}
      {data && (
        <section className="page__genre genre">
          <div className="genre__container">
            <h2 className="genre__title">{list}</h2>
            <ul className="genre__wrapper list-genre">
              {currentPageMovies.length > 0 &&
                currentPageMovies.map((item) => (
                  <ItemList key={item.id} item={item} />
                ))}

              <li className="genre__btns slider-controls">
                {isFetching ? (
                  <div className="loader">
                    <div className="loader__item"></div>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      className="slider-controls__arrow slider-controls__arrow--left -icon-slider-arrow"
                      aria-label="button back"
                      onClick={handlePrevious}
                      disabled={currentPageIndex === 0}
                    ></button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageClick(index)}
                        className={
                          index === currentPageIndex
                            ? "slider-controls__arrow slider-controls__arrow--active"
                            : "slider-controls__arrow"
                        }
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      type="button"
                      className="slider-controls__arrow slider-controls__arrow--right -icon-slider-arrow"
                      aria-label="button forward"
                      onClick={handleNext}
                      disabled={
                        isFetching ||
                        (!hasNextPage && currentPageIndex + 1 === totalPages)
                      }
                    ></button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
export default List;
