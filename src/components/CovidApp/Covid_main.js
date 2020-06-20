import React, { useState, useEffect } from "react";
import "./covid_style.css";
import axios from "axios";
import Covid_component from "./Covid_component";
import covid_Data from "./covid_Data";
function Covid_main() {
  const [covidData, setCovidData] = useState([]);

  //   fetching covid api

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res.data.statewise);
        setCovidData(res.data.statewise);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // fetching covid api ends

  const str = JSON.stringify(covidData);
  return (
    <>
      {/* <Covid_component covidData={covid_Data.statewise} /> */}
      <Covid_component covidData={covidData} />
      {/* <Covid_filter covidData={covidData} /> */}
    </>
  );
}

export default Covid_main;
