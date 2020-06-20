import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/Child1">Child1</Link>
      <Link to="/Child2">Child2</Link>
      <Link to="/Child3">Child3</Link>
      <Link to="/Child4">Child4</Link>
    </div>
  );
}

export default NavBar;
