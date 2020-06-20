import React from "react";
import { UserContext, ChannelContext, CountContext } from "./UserContext";
import ComponentB from "./ComponentB";
import { useReducer } from "react";
import { useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ComponentA = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("Ravi");

  let msg = "Hello from usercontext";

  return (
    <div>
      <UserContext.Provider value={msg}>
        <ChannelContext.Provider
          value={{ nameState: name, setNameState: setName }}
        >
          <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
          >
            <h1>ComponentA</h1>
            <ComponentB />
          </CountContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
