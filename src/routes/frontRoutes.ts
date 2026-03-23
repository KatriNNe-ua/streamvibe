export const frontRoutes = {
  pages: {
    home: "/",
    moviesShows: {
      base: "movies-shows",
      list: "list/:list",
      search: "search",
      item: "item/:id",
    },
    subscription: "subscription",
    support: "support",
  },
  navigator: {
    home: "/",
    moviesShows: {
      base: "/movies-shows",
      list: (list: string) => `/movies-shows/list/${list}`,
      search: "/movies-shows/search",
      item: (id: number | string) => `/movies-shows/item/${id}`,
    },
    subscription: "/subscription",
    support: "/support",
  },
};
