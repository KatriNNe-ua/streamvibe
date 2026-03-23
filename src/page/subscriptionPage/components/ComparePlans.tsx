import type { ReactElement } from "react";
import { useGetPlansQuery } from "../../../services/planAPI";
import Table from "./Table";
import PlanCards from "./PlanCards";
import { useMediaQuery } from "react-responsive";


function ComparePlans(): ReactElement {
  const { data, error, isLoading } = useGetPlansQuery();
   const isMobile = useMediaQuery({ maxWidth: 767.98 });

  let content;
  if (error) content = <div>Error</div>;
  else if (isLoading)
    content = (
      <div className="loader">
        <div className="loader__item"></div>
      </div>
    );
  else if (data)
    content = content = (
      <>{isMobile ? <PlanCards plans={data} /> : <Table plans={data} />}</>
    );

  return (
    <section className="page__compare compare" id="features">
      <div className="compare__container" >
        <div className="compare__section-header section-header">
          <h2 className="section-header__title">
            Compare our plans and find the right one for you
          </h2>
          <div className="section-header__text">
            <p>
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that's right for you.
            </p>
          </div>
        </div>
        {content}
      </div>
    </section>
  );
}

export default ComparePlans;
