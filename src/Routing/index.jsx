import DetailPage from "../pages/User/DetailPage";
import Homepage from "../pages/User/HomePage";
import Login from "../pages/Login";
import Cart from "../pages/User/Cart";
import SavedPage from "../pages/User/SavedPage";
import RecapPage from "../pages/Admin/RecapPage";
import Dashboard from "../pages/Admin/Dashboard";
import StockUpdate from "../pages/Admin/StockUpdate";
import Error from "../pages/Error";

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
  {
    path: "*",
    element: Error,
  },
];

export default {
  routes,
};
