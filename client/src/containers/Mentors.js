import React, { Component } from "react";
import Axios from "axios";
import List from "../components/List";
import { API_URL } from "../backend_api";

class Mentors extends Component {
  state = {
    mentors: [],
    Profiles: [],
    isLoaded: false,
    search: ""
  };

  componentDidMount = () => {
    document.querySelector("body").classList.remove("home");

    Axios.get(`${API_URL}/mentors`).then(res => {
      this.setState({ mentors: res.data });
    });
  };

  onSearch = () => {
    Axios.get(`${API_URL}/mentors?s=${this.state.search}`).then(res => {
      this.setState({ mentors: res.data });
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="col-md-6">
          <form className="navbar-form" role="search">
            <div className="input-group add-on">
              <input
                type="text"
                className="form-control mt-5 text-dark"
                style={{
                  backgroundColor: "rgba(0,0,0,.1)"
                }}
                placeholder="Search"
                name="srch-term"
                id="srch-term"
                value={this.state.search}
                onChange={e => {
                  this.setState({ search: e.target.value });
                  this.onSearch();
                }}
              />
              <div className="input-group-btn mt-5">
                <button className="btn btn-default" type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {this.state.mentors.map(mentor => (
          <div className="col-md-12" key={mentor.userId}>
            <List
              imgUrl={mentor.image}
              userId={mentor.userId}
              first={mentor.firstName}
              last={mentor.lastName}
              email={mentor.email}
              summary={mentor.summary}
              bio={mentor.bio}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Mentors;
