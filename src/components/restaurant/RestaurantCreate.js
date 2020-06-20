import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import NavBar_menu from "./NavBar_menu";

const RestaurantCreate = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [rating, setRating] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, rating, address };
    setName("");
    setRating("");
    setEmail("");
    setAddress("");
    console.log({ data });

    axios
      .post("http://localhost:3333/restaurant", data)
      .then((res) => console.log(res), alert("Restaurant Added"))
      .catch((err) => console.log(err));
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
            <h1>Create Restaurant</h1>
            <Form onSubmit={formSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Restaurant Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={address}
                  placeholder="Restaurant Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Restaurant Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={rating}
                  placeholder="Restaurant Rating"
                  onChange={(e) => setRating(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Restaurant
              </Button>
            </Form>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default RestaurantCreate;
