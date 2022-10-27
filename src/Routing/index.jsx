import DetailPage from "../pages/user/DetailPage";
import Homepage from "../pages/user/HomePage";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    element: Homepage,
  },
  {
    path: "/Detail",
    element: DetailPage,
  },
  {
    path: "/Login",
    element: Login,
  },
];

export default {
  routes,
};
