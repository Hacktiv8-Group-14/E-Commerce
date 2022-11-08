import { createSlice } from "@reduxjs/toolkit";

let dataStorage = localStorage.getItem("savedProducts");

const initialState = {
  // savedProducts = array isinya id product
  savedProducts: JSON.parse(dataStorage) || {},
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    //action.payload = {username, id product}
    addSavedProducts: (state, action) => {
      let isNotFirstUser = state.savedProducts[action.payload.username] ? true : false
      if(isNotFirstUser) {
        state.savedProducts[action.payload.username] = [...state.savedProducts[action.payload.username], action.payload.id]
      } else {
        state.savedProducts[action.payload.username] = [action.payload.id]
      }
      localStorage.setItem(
        "savedProducts",
        JSON.stringify(state.savedProducts)
      );
    },
    deleteSavedProducts: (state, action) => {
      const filter = state.savedProducts[action.payload.username].filter((id) => id !== action.payload.id);
      state.savedProducts[action.payload.username] = filter
      if(state.savedProducts[action.payload.username].length === 0) {
        delete state.savedProducts[action.payload.username]
      }
      localStorage.setItem("savedProducts", JSON.stringify(state.savedProducts));
    },
  },
});

export const { addSavedProducts, deleteSavedProducts } = savedSlice.actions;
export default savedSlice.reducer;
