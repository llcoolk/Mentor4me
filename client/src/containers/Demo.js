import React, { Component } from "react";
import "./about.css";

class Demo extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="25000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="6th slide"
            />
            <div className="carousel-caption-6 py-20">
              <h1 className="caption-6">
                <small style={{ color: "red" }}>Team Name:</small>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <strong>Make Coding Fun Again</strong> <br />
                <br />
                <small style={{ color: "red" }}>Project Name:</small>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span style={{ color: "#159899" }}>
                  Mentor
                  <span style={{ color: "#f7ce46" }}>4</span>
                  me
                </span>
                <br />
                <br />
                <br />
                <small style={{ color: "red" }}>Purpose:</small> &nbsp; &nbsp;
                &nbsp; To create an app that a user can look for
                <br />
                and make appointments with mentors of their choice <br />
                and mentors can review and update appointment requests;
                <br />
                an app that is easy to use and protects the privacy by allowing
                <br />
                only the authenticated users on pages with private user info.
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="7th slide"
            />
            <div className="carousel-caption-7 py-20">
              <h1 className="caption-7">
                <small style={{ color: "red" }}>Site map:</small>
                <br />
                <br /> Home
                <br />
                <br />
                &nbsp; &nbsp; &nbsp;- Find a mentor
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Mentors
                List
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Mentor
                Profile <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-
                Appointment Booking
                <br />
                <br />
                &nbsp; &nbsp; &nbsp;- About
                <br />
                <br />
                &nbsp; &nbsp; &nbsp;- Demo
                <br />
                <br />
                &nbsp; &nbsp; &nbsp;- User
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Mentor
                Dashboard
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;- Student Profile
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Student
                Dashboard
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Profile
                Setting
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; - User Profile
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="8th slide"
            />
            <div className="carousel-caption-8 py-20">
              <h1 className="caption-8">
                <small style={{ color: "red" }}>User Functions:</small>
                <br />
                <br />- User can signup, login, select a role of <br />
                mentor or student, and update personal profile
                <br />
                <br />
                <small style={{ color: "red" }}>Student Functions:</small>
                <br />
                <br />- View the mentors list with abbreviated profile, search
                by
                <br />
                first or last name, click to view detail profile
                <br />
                <br />- Make appointment with a mentor by entering date, time,
                and comment
                <br />
                <br />- View Dashboard which displays all appointments with
                mentor name, ability to send/
                <br />
                receive comments with the mentor, and see the appointment status
                (pending, accepted, rejected)
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="9th slide"
            />
            <div className="carousel-caption-9 py-20">
              <h1 className="caption-9">
                <small style={{ color: "red" }}>Mentor Functions:</small>
                <br />
                <br />- View mentor list with abbreviated profile,
                <br />
                search by first or last name, click to view detail <br />
                profile
                <br />
                <br />- View Dashboard which displays all appointments with
                <br />
                the student name, link to student’s profile, appointment
                <br />
                status, ability to accept or reject an appointment, and to{" "}
                <br />
                send/ receive comments with the student
                <br />
                <br />
                <small style={{ color: "red" }}>About & Demo features:</small>
                <br />
                <br /> - Carousel slides that promote the mentor4me app
                <br /> - Carousel slides that introduce the app, its
                functionalities, and the technologies used
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="10th slide"
            />
            <div className="carousel-caption-10 py-20">
              <h1 className="caption-10">
                <small style={{ color: "red" }}>Technologies used:</small>
                <br />
                <br />- HTML5/CSS3 &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/html.jpeg"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- JavaScript &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/js.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- MySQL &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/mssql.jpeg"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- Node, Express &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/node.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    className="tech"
                    src="/images/express.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- ReactJS &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/react.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- Github &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/git.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />- Heroku &nbsp;
                <span>
                  <img
                    className="tech"
                    src="/images/heroku.png"
                    height="50px"
                    alt=""
                  />
                </span>
                <br />
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

export default Demo;
