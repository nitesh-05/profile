import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./style_restaurant.css";
import Home from "./Home";
import RestaurantList from "./RestaurantList";
import RestaurantCreate from "./RestaurantCreate";
import RestaurantUpdate from "./RestaurantUpdate";
import RestaurantSearch from "./RestaurantSearch";
import Login from "./Login";
import Logout from "./Logout";
import Protected from "./Protected";
const Restaurant_main = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/list">
          <RestaurantList />
        </Route> */}
        {/* <Route path="/create">
          <RestaurantCreate />
        </Route> */}
        {/* <Route path="/search" component={RestaurantSearch} /> */}

        {/* <Route path="/details">
          <RestaurantDetails />
        </Route> */}
        {/* <Route
          path="/update/:id"
          render={(props) => <RestaurantUpdate {...props} />}
        ></Route> */}

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/login" render={(props) => <Login {...props} />} />

        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Protected exact path="/login" component={Home} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/list" component={RestaurantList} />

        <Protected exact path="/" component={Home} />
      </Switch>
      {/* <button onClick={() => props.clickBtn(0)}>Go Back</button> */}
    </Router>
  );
};

export default Restaurant_main;

// source: https://www.youtube.com/watch?v=AnL91lfd4t4&list=PL8p2I9GklV46FX2Uik_rVlbN_nSx0Wc43&index=12
