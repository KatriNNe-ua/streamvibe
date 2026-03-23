import { useState, type ReactElement } from "react";
import type { Plan } from "../../../data/plansDB";
import { featuresCard } from "../../../constants/features";

type Props = {
  plans: Plan[];
};

function PlanCards({ plans }: Props): ReactElement {
  const [indexPlan, setIndexPlan] = useState<number>(1);

  return (
    <div className="compare__cards">
      <div className="compare__btns switcher ">
        {plans.map((plan, index) => (
          <button
            key={plan.id}
            className={
              index == indexPlan
                ? "switcher__item switcher__item--active"
                : "switcher__item"
            }
            onClick={() => setIndexPlan(index)}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {plans.map(
        (plan, index) =>
          index === indexPlan && (
            <div className="compare__card">
              {featuresCard.map((feature, index) => (
                <div
                  className={
                    feature.label === "Content" || feature.label === "Devices"
                      ? "compare__inner compare__inner--span"
                      : "compare__inner"
                  }
                  key={index}
                >
                  <div className="compare__label">{feature.label}</div>
                  <div className="compare__value">
                
                    {feature.getValue(plan)}
                  </div>
                </div>
              ))}
            </div>
          ),
      )}

    </div>
  );
}

export default PlanCards;
