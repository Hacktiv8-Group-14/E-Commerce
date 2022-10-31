import DetailPage from "../pages/user/DetailPage";
import Homepage from "../pages/user/HomePage";
import Login from "../pages/Login";
import Payment from "../pages/user/Payment";
import Cart from "../pages/user/Cart";
import SavedPage from "../pages/user/SavedPage";
import Admin from "../pages/admin";

export const routes = [
  {
    path: "/",
    element: Homepage,
  },
  {
    path: "/Detail/:id/:title",
    element: DetailPage,
  },
  {
    path: "/Login",
    element: Login,
  },
  {
    path: "/Payment",
    element: Payment,
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
    path: "/admin",
    element: Admin,
  },
];

export default {
  routes,
};