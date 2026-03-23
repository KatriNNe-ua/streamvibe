import { type ReactElement } from "react";
import HeaderSectionSlider from "../moviesShowsPage/components/HeaderSectionSlider";
import List from "./List";
import StartSection from "../components/StartSection";

function ListGenrePage(): ReactElement {
  return (
    <>
      <HeaderSectionSlider />
      <List />
      <StartSection />
    </>
  );
}

export default ListGenrePage;
