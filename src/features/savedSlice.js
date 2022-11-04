import { createSlice } from "@reduxjs/toolkit";

let dataStorage = localStorage.getItem("savedProducts");

const initialState = {
  // savedProducts = array isinya id product
  savedProducts: JSON.parse(dataStorage) || [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    //action.payload = id product
    addSavedProducts: (state, action) => {
      state.savedProducts = [...state.savedProducts, action.payload];
      localStorage.setItem(
        "savedProducts",
        JSON.stringify([...state.savedProducts])
      );
    },
    deleteSavedProducts: (state, action) => {
      const filter = state.savedProducts.filter((id) => id !== action.payload);
      state.savedProducts = [...filter];
      localStorage.removeItem("savedProducts", JSON.stringify(filter));
    },
  },
});

export const { addSavedProducts, deleteSavedProducts } = savedSlice.actions;
export default savedSlice.reducer;
