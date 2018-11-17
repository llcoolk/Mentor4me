import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  componentDidMount = () => {
    document.querySelector("body").classList.add("home");
  };

  render() {
    return (
      <React.Fragment>
        <section className="homepage mt-15">
          <div className="home-image">
            <div className="home-text">
              <h1 className="title">
                FIND A Mentor
                <span style={{ color: "#f7ce46" }}>4</span>
                me
              </h1>
              <h2 className="subtitle">
                {/* We are so glad that you are here! The first step for you is to
                look for a mentor. */}
                Find your mentor and get the help you need to become a
                successful programmer!
              </h2>
              <Link className="btn btn-lg btn-info home" to="/mentors">
                Find a mentor
              </Link>
              <h2 className="paragraph">
                Mentor4me is an on-demand marketplace for top software
                engineers, developers, consultants, programmers, and tutors.
                Learn from expert mentors with team training & coaching
                experiences.
              </h2>
            </div>
          </div>
        </section>
        {/* ======= Dev Team Intro ===== */}
        <section className="about-us text-center mt-4">
          <div className="container">
            <h2
              className="bg-light devteam text-left m-0 p-1 ml-2 mr-2"
              // style={{ backgroundColor: "none" }}
            >
              Dev Team Members
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card-home home">
                  <img
                    className="w-100 p-4 rounded-circle"
                    src="/images/leen.jpg"
                    alt="Leen Kim"
                  />
                  <div className="card-body home m-3">
                    <h2 className="card-title-home m-2">Leen Kim</h2>
                    <p className="card-text-home">
                      <br /> ✝️ 🏌🏻‍♀️ ⛳️ 👩🏻‍🍳 💻 <br />I was born in S. Korea and
                      have been living in OC, CA since I was 14. I have my
                      educational background in Mechanical Engineering from USC
                      and have worked in the automotive industry for 10+ yrs
                      mainly as a business systems analyst and worked with all
                      phases of system develop-ment lifecycle. I put my career
                      on pause to raise our 3 sons who are now in their twenties
                      and am looking to pick up where I left off with an upgrade
                      in programming languages and new technologies. I'm glad I
                      chose FullStack web development because I can now create
                      and deploy an entire solution, frontend and backend! I'm
                      passionate about Jesus, golf, cooking, and now I'm also
                      passionate about coding!
                    </p>
                    <div className="social-media text-">
                      <a
                        href="mailto:leenkim@alumni.usc.edu"
                        className="card-link"
                      >
                        <i className="fa fa-envelope" />
                      </a>
                      <a
                        href="https://github.com/llcoolk"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/leen-kim"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                      <a
                        href="http://leen-kim.com"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-home home">
                  <img
                    className="w-100 p-4 rounded-circle"
                    src="/images/cody.jpeg"
                    alt="Cody Jacobs"
                  />
                  <div className="card-body home m-3">
                    <h2 className="card-title-home m-2">Cody Jacobs</h2>
                    <p className="card-text-home">
                      <br /> 🏒 🥅 🎼 🎶 🎧
                      <br />
                      My name is Cody Jacobs and I grew up and currently reside
                      in Akwesasne, NY. Before getting into coding I was mostly
                      involved in Music Production-Audio Engineering. After
                      taking a break from Music Production, I wanted to pursue
                      something that still involved computers and technology. I
                      was at Bethel Redding for a year and learned about their
                      School of Technology and signed up to become a web
                      developer. I love the versatility that come with coding.
                      You have to be able to adapt to challenges quickly and
                      efficiently and coding really gives you an incredible
                      platform to display creativity. Besides coding, I'm an
                      ice-hockey player and currenty playing in the Akwesasne
                      league.
                      <br />
                      <br />
                    </p>
                    <div className="social-media text-center">
                      <a
                        href="mailto:codyjacobs191@gmail.com"
                        className="card-link"
                      >
                        <i className="fa fa-envelope" />
                      </a>
                      <a
                        href="https://github.com/codered613"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/cody-jacobs"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-home home">
                  <img
                    className="w-100 rounded-circle p-4"
                    src="/images/dane.jpg"
                    alt="Dane Shambrook"
                  />
                  <div className="card-body home m-3">
                    <h2 className="card-title-home m-2">Dane Shambrook</h2>
                    <p className="card-text-home">
                      <br />
                      💑 🗺 ✈️ 🚌 ⛪️
                      <br />I was born and raised in Orange County, CA. I have
                      been working in the service industry for the past 10 years
                      since I was 17. I have traveled extensively and was living
                      with my wife in Uganda when I came back to the USA to
                      start a career that would allow me to travel and still
                      maintain a sense of freedom and stability. I love coding
                      because it allows you to bring an idea into something
                      tangible and there are no limits to what can be done.
                      There are many problems that are waiting for us to use
                      technology to find the solution to in this world and
                      that's why I love learning how to code. Currently, my wife
                      and I serve in the youth ministry at the church which my
                      father pastors.
                      <br />
                      <br />
                    </p>
                    <div className="social-media text-center">
                      <a href="mailto:daxisda1@gmail.com" className="card-link">
                        <i className="fa fa-envelope" />
                      </a>
                      <a
                        href="https://github.com/daxisda1"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dane-shambrook-656ba790/"
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
