import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="6000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/tech1.png"
              alt="1st slide"
            />
            <div className="carousel-caption-1 py-20">
              <h1 className="caption-1">
                It's a new week and there's always room to build a project that
                never existed before...
                <br /> Find a &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                &nbsp;!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech2.jpg"
              alt="2nd slide"
            />
            <div className="carousel-caption-2 py-20">
              <h1 className="caption-2">
                Stuck on your code and a coffee isn't cutting it...?
                <br /> Find a &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                &nbsp;!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech3.jpg"
              alt="3rd slide"
            />
            <div className="carousel-caption-3 py-20">
              <h1 className="caption-3">
                When you can't find the error and hours have gone by. Maybe it's
                time to get some assistance...
                <br /> Find a &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                &nbsp;!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech6.jpeg"
              alt="4th slide"
            />
            <div className="carousel-caption-4 py-20">
              <h1 className="caption-4">
                Getting started as a coder and need some help? <br />
                Find top notch tutors to get your career started in the tech
                space...
                <br /> Find a &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                &nbsp;!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech5.jpg"
              alt="5th slide"
            />
            <div className="carousel-caption-5 py-20">
              <h1 className="caption-5">
                Having trouble with your code? Keep calm and...
                <br /> Find a &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                &nbsp;!
              </h1>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default About;
