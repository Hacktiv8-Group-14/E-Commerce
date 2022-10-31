import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "./features/productSlice";
import savedReducer from "./features/savedSlice";
import userReducer from "./features/savedSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    saved: savedReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});