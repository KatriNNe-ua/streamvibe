import { type ReactElement } from "react";
import { routes } from "../../routes";
import { NavLink } from "react-router";
import { getItemsForMenu } from "../../utils/getItemsForMenu";

type Props = {
  setIsOpenMenu: (value: boolean) => void;
};


function Menu({ setIsOpenMenu }: Props): ReactElement {
  const labelList = getItemsForMenu(routes, "");

  return (
    <div className="header__menu menu">
      <nav className="menu__body">
        <ul className="menu__list">
          {labelList.map((item, index) => (
            <li className="menu__item" key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--active" : "menu__link"
                }
                onClick={() => setIsOpenMenu(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
