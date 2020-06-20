import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBar_menu from "./NavBar_menu";

const RestaurantList = () => {
  const [list, setList] = useState([]);

  const deleteData = (id) => {
    axios.delete("http://localhost:3333/restaurant/" + id).then((res) => {
      alert("Restaurant Deleted");
      getData();
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:3333/restaurant")
      .then((res) => {
        console.warn(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar_menu />

      <div
        className="container mt-3 p-3"
        style={{ boxShadow: "1px 1px 5px 2px grey", borderRadius: "10px" }}
      >
        <div className="row">
          <div className="col-sm-12">
            <h1>Restaurant Lists</h1>
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
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "left" }}>
                {list.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td align="center">
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                       
                      <span onClick={() => deleteData(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
