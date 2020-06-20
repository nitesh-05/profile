import React from "react";

import profile_data from "./profile_data";
import { ProgressBar } from "react-bootstrap";

function ProfileMain() {
  return (
    <div className="container-fluid">
      <nav className="row navbar navbar-expand-md navbar-dark nav-style">
        <a style={{ fontSize: "2rem" }} className="navbar-brand" href="#about">
          NK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <div className="row">
        <div className="col-md-12" style={{ marginTop: "80px" }}>
          <h1 style={{ color: "#341f97" }}>Nitesh Kumar</h1>
          <center>
            <hr className="w-75 col-6" />
          </center>

          <h4>
            Hello, I am Nitesh. I design & develop website and I Love what I do.
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src="images/images.png" alt="profileImage" />
        </div>
        <div className="col-sm-12">
          <img
            src="images/flat.png"
            alt="profilePic"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#5f27cd",
          color: "#ffffff",
          height: "400px",
          alignItems: "center",
        }}
        id="about"
      >
        <center>
          <div className="col-md-8">
            <h2>Hi, I am Nitesh, nice to meat you.</h2>
            <p className="mt-5" style={{ fontSize: "1.2em" }}>
              Since beginning my journey as a designer nearly 3 years ago, I've
              done work for startups, corporate companies and collaborated with
              talented people to create digital products for both business and
              consumer use. I'm quietly confident, naturally curious, and
              perpetually working on improving my chops one design problem at a
              time.
            </p>
          </div>
        </center>
      </div>

      {/* myprofile  start*/}
      <div className="row">
        {profile_data.map((data, index) => {
          return (
            <div
              key={data.id}
              className="col-md-4 col-12"
              style={{ marginTop: "2px" }}
            >
              <div
                className="card border-primary pt-5"
                style={{ minHeight: "550px" }}
              >
                <i
                  className={data.icon}
                  style={{ fontSize: "48px", color: "#5f27cd" }}
                ></i>
                <div className="card-body">
                  <h4 className="card-title">{data.title}</h4>
                  <p className="card-text">{data.desc}</p>
                  <h5 style={{ color: "#5f27cd" }}>{data.todo}</h5>
                  <p>{data.list}</p>
                  <h5 style={{ color: "#5f27cd" }}>{data.tools}</h5>
                  {data.tools_list.map((tool_list, index) => {
                    return (
                      <div key={tool_list.id}>
                        {tool_list[0][1] ? (
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4">{tool_list[0]}</div>
                              <div className="col-md-8">
                                <ProgressBar
                                  animated
                                  now={tool_list[1]}
                                  // label={`${tool_list[1]}%`}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p>{tool_list}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* myprofile */}

      {/* projects */}
      <div className="row mt-2" id="project">
        <div className="col-12">
          <h3>My Recent Work</h3>
          <h4>
            Here are a few design projects I've worked on recently. Still on my
            way to do some exciting work.{" "}
          </h4>
          <div class="batman_contact">
            <img src="images/BatmanRunning.gif" alt="batman" />
          </div>
        </div>

        <div className="col-12 col-md-3 imgcontainer">
          <img
            src="images/covid19.png"
            alt="Corona"
            className="website img-responsive col-12 mt-2"
            style={{ borderRadius: "40px" }}
          />
          <div className="overlay">
            <div className="text">
              <a
                href="https://covid-worldwide.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-warning">Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 imgcontainer col-12">
          <img
            src="images/login.png"
            alt="restaurant"
            className="website img-responsive col-12 mt-2"
            style={{ borderRadius: "40px" }}
          />
          <div className="overlay">
            <div className="text">
              <a
                href="https://nitesh-restaurant.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-warning">Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 imgcontainer">
          <img
            src="images/weather.png"
            alt="Weather"
            className="website img-responsive col-12 mt-2"
            style={{ borderRadius: "40px" }}
          />
          <div className="overlay">
            <div className="text">
              <a
                href="https://nitesh-weatherapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-warning">Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 imgcontainer">
          <img
            src="images/blog.png"
            alt="Blog"
            className="weather img-responsive col-12 mt-2"
            style={{ borderRadius: "40px" }}
          />
          <div className="overlay">
            <div className="text">
              <a
                href="https://niteshgts05.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-warning">Visit Blog</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      {/* <div>
        <div
          class="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "#5f27cd", color: "#ffffff" }}
        >
          <div class="container">
            <h1 class="display-5">Area Of Interest</h1>
            <hr className="my-2" />
            <p class="lead">Web designing</p>
            <p class="lead">Web developing</p>
            <p class="lead">Artificial Intelligence</p>
            <p class="lead">Machine Learning</p>
            <p class="lead">Deep Learning</p>
            <p class="lead">Computer Vision</p>
            <a href="https://docs.google.com/document/d/1fM7u1moKa_onxhXzYjbrExla7WvuGgl0__3HS1XNPq8/edit?usp=sharing">
              Link to CV
            </a>
          </div>
        </div>
      </div> */}

      {/* contact */}
    </div>
  );
}
export default ProfileMain;
