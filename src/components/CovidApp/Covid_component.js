import React, { useState } from "react";

function Covid_component({ covidData }) {
  const [search, setSearch] = useState("");
  let data = covidData.filter((s) => {
    return s.state.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  let trdata = data.map((s) => {
    return (
      <tr key={s.state}>
        <td>{s.state}</td>
        <td>{s.active}</td>
        <td>{s.confirmed}</td>
        <td>{s.recovered}</td>
        <td>{s.deaths}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12">
          <p style={{ fontSize: "1.5rem" }}>
            Current covid-19 cases state wise
          </p>
          <h4 className="covidheader">
            Search State Wise :  
            <input
              className="inputfield"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </h4>
          <div style={{ overflowX: "auto" }}>
            <table className="hoverTable">
              <thead>
                <tr>
                  <th>State/UT</th>
                  <th>Active</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                </tr>
              </thead>
              <tbody>{trdata}</tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-md-6">
          {/* <img
            src="images/india.gif"
            style={{ width: "100%", height: "100vh" }}
            alt="india map"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Covid_component;
