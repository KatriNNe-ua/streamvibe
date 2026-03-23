import type { ReactElement } from "react";
import type { DataDB } from "../../../data/dataDB";
import Aside from "./Aside";
import CastSlider from "./CastSlider";
import ReviewsSlider from "./ReviewsSlider";
import { useMediaQuery } from "react-responsive";
import Seasons from "./Seasons";

type Props = {
  item: DataDB;
};

function SectionInfo({ item }: Props): ReactElement {
  const isMobile = useMediaQuery({ maxWidth: 1199.98 });
  return (
    <section className="page__info info">
      <div className="info__container">
        <div className="info__content">
          {item.type === "show" && <Seasons item={item} />}
          <div className="info__description description">
            <h3 className="description__label">Description</h3>
            <div className="description__text">{item.description}</div>
          </div>
          {isMobile && <Aside item={item} />}
          <CastSlider item={item} />
          <ReviewsSlider item={item} />
        </div>
        {!isMobile && <Aside item={item} />}
      </div>
    </section>
  );
}

export default SectionInfo;
