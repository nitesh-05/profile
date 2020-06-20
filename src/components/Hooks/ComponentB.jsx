import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, CountContext } from "./UserContext";

const ComponentB = () => {
  const userContext = useContext(UserContext);
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>
        ComponentB -- {userContext}--{countContext.countState}
      </h1>
      <ComponentC msg={userContext} />
    </div>
  );
};

export default ComponentB;
