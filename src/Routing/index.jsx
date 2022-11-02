import DetailPage from "../pages/user/DetailPage";
import Homepage from "../pages/user/HomePage";
import Login from "../pages/Login";
import Cart from "../pages/user/Cart";
import SavedPage from "../pages/user/SavedPage";
import Admin from "../pages/admin";
import RecapPage from "../pages/RecapPage";

export const routes = [
  {
    path: "/",
    element: Homepage,
  },
  {
    path: "/Detail/:id",
    element: DetailPage,
  },
  {
    path: "/Login",
    element: Login,
  },
  {
    path: "/Cart",
    element: Cart,
  },
  {
    path: "/Save",
    element: SavedPage,
  },
  {
    path: "/Sales",
    element: RecapPage,
  },
  // {
  //   path: "/admin",
  //   element: Admin,
  // },
];

export default {
  routes,
};
