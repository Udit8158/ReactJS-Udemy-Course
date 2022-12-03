import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
  },
  reducers: {
    logIn(state) {
      state.authenticated = true;
    },
    logOut(state) {
      state.authenticated = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
