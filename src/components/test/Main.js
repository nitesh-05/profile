import React, { useReducer } from "react";
import { storeContext } from "./AllContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child20 from "./Child20";

import NavBar from "./NavBar";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "show":
      return 1;
    case "hide":
      return 0;
    case "login":
      return localStorage.getItem("login");
    default:
      return state;
  }
};

function Main() {
  const [display, dispatch] = useReducer(reducer, initialState);
  return (
    <storeContext.Provider
      value={{ stateDisplay: display, stateDispatch: dispatch }}
    >
      <div>
        <h1>
          Main -- {display}
          {localStorage.getItem("login")}
        </h1>
        <Router>
          <NavBar />
          <Route path="/Child1">
            <Child1 />
          </Route>

          <Route
            path="/Child2"
            render={(props) => <Child2 {...props} />}
          ></Route>
          <Route path="/Child20">Child20</Route>

          <Route path="/Child3">
            <Child3 />
          </Route>
          <Route path="/Child4">
            <Child4 />
          </Route>
        </Router>
      </div>
    </storeContext.Provider>
  );
}

export default Main;
