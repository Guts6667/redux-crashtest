import { configureStore, createSlice } from "@reduxjs/toolkit";

// The reducer is a standard function that will always receive two parameters:
// The old state + Dispatched Action
// It must then return a new state that will mostly be an object

const initialCounterState = { counter: 0, showCounter: true };

// createSlice allow to prepare a slice of a global state
// Then we can create different slices
const counterSlice = createSlice({
  name: "counter",
  //initialState is a part of redux/toolkit syntaxe
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // With redux/toolkit the state is automatically cloned.
      //Therefore, it's impossible to mutate the state by acciedent
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // The default redux/toolkit syntax requires to add payload to refere to the data passed
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: "authentification",
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

// configureStore creates a store but also make merging multiple reducers into one easire
// It takes an object as a paramater
const store = configureStore({
  // counterSlice becomes our global reducer for counterSlice
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
