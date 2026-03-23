import { useEffect, useMemo, useState, type ReactElement } from "react";
import ItemList from "../components/ItemList";
import { useGetFilteredPaginatedInfiniteQuery } from "../../services/moviesShowsAPI";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";

function SearchPage(): ReactElement {
  const [userSearch, setUserSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [text, setText] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useGetFilteredPaginatedInfiniteQuery(
    {
      filter: {
        title: { includes: filter.toLowerCase().trim() },
      },
      limit: 5,
    },
    { skip: !filter },
  );
  const movies = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data],
  );
  function onSearch() {
    setFilter(userSearch);
    window.scrollTo(0, 0);
  }

  const isBottom = useScrollToBottom(200);

  useEffect(() => {
    if (isBottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isBottom, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filter]);

  useEffect(() => {
    if (!isLoading && filter.trim() !== "" && movies.length === 0) {
      setText("Sorry, we couldn't find any results for your search.");
    } else if (isLoading) {
      setText("");
    }
  }, [isLoading, setText, filter, movies]);

  let context;
  if (isLoading || isFetching)
    context = (
      <div className="loader">
        <div className="loader__item"></div>
      </div>
    );
  else if (data)
    context = (
      <>
        {filter.trim() !== "" &&
          movies.map((item) => <ItemList key={item.id} item={item} />)}

        {isFetchingNextPage && (
          <div className="loader">
            <div className="loader__item"></div>
          </div>
        )}
      </>
    );

  return (
    <>
      <div className="top"></div>
      <section className="search">
        <div className="search__container">
          <div className="search__form">
            <input
              className="form__input input search__input"
              placeholder="Search..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserSearch(e.target.value)
              }
              type="search"
            />
            <button className="search__btn button" onClick={onSearch}>
              Search
            </button>
          </div>
          <ul className="list-genre">{context}</ul>
          {!isLoading && !isFetching && filter.trim() !== "" && text && (
            <p className="search__text">{text}</p>
          )}
        </div>
      </section>
    </>
  );
}

export default SearchPage;
