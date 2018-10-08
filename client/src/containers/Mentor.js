import React, { Component } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import Axios from "axios";
import Card from "../components/Card";
import { API_URL } from "../backend_api";
import "./mentor.css";

class Mentor extends Component {
  state = {
    role: "student",
    mentor: {},
    Profile: {},
    isLoaded: false
  };

  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    } else {
      const { role } = decode(localStorage.getItem("JWT"));
      this.setState({ role });
    }
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/mentors/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ mentor: res.data });
    });
  };

  render() {
    const { mentor, role } = this.state;
    // const { role } = decode(localStorage.getItem("JWT"));
    console.log("role", role);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card
              role={mentor.role}
              userId={mentor.userId}
              first={mentor.firstName}
              last={mentor.lastName}
              imgUrl={mentor.image}
              email={mentor.email}
              summary={mentor.summary}
              bio={mentor.bio}
            />
            {/* <div className="col-md-12"> */}
            {role !== "mentor" && (
              <Link
                to={`/mentor/${this.props.match.params.id}/appt`}
                className="btn btn-info mt-2 mr-3"
              >
                Book Appointment
              </Link>
            )}
            {role !== "mentor" && (
              <Link to="/mentors" className="btn btn-outline-info mt-2 mr-3">
                Back
              </Link>
            )}
            {role !== "student" && (
              <Link to="/profile" className="btn btn-outline-info mt-2 mr-3">
                Back
              </Link>
            )}
            {role !== "student" && (
              <Link to="/dashboard" className="btn btn-info mr-3 mt-2">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Mentor;
