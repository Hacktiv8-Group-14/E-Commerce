import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "./features/productSlice";
import savedReducer from "./features/savedSlice";
import userReducer from "./features/savedSlice";
import cartReducer from "./features/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    saved: savedReducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
