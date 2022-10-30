import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productReducer from "./features/productSlice";
import savedReducer from "./features/savedSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    saved: savedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
