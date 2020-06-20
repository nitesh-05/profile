import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  const initialState = 0;
  const counter = (btnClick) => {
    switch (btnClick) {
      case "inc":
        return setCount(count + 1);
      case "dec":
        return setCount(count - 1);
      case "rec":
        return setCount(initialState);
      default:
        return count;
    }
  };
  return (
    <div>
      <h1>State Counter -- {count}</h1>

      <button onClick={() => counter("inc")}>Increment</button>
      <button onClick={() => counter("dec")}>Decrement</button>
      <button onClick={() => counter("rec")}>Reset</button>

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialState)}>Reset</button> */}
    </div>
  );
}

export default UseStateCounter;
