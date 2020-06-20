import React, { useReducer } from "react";

const initialState = { firstCount: 0, secondCount: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.inc };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.dec };
    case "incrementTwo":
      return { ...state, secondCount: state.secondCount + 1 };
    case "decrementTwo":
      return { ...state, secondCount: state.secondCount - 1 };
    case "reset":
      return {
        ...state,
        firstCount: initialState.firstCount,
        secondCount: initialState.secondCount,
      };
    default:
      return state;
  }
};

const UseReducerTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Use Reducer Two</h1>
      <h2>First Counter - {count.firstCount}</h2>
      <h2>Second Counter - {count.secondCount}</h2>
      <button onClick={() => dispatch({ type: "increment", inc: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", dec: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerTwo;
