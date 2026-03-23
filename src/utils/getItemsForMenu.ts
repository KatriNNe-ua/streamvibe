import type { RouteObject } from "react-router";

type List = {
  path: string;
  label: string;
};

export function getItemsForMenu(
  routesList: RouteObject[],
  basePath: string,
): List[] {
  const resList: List[] = [];
  routesList.forEach((route: RouteObject) => {
	if (route?.handle?.label) {
	  resList.push({
		path: route.index ? basePath : basePath + route.path,
		label: route.handle.label,
	  });
	}
	if (route.children) {
	  resList.push(
		...getItemsForMenu(
		  route.children,
		  basePath ? basePath + (route.path ?? "") : (route.path ?? ""),
		),
	  );
	}
  });
  return resList;
}
