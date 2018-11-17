import React, { Component } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import Axios from "axios";
import Card from "../components/Card";
import { API_URL } from "../backend_api";

class Student extends Component {
  state = {
    student: {},
    Profile: {},
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/students/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ student: res.data });
    });
  };

  render() {
    const { student } = this.state;
    const { role } = decode(localStorage.getItem("JWT"));

    console.log("role", role);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card
              role={student.role}
              userId={student.userId}
              first={student.firstName}
              last={student.lastName}
              imgUrl={student.image}
              email={student.email}
              summary={student.summary}
              bio={student.bio}
            />
            {role !== "mentor" && (
              <Link
                to="/profile"
                className="btn btn-outline-info pull-right mt-2 ml-3"
              >
                Back
              </Link>
            )}
            <Link to="/dashboard" className="btn btn-info pull-right mt-2 ml-3">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
