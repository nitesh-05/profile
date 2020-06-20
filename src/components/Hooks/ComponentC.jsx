import React, { useContext } from "react";
import { ChannelContext } from "./UserContext";
import CounterDCounter from "./ComponentDCounter";

const ComponentC = () => {
  const channelContext = useContext(ChannelContext);

  return (
    <div>
      <h1>ComponentC -- {channelContext.nameState}</h1>
      {channelContext.nameState === "Ravi" ? (
        <button onClick={() => channelContext.setNameState("Nitest")}>
          Change to ravi
        </button>
      ) : (
        <button onClick={() => channelContext.setNameState("Ravi")}>
          Change to nitest
        </button>
      )}
      <CounterDCounter />
    </div>
  );
};

export default ComponentC;
