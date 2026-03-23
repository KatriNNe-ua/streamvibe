import { useState, type ReactElement } from "react";
import { useGetPlansQuery } from "../../services/planAPI";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../routes/frontRoutes";
import { useInView } from "../../hooks/useInView";

function PlanSection(): ReactElement {
  const [price, setPrice] = useState<string>("monthly");

  const { data, error, isLoading } = useGetPlansQuery();

  const ref = useInView();

  let content;
  if (error) content = <div>Error</div>;
  else if (isLoading)
    content = (
      <div className="loader">
        <div className="loader__item"></div>
      </div>
    );
  else if (data)
    content = data.map((item) => (
      <div className="plan__item item-plan" key={item.id}>
        <h3 className="item-plan__title">{`${item.name} Plan`}</h3>
        <div className="item-plan__text">
          <p>{item.description}</p>
        </div>
        <div className="item-plan__price">
          {price === "monthly" ? (
            <>
              <span className="price">{item.price.monthly}</span> / month
            </>
          ) : (
            <>
              <span className="price">{item.price.yearly}</span> / year
            </>
          )}
        </div>
        <div className="item-plan__buttons">
          <Link
            to={frontRoutes.navigator.subscription}
            className="item-plan__button button button--border"
          >
            Start Free Trial
          </Link>
          <Link
            to={frontRoutes.navigator.subscription}
            className="item-plan__button button "
          >
            Choose Plan
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="page__plan plan">
      <div className="plan__container">
        <div className="plan__header">
          <div className="plan__section-header section-header">
            <h2 className="section-header__title">
              Choose the plan that's right for you
            </h2>
            <div className="section-header__text">
              <p>
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>
          </div>
          <div className="plan__switcher switcher">
            <button
              className={
                price === "monthly"
                  ? "switcher__item switcher__item--active"
                  : "switcher__item"
              }
              type="button"
              onClick={() => setPrice("monthly")}
            >
              Monthly
            </button>
            <button
              className={
                price === "yearly"
                  ? "switcher__item switcher__item--active"
                  : "switcher__item"
              }
              type="button"
              onClick={() => setPrice("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div ref={ref} className="plan__body">
          {content}
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
