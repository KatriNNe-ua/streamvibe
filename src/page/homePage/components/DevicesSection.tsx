import type { ReactElement } from "react";
import { deviceCards } from "../../../data/deviceData";
import { useInView } from "../../../hooks/useInView";
import ItemDevices from "./ItemDevices";

function DevicesSection(): ReactElement {

const ref = useInView();

  return (
    <section className="page__devices devices" id="devices">
      <div className="devices__container">
        <div className="devices__section-header section-header section-header--max-width">
          <h2 className="section-header__title">
            We Provide you streaming experience across various devices.
          </h2>
          <div className="section-header__text">
            <p>
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
        </div>

        <div ref={ref} className="devices__items">
          {deviceCards?.map((card) => (
           <ItemDevices card={card} key={card.id}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevicesSection;
