import { createSlice } from "@reduxjs/toolkit";

let dataStorage = localStorage.getItem("savedProducts");

const initialState = {
  savedProducts: JSON.parse(dataStorage) || [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addSavedProducts: (state, action) => {
      state.savedProducts = [...state.savedProducts, action.payload];
      localStorage.setItem(
        "savedProducts",
        JSON.stringify([...state.savedProducts])
      );
    },
    deleteSavedProducts: (state, action) => {
      const filter = state.savedProducts.filter(
        (item) => item.title !== action.payload.title
      );
      state.savedProducts = [...filter];
      localStorage.setItem("SavedProducts", JSON.stringify(filter));
    },
  },
});

export const { addSavedProducts, deleteSavedProducts } = savedSlice.actions;
export default savedSlice.reducer;
