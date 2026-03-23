import { useEffect } from "react";


function useScrollbarPadding(isOpenPopup: boolean) {
  useEffect(() => {
    const padding =
      window.innerWidth - document.documentElement.clientWidth + "px";

    document.body.classList.toggle("open-popup", isOpenPopup);

    document.documentElement.style.setProperty(
      "--paddingRight",
      isOpenPopup ? padding : "0px",
    );
  }, [isOpenPopup]);
}

export default useScrollbarPadding;