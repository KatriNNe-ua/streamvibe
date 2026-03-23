import { createBrowserRouter, type RouteObject } from "react-router";
import { frontRoutes } from "./frontRoutes";
import { lazy } from "react";
import ErrorPage from "../page/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Page404 from "../page/Page404";


const Home = lazy(() => import("../page/homePage/HomePage"));
const MoviesShows = lazy(
  () => import("../page/moviesShowsPage/MoviesShowsPage"),
);
const ListPage = lazy(() => import("../page/listPage/ListGenrePage"));
const SearchPage = lazy(() => import("../page/searchPage/SearchPage"));
const OpenPage = lazy(() => import("../page/moviesShowsPage/OpenPage"));
const SupportPage = lazy(() => import("../page/supportPage/SupportPage"));
const SubscriptionPage = lazy(
  () => import("../page/subscriptionPage/SubscriptionPage"),
);


export type CustomHandle = {
  label?: string;
  back?: {
    link: string;
    name: string;
  };
};

type CustomRouteObject = RouteObject & {
  handle?: CustomHandle;
  children?: CustomRouteObject[];
};

export const routes: CustomRouteObject[] = [
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        handle: {
          label: "Home",
        },
      },
      {
        path: frontRoutes.pages.moviesShows.base,
        children: [
          {
            index: true,
            Component: MoviesShows,
            handle: {
              label: "Movies & Shows",
            },
          },
          {
            path: frontRoutes.pages.moviesShows.item,
            Component: OpenPage,
          },
          {
            path: frontRoutes.pages.moviesShows.list,
            Component: ListPage,
          },
          {
            path: frontRoutes.pages.moviesShows.search,
            Component: SearchPage,
          },
        ],
      },

      {
        path: frontRoutes.pages.support,
        Component: SupportPage,
        handle: {
          label: "Support",
        },
      },
      {
        path: frontRoutes.pages.subscription,
        Component: SubscriptionPage,
        handle: {
          label: "Subscriptions",
        },
      },
      {
        path: "*",
        Component: Page404,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
