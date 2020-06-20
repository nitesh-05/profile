import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faList,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const NavBar_menu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="">
          <Link to="/">Restaurant</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="fa3d">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/list" className="fa3d">
                <FontAwesomeIcon icon={faList} />
                List
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/create" className="fa3d">
                <FontAwesomeIcon icon={faPlus} />
                Create
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/search" className="fa3d">
                <FontAwesomeIcon icon={faSearch} />
                Search
              </Link>
            </Nav.Link>

            {localStorage.getItem("login") ? (
              <Nav.Link>
                <Link to="/logout" className="fa3d">
                  <FontAwesomeIcon icon={faUser} />
                  Logout
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link to="/login" className="fa3d">
                  <FontAwesomeIcon icon={faUser} />
                  Login
                </Link>
              </Nav.Link>
            )}

            {/* <Nav.Link href="">
              <Link to="/details">Details</Link>
            </Nav.Link> */}
            {/* <Nav.Link href="">
              <Link to="/update">Update</Link>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar_menu;
