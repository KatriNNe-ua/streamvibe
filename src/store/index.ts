import { configureStore } from "@reduxjs/toolkit";
import { planAPI } from "../services/planAPI";
import { dataAPI } from "../services/moviesShowsAPI";

const store = configureStore({
  reducer: {
    [planAPI.reducerPath]: planAPI.reducer,
    [dataAPI.reducerPath]: dataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(planAPI.middleware)
      .concat(dataAPI.middleware),
});

export default store;
