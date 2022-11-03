import DetailPage from "../pages/user/DetailPage";
import Homepage from "../pages/user/HomePage";
import Login from "../pages/Login";
import Cart from "../pages/user/Cart";
import SavedPage from "../pages/user/SavedPage";
import RecapPage from "../pages/admin/RecapPage";
import Dashboard from "../pages/admin/Dashboard";
import StockUpdate from "../pages/admin/StockUpdate";

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
  {
    path: "/Dashboard",
    element: Dashboard,
  },
  {
    path: "/Stock-update",
    element: StockUpdate,
  },
  // {
  //   path: "/admin",
  //   element: Admin,
  // },
];

export default {
  routes,
};
