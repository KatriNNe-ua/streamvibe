import { Suspense, useCallback, useEffect, useMemo, useState, type ReactElement } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import LoadingPage from "../components/LoadingPage";
import Popup from "../components/Popup";
import { PopupContext } from "./../context/PopupContext";
import useScrollbarPadding from "../hooks/useScrollbarPadding";

function MainLayout(): ReactElement {
  const [show, setShow] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  useScrollbarPadding(isOpenPopup);

  const toggle = useCallback(() => {
    setIsOpenPopup((prev) => !prev);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const contextValue = useMemo(
    () => ({
      isOpenPopup,
      toggle,
    }),
    [isOpenPopup, toggle],
  );

  return (
    <PopupContext.Provider value={contextValue}>
      <div className={`wrapper ${show ? "show" : ""}`}>
        <ScrollToTop />
        <Popup />
        <Header />
        <main className="main page">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingPage />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </PopupContext.Provider>
  );
}

export default MainLayout;
