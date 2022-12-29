import { createSlice } from "@reduxjs/toolkit";

// The reducer is a standard function that will always receive two parameters:
// The old state + Dispatched Action
// It must then return a new state that will mostly be an object

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
