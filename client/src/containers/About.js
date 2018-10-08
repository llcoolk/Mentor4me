import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/tech1.png"
              alt="First slide"
            />
            <div className="carousel-caption-1 py-20">
              <h1 className="caption-1">
                It's a new week and there's always room to build a project that
                never existed before...
                <br /> Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption-2 py-20">
              <h1 className="caption-2">
                Stuck on your code and a coffee isn't cutting it...?
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech3.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption-3 py-20">
              <h1 className="caption-3">
                When you can't find the error and hours have gone by. Maybe it's
                time to get some assistance...
                <br /> Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech4.jpg"
              alt="Fourth slide"
            />
            <div className="carousel-caption-4 py-20">
              <h1 className="caption-4">
                You need the right tools to bring clarity to your project. We
                are here to connect you with mentors who will conquer it with
                you...
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech5.jpg"
              alt="Fifth slide"
            />
            <div className="carousel-caption-5 py-20">
              <h1 className="caption-5">
                Having trouble with your code? Keep calm and...
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default About;
