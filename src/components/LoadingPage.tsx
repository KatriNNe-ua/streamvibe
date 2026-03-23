import type { ReactElement } from "react";

function LoadingPage(): ReactElement {
  return (
    <div className="full">
      <div className="full__container">
        <img
          className="full__img"
          src="/images/home/hero/play.webp"
          alt="img"
        />
        <div className="full__loader"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
