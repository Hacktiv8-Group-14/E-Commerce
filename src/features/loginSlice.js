import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    username: (state, action) => {
      state.username = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { loginAdmin } = loginSlice;
export default loginSlice.reducer;
