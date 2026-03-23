import { useContext, useEffect, type ReactElement } from "react";
import { PopupContext } from "../context/PopupContext";

function Popup(): ReactElement | null {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("Popup must be used within PopupContext.Provider");
  }

  const { isOpenPopup, toggle } = context;

  useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (isOpenPopup) {
        const target = e.target as HTMLElement;
        if (
          target.closest(".popup__wrapper") &&
          !target.closest(".popup__body")
        ) {
          toggle();
        }
      }
    };

    document.addEventListener("click", closePopup);
    return () =>
      document.removeEventListener("click", closePopup);
  }, [isOpenPopup, toggle]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpenPopup && e.key === "Escape") {
        toggle();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpenPopup, toggle]);


  return (
    <div className="popup popup--fixed">
      <div className="popup__wrapper">
        <div className="popup__body">
          <button
            type="button"
            className="popup__close"
            aria-label="button close popup notifications"
            onClick={toggle}
          ></button>
          <div className="section-header">
            <h2 className="section-header__title">Notifications</h2>
          </div>
          <div className="popup__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              rerum suscipit fugit, reprehenderit aliquam numquam, nostrum, odit
              quam et cumque ab distinctio cupiditate itaque voluptatibus
              quibusdam officia tempora accusamus quisquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
