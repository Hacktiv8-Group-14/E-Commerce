import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "./features/productSlice";
import savedReducer from "./features/savedSlice";
import cartReducer from "./features/cartSlice";
import loginReducer from "./features/loginSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    saved: savedReducer,
    cart: cartReducer,
    login: loginReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
