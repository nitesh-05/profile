import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather_component from "./Weather_component";

function Weather_main() {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="container">
      <Weather_component posts={posts} len={posts.length} />
    </div>
  );
}
export default Weather_main;
