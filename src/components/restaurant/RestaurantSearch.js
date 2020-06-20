import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBar_menu from "./NavBar_menu";

const RestaurantSearch = () => {
  const [searchData, setSearchData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [searchKey, setSearchKey] = useState();

  const search = (key) => {
    setSearchKey(key);
    console.warn(key);
    axios
      .get("http://localhost:3333/restaurant?q=" + key)
      .then((res) => {
        console.log(res.data);
        if (res.data.length) {
          setSearchData(res.data);
          setNoData(false);
        } else {
          setNoData(true);
          setSearchData(null);
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const deleteData = (id) => {
    axios.delete("http://localhost:3333/restaurant/" + id).then((res) => {
      alert("Restaurant Deleted");
      search(searchKey);
    });
  };

  return (
    <div>
      <NavBar_menu />
      <div
        className="container mt-3 p-3"
        style={{ boxShadow: "1px 1px 5px 2px grey", borderRadius: "10px" }}
      >
        <div className="row">
          <div className="col-sm-12">
            <h1>Search Restaurant</h1>
            <Form.Group className="col-md-4 offset-md-4 col-sm-12">
              <Form.Control
                type="text"
                placeholder="Restaurant Name"
                onChange={(e) => search(e.target.value)}
              />
            </Form.Group>
            {searchData ? (
              <Table
                responsive="md"
                striped
                bordered
                hover
                size="sm"
                style={{ boxShadow: "1px 1px 5px 2px grey" }}
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "left" }}>
                  {searchData.map((searched) => (
                    <tr key={searched.id}>
                      <td>{searched.id}</td>
                      <td>{searched.name}</td>
                      <td>{searched.address}</td>
                      <td>{searched.email}</td>
                      <td>{searched.rating}</td>
                      <td align="center">
                        <Link to={"/update/" + searched.id}>
                          <FontAwesomeIcon icon={faEdit} color="orange" />
                        </Link>
                         
                        <span onClick={() => deleteData(searched.id)}>
                          <FontAwesomeIcon icon={faTrash} color="red" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              ""
            )}

            {noData ? <h3>No data Found</h3> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSearch;
