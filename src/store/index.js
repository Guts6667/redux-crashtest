import { configureStore, createSlice } from "@reduxjs/toolkit";

// The reducer is a standard function that will always receive two parameters:
// The old state + Dispatched Action
// It must then return a new state that will mostly be an object

const initialState = { counter: 0, showCounter: true };

// createSlice allow to prepare a slice of a global state
// Then we can create different slices
const counterSlice = createSlice({
  name: "counter",
  initialState,
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
// configureStore creates a store but also make merging multiple reducers into one easire
// It takes an object as a paramater
const store = configureStore({
  // counterSlice becomes our global reducer for counterSlice
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
