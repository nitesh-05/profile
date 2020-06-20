import React, { useState } from "react";

const Weather_component = ({ posts, len }) => {
  const [id, setId] = useState();

  const changeIdHandler = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const clickHandler = () => {
    let idData = JSON.stringify(posts[id - 1]);
    let idJson = JSON.parse(idData);
    document.getElementById("id").innerHTML = "Id :" + idJson.id;
    document.getElementById("title").innerHTML = "Title :" + idJson.title;
    document.getElementById("body").innerHTML = "Body :" + idJson.body;
  };

  return (
    <div>
      <h1>Select id 1 - 100 : {id}</h1>
      <input type="text" onChange={changeIdHandler} />

      <button onClick={clickHandler}>Check</button>
      {id <= len ? (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title" id="id"></h4>
            <p className="card-text" id="title"></p>
            <p className="card-text" id="body"></p>
          </div>
        </div>
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div className="card" key={post.id}>
                <div className="card-body">
                  <h4 className="card-title">Id : {post.id}</h4>
                  <p className="card-text">Title : {post.title}</p>
                  <p className="card-text">Body : {post.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Weather_component;
