import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  // With useDispatch, we can automatically dispatch actions to our store.
  const dispatch = useDispatch();
  // useSelector allows to retrieve only the part of the store state I want.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler} className="counterBtn">
          Increment
        </button>
        <button onClick={increaseHandler} className="counterBtn">
          Increase by 10
        </button>
        <button onClick={decrementHandler} className="counterBtn">
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
