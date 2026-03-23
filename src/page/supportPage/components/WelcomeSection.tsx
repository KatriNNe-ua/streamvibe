import type { ReactElement } from "react";
import FormSupport from "./Form";


function WelcomeSection(): ReactElement {
  return (
    <section className="page__welcome welcome">
      <div className="welcome__container">
        <div className="welcome__wrapper">
          <div className="welcome__header section-header">
            <h2 className="section-header__title section-header__title--big">
              Welcome to our support page!
            </h2>
            <div className="section-header__text">
              <p>
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>
          </div>
          <div className="welcome__img">
            <img src="/images/support/support2.webp" alt="image" />
          </div>
        </div>
        <FormSupport />
      </div>
    </section>
  );
}

export default WelcomeSection;
