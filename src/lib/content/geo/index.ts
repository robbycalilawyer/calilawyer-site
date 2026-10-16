export {
  CITY_INJURY_PAGES,
  CITY_LEMON_PAGES,
  COPY_PENDING,
  GEO_PAGES,
  attorneyPage,
  reviewsPage,
} from "./pages";
export type { GeoKind, GeoPage, GeoSection } from "./types";

import { GEO_PAGES } from "./pages";

export function geoPage(path: string) {
  return GEO_PAGES.find((page) => page.path === path);
}

export function geoPagesUnder(root: string) {
  return GEO_PAGES.filter((page) => page.path.startsWith(`/${root}/`));
}
