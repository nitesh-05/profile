import React, { useContext } from "react";
import { storeContext } from "./AllContext";

function Child1() {
  const StoreContext = useContext(storeContext);
  return (
    <div>
      <h1>Child1{StoreContext.stateDisplay}</h1>
      <button onClick={() => StoreContext.stateDispatch("show")}>Show</button>
      <button onClick={() => StoreContext.stateDispatch("hide")}>Hide</button>
    </div>
  );
}

export default Child1;
