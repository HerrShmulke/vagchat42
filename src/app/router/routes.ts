import type { RouteRecordRaw } from "vue-router";
import { routePaths } from "../../shared/config/route/route-paths";
import { routeNames } from "../../shared/config/route/route-names";

export const routes: RouteRecordRaw[] = [
  {
    path: routePaths.home,
    name: routeNames.home,
    component: () => import('../../pages/home/ui/HomePage.vue')
  }
]