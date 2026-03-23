import type { ReactElement } from "react";
import HeroSection from "./components/HeroSection";
import DevicesSection from "./components/DevicesSection";
import FaqSection from "../components/faq/FaqSection";
import StartSection from "../components/StartSection";
import PlanSection from "../components/PlanSection";

import GenresSlider from "../components/slider/GenresSlider";
import { genres } from "../../data/genresData";

function HomePage(): ReactElement {
  const title = "Explore our wide variety of categories";
  const p =
    "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new";
  return (
    <>
      <HeroSection />
      <GenresSlider
        title={title}
        p={p}
        additionalClass="first"
        data={genres}
        count={5}
        id="categories"
      />
      <DevicesSection />
      <FaqSection />
      <div id="pricing">
        <PlanSection />
      </div>

      <StartSection />
    </>
  );
}

export default HomePage;
