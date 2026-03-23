import type { ReactElement } from "react";
import type { FallbackProps } from "react-error-boundary";

function ErrorFallback({ resetErrorBoundary }: FallbackProps): ReactElement {
  return (
    <div className="full">
      <div className="full__container">
        <h1 className="full__title">
          Unexpected error — please refresh the page.
        </h1>
        <button className="full__btn button" onClick={resetErrorBoundary}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;