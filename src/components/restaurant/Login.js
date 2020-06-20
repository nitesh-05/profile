import React, { useState } from "react";
import axios from "axios";
import NavBar_menu from "./NavBar_menu";
import { Form, Row, Col, Button } from "react-bootstrap";

const Login = (props) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    let loginData = { name: name, password: password };
    console.warn(loginData);
    // fetch("http://localhost:3333/login?q=" + loginData.name).then((data) => {
    //   data.json().then((response) => {
    //     console.warn("response", response);
    //   });
    // });

    axios
      .get("http://localhost:3333/login?q=" + loginData.name)
      .then((response) => {
        console.warn("response", response.data);
        if (response.data.length > 0) {
          localStorage.setItem("login", JSON.stringify(response.data));
          console.warn(props.history.push("list"));
        } else {
          alert("Username and Password not match");
        }
      });
  };

  return (
    <div>
      <NavBar_menu />
      <div className="container">
        <div className="row m-2">
          <div
            className="col-sm-12 col-md-6 offset-md-3 p-3"
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 5px 2px grey",
            }}
          >
            <h1>Login</h1>

            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button onClick={() => login()}>Login</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
