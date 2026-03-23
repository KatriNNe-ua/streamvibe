import type { ReactElement } from "react";
import PlanSection from "../components/PlanSection";
import StartSection from "../components/StartSection";
import ComparePlans from "./components/ComparePlans";

function SubscriptionPage(): ReactElement {
  return (
    <>
      <div className="top"></div>
      <div id="plan">
        <PlanSection />
      </div>
      <ComparePlans />
      <StartSection />
    </>
  );
}

export default SubscriptionPage;
