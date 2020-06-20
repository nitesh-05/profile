import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import NavBar_menu from "./NavBar_menu";

const RestaurantUpdate = (props) => {
  console.log(props.match.params.id);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [rating, setRating] = useState();
  const [showList, setShowList] = useState(false);

  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/restaurant/" + props.match.params.id)
      .then((res) => {
        // console.log(res.data);
        setName(res.data.name);
        setRating(res.data.rating);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const formUpdate = (e) => {
    e.preventDefault();
    let data = { name, email, rating, address };
    console.log({ data });

    axios
      .put("http://localhost:3333/restaurant/" + id, data)
      .then(
        (res) => console.log(res),
        // (window.location = "/list"),
        alert("Restaurant Updated")
      )
      .then(() => setShowList(true))
      .catch((err) => console.log(err));
  };

  if (showList) {
    return <Redirect to="/list" />;
  }

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
            <h1>Update Restaurant</h1>
            <Form onSubmit={formUpdate}>
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
                Update Restaurant
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantUpdate;
