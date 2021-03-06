import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
import { API_URL } from "../../backend_api";
import "./style.css";

class Header extends Component {
  state = {
    isAuth: false,
    token: null,
    avatarUrl: null
  };

  componentDidMount = () => {
    const jwt = localStorage.getItem("JWT");

    if (jwt) {
      const payload = decode(jwt);

      axios.get(`${API_URL}/users/${payload.userId}`).then(user => {
        this.setState({
          isAuth: true,
          token: jwt,
          avatarUrl: user.data.image
        });
      });
    }
  };

  logOut = () => {
    localStorage.removeItem("JWT");
    this.setState({ isAuth: false, token: false, avatarUrl: false });
  };

  render() {
    // const { brand } = this.props;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          window.location.pathname !== "/" ? "bg-dark" : "bg-transparent"
        }`}
      >
        <NavLink className="navbar-brand text-center ml-3" to="/">
          {/* {brand} */}
          <img
            height="35"
            className="rounded-circle mr-2"
            src="/images/logo1.png"
            alt=""
          />
          <span className="logotext">Mentor</span>
          <span>4</span>
          <span className="logotext">me</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link ml-2" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ml-2" to="/mentors">
                Find a mentor
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {localStorage.getItem("JWT") ? (
              <React.Fragment>
                <li className="nav-item ">
                  <NavLink className="nav-link ml-2" to="/demo">
                    Demo
                  </NavLink>
                </li>
                {/* {localStorage.getItem("JWT") ? ( */}
                {/* <React.Fragment> */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      height="35"
                      className="rounded-circle ml-2"
                      src={
                        this.state.avatarUrl
                          ? this.state.avatarUrl
                          : "/images/no-avatar.png"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <div className="dropdown-divider" />
                    <NavLink
                      to="/"
                      className="btn btn-outline-info ml-4"
                      onClick={() => this.logOut()}
                    >
                      Log Out
                    </NavLink>
                  </div>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="btn btn-outline-light mt-1 ml-2"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="btn btn-info mt-1 ml-2">
                    Sign Up
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
