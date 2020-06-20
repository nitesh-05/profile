import React, { useState, useContext } from "react";
import { storeContext } from "./AllContext";
function Child2(props) {
  const LoginContext = useContext(storeContext);
  console.log(props);
  const [name, setName] = useState();
  const clickHandler = () => {
    if (name === "ravi") {
      localStorage.setItem("login", JSON.stringify(name));
      console.warn(props.history.push("Child1"));
    } else {
      alert("enter correct name");
    }
  };
  return (
    <div>
      <h1>Child2-- {LoginContext.stateDisplay}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => clickHandler}>Login</button>
    </div>
  );
}

export default Child2;
