import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import Menu from "./Menu";
import { Link } from "react-router";
import { frontRoutes } from "../../routes/frontRoutes";
import { PopupContext } from "../../context/PopupContext";

function Header(): ReactElement {
  const headerRef = useRef<HTMLElement | null>(null);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("Popup must be used within PopupContext.Provider");
  }

  const { toggle } = context;

  useEffect(() => {
    function scrollAction() {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle("header--scroll", window.scrollY > 0);
      }
    }

    window.addEventListener("scroll", scrollAction);

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpenMenu);
  }, [isOpenMenu]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        <Link to={frontRoutes.navigator.home} className="header__logo">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>

        <Menu setIsOpenMenu={setIsOpenMenu} />

        <div className="header__actions actions-header">
          <Link
            to={frontRoutes.navigator.moviesShows.search}
            className="actions-header__item -icon-search"
            aria-label="button search"
          ></Link>
          <button
            type="button"
            className="actions-header__item -icon-notifications"
            aria-label="button notifications"
            onClick={toggle}
          ></button>
          <button
            type="button"
            className="header__icon icon-menu"
            aria-label="button menu"
            onClick={() => {
              setIsOpenMenu((prev) => !prev);
            }}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
