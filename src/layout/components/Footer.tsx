import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../routes/frontRoutes";
import { footerMenuLinks, socialLinks } from "../../data/socialData";
import { HashLink } from "react-router-hash-link";

const homeLinks = [
  { label: "Categories", to: `${frontRoutes.navigator.home}#categories` },
  { label: "Devices", to: `${frontRoutes.navigator.home}#devices`},
  { label: "Pricing", to:`${frontRoutes.navigator.home}#pricing` },
  { label: "FAQ", to:`${frontRoutes.navigator.home}#faq`  },
];
const moviesLinks = [
  {
    label: "Genres",
    to: `${frontRoutes.navigator.moviesShows.base}#genresM`,
  },
  {
    label: "Trending",
    to: `${frontRoutes.navigator.moviesShows.base}#trendingM`,
  },
  {
    label: "New Release",
    to: `${frontRoutes.navigator.moviesShows.base}#newM`,
  },
  {
    label: "Popular",
    to: `${frontRoutes.navigator.moviesShows.base}#popularM`,
  },
];
const showsLinks = [
  {
    label: "Genres",
    to: `${frontRoutes.navigator.moviesShows.base}#genresS`,
  },
  {
    label: "Trending",
    to: `${frontRoutes.navigator.moviesShows.base}#trendingS`,
  },
  {
    label: "New Release",
    to: `${frontRoutes.navigator.moviesShows.base}#newS`,
  },
  {
    label: "Popular",
    to: `${frontRoutes.navigator.moviesShows.base}#popularS`,
  },
];
const subscriptionLinks = [
  { label: "Plans", to: `${frontRoutes.navigator.subscription}#plan` },
  { label: "Features", to: `${frontRoutes.navigator.subscription}#features` },
];

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__column">
            <Link to={frontRoutes.navigator.home}>
              <h3 className="footer__title">Home</h3>
            </Link>

            <ul className="footer__list">
              {homeLinks.map((link) => (
                <li key={link.to}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="footer__link"
                    // scroll={scrollWithOffset}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <Link to={frontRoutes.navigator.moviesShows.base}>
              <h3 className="footer__title">Movies</h3>
            </Link>
            <ul className="footer__list">
              {moviesLinks.map((link) => (
                <li key={link.to}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="footer__link"
                    // scroll={scrollWithOffset}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <Link to={frontRoutes.navigator.moviesShows.base}>
              <h3 className="footer__title">Shows</h3>
            </Link>
            <ul className="footer__list">
              {showsLinks.map((link) => (
                <li key={link.to}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="footer__link"
                    // scroll={scrollWithOffset}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <Link to={frontRoutes.navigator.support}>
              <h3 className="footer__title">Support</h3>
            </Link>

            <ul className="footer__list">
              <li>
                <Link
                  to={frontRoutes.navigator.support}
                  className="footer__link"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <Link to={frontRoutes.navigator.subscription}>
              <h3 className="footer__title">Subscription</h3>
            </Link>

            <ul className="footer__list">
              {subscriptionLinks.map((link) => (
                <li key={link.to}>
                  <HashLink
                    smooth
                    to={link.to}
                    className="footer__link"
                    // scroll={scrollWithOffset}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Connect With Us</h3>
            <ul className="footer__list footer__list--row">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    className={`footer__link footer__icon ${link.iconClass}`}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__text">
            <p>@2023 streamvib, All Rights Reserved</p>
          </div>
          <ul className="footer__menu">
            {footerMenuLinks.map((item) => (
              <li key={item.id}>
                <a href={item.href} className={item.className}>
                 {item.label}
                </a>
              </li>
            ))}

          
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
