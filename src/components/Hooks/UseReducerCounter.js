import React, { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>useReducer {count}</h1>

      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;
