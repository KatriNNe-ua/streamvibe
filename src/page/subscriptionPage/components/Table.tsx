import { memo, type ReactElement } from "react";
import type { Plan } from "../../../data/plansDB";
import { features } from "../../../constants/features";



type Props = {
  plans:Plan[];
};


function Table({ plans }:Props): ReactElement {


 return (
    <table className="compare__table">

      <thead>
        <tr>
          <th className="compare__item compare__item--main">Features</th>

          {plans.map((plan) => (
            <th
              key={plan.id}
              className="compare__item compare__item--main"
            >
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {features.map((feature) => (
          <tr key={feature.label}>

            <td className="compare__item">
              {feature.label}
            </td>

            {plans.map((plan) => (
              <td key={plan.id} className="compare__item">
                {feature.getValue(plan)}
              </td>
            ))}

          </tr>
        ))}
      </tbody>

    </table>
  );
}


export default memo(Table);