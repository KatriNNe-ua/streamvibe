import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { frontRoutes } from "../../../routes/frontRoutes";
import { faqData } from "../../../data/faqData";
import FaqItem from "./FaqItem";

function FaqSection(): ReactElement {
  const list = faqData;
  const half = Math.ceil(list.length / 2);

  return (
    <section className="page__faq faq" id="faq">
      <div className="faq__container">
        <div className="faq__header">
          <div className="faq__section-header section-header">
            <h2 className="section-header__title">
              Frequently Asked Questions
            </h2>
            <div className="section-header__text">
              <p>
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
          </div>
          <Link
            to={frontRoutes.navigator.support}
            className="faq__button button"
          >
            Ask a Question
          </Link>
        </div>
        <div className="faq__body">
          <div className="fag__column">
            {list?.map(
              (item, index) =>
                index < half && (
                  <FaqItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ),
            )}
          </div>
          <div className="fag__column">
            {faqData?.map(
              (item, index) =>
                index >= half && (
                  <FaqItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
