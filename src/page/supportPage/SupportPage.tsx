import type { ReactElement } from "react";
import StartSection from "../components/StartSection";
import FaqSection from "../components/faq/FaqSection";
import WelcomeSection from "./components/WelcomeSection";

function SupportPage(): ReactElement {
  return (
    <>
      <div className="top"></div>
	  <WelcomeSection/>
      <FaqSection />
      <StartSection />
    </>
  );
}

export default SupportPage;