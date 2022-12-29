import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// The reducer is a standard function that will always receive two parameters:
// The old state + Dispatched Action
// It must then return a new state that will mostly be an object

// configureStore creates a store but also make merging multiple reducers into one easire
// It takes an object as a paramater
const store = configureStore({
  // counterSlice becomes our global reducer for counterSlice
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
