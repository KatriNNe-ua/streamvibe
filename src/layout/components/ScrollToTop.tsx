import { useEffect, type ReactElement } from "react";
import { useLocation } from "react-router";

function ScrollToTop(): ReactElement {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return <></>;
}

export default ScrollToTop;
