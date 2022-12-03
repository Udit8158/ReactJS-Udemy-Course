const redux = require("redux");

const counterReducer = (state, action) => {
  if (action.type === "incriment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decriment") {
    return {
      counter: state.counter - 1,
    };
  }
  return {
    counter: 0,
  };
};

// Create store
const store = redux.legacy_createStore(counterReducer);
console.log(store.getState()); // default => 0

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe
store.subscribe(counterSubscriber);

// Dispatch
store.dispatch({ type: "incriment" }); // now 1
store.dispatch({ type: "incriment" }); // now 2
store.dispatch({ type: "decriment" }); // now 1
