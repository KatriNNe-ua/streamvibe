import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./scss/index.scss";
import App from './App.tsx'
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { Provider } from 'react-redux';
import store from './store/index.ts';

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
