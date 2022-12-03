import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  // Working with redux toolkit
  const counter = useSelector((state) => state.counterState.counter);
  const showCounter = useSelector((state) => state.counterState.showCounter);

  const dispatch = useDispatch();

  const incrementCounterHandler = () => dispatch(counterActions.increment(1));
  const incrementCounterByFiveHandler = () =>
    dispatch(counterActions.increment(5));
  const decrementCounterHandler = () => dispatch(counterActions.decrement(1));

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      {showCounter && (
        <div>
          <button onClick={incrementCounterHandler}>Increment</button>
          <button onClick={incrementCounterByFiveHandler}>
            Increment By 5
          </button>
          <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
