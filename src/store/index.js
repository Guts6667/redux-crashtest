import { createStore } from "redux";

// The reducer is a standard function that will always receive two parameters:
// The old state + Dispatched Action
// It must then return a new state that will mostly be an object

const intialState = { counter: 0, showCounter: true };
const counterReducer = (state = intialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
      name: state.name,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
      name: state.name,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
      name: state.name,
    };
  }
  if (action.type === "toggle") {
    return {
      // The reducer always rewrite the values
      // If I don't setup a value for all of my entries
      // Then the one forgot will therefore be undefined
      // ALWAYS SET THE OTHER STATES WHEN WE WANT TO OVERWRITE A SPECIFIC STATE
      showCounter: !state.showCounter,
      counter: state.counter,
      name: state.name,
    };
  }

  return state;
};

// Here we put the function that is supposed to change the store as a parameter.
const store = createStore(counterReducer);

export default store;
const counterSubscriber = () => {
  // getState() = native function => allows to get the state.
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe is a native function that calls another function whenver the state changes.
store.subscribe(counterSubscriber);

// dispatch allows to send a command to the reducer.
