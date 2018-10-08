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
              <h1 className="title">FIND A MENTOR-4-ME</h1>
              <h2 className="subtitle">
                We are so glad that you are here! The first step for you is to
                look for a mentor.
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
        <section className="about-us text-center" style={{ marginTop: 50 }}>
          <h2>Project Team Members</h2>
          <div className="container">
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
                      I was born in South Korea and have been living in Orange
                      County, CA since I was 13. I put my career in IT on pause
                      to raise my 3 sons. I have my educational background in
                      Mechanical Engineering and have worked for a major auto
                      importer as a Business Systems Analyst for 10 years and
                      now looking to pick up where I left off. Learning to be a
                      Full Stack Web developer turned out to be better than I
                      have ever expected! I'm passionate about Jesus, golf, and
                      cooking, and now I'm also passionate about coding!
                    </p>
                    {/* <div className="social-media text-center mb-3"> */}
                    <a
                      href="mailto:leenkim@alumni.usc.edu"
                      className="card-link"
                    >
                      <i className="fa fa-envelope-o" />
                    </a>
                    <a href="https://github.com/llcoolk" className="card-link">
                      <i className="fa fa-github" />
                    </a>
                    <a
                      href="www.linkedin.com/in/leen-kim"
                      className="card-link"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
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
                      I grew up and currently reside in Akwesasne, NY. Before
                      getting into coding I was mostly involved in Music
                      Production-Audio Engineering. After taking a break from
                      Music Production, I wanted to pursue something else that
                      still involved computers and technology. I signed up to
                      attend the Bethel Tech school to become a web developer
                      soon after. I love the versatility that come with coding.
                      You have to be able to adapt to challenges quickly and
                      efficiently and coding really gives you an incredible
                      platform to display creativity.
                    </p>
                    <a
                      href="mailto:codyjacobs191@gmail.com"
                      className="card-link"
                    >
                      <i className="fa fa-envelope-o" />
                    </a>
                    <a
                      href="https://github.com/codered613"
                      className="card-link"
                    >
                      <i className="fa fa-github" />
                    </a>
                    <a
                      href="www.linkedin.com/in/cody-jacobs"
                      className="card-link"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
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
                      I was born and raised in Orange County, CA. I have been
                      working in the service industry since I was 17. I have
                      traveled extensively and was living with my wife in Uganda
                      when I came back to the USA to start a career that would
                      allow me to travel and still maintain a sense of freedom
                      and stability. I love coding because it allows you to
                      bring an idea into something tangible and no limits to
                      what can be done. There are many problems this world faces
                      that are waiting for us to use tech to find the solution
                      to.
                    </p>
                    <a href="mailto:daxisda1@gmail.com" className="card-link">
                      <i className="fa fa-envelope-o" />
                    </a>
                    <a href="https://github.com/daxisda1" className="card-link">
                      <i className="fa fa-github" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dane-shambrook-656ba790/"
                      className="card-link"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
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
