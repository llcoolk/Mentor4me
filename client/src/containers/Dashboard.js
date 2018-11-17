import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    comment: "",
    appointments: [],
    mentors: [],
    role: "",
    errors: {}
  };

  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
  };

  //shouldComponentUpdate = () => {};

  componentWillUpdate = (nextProps, nextState) => {
    //console.log("CWU:", this.state.appointments, nextState.appointments);
    if (this.state.appointments !== nextState.appointments) {
      setTimeout(() => {
        this.state.appointments.map(appt => this.getMentor(appt.mentorId));
      }, 1000);
    }
  };

  componentDidMount = () => {
    this.fetchAppts();
  };

  handleReply = (apptId, oldComment) => {
    const { first } = decode(localStorage.getItem("JWT"));

    Axios.put(`${API_URL}/appointment/${apptId}`, {
      comment: `
      ${first}: ${this.state.comment}-->${oldComment}
      `
    }).then(res => {
      if (res.data.updated) {
        this.fetchAppts();
        this.setState({ comment: "" });
      }
    });
  };

  fetchAppts = () => {
    const { userId, role } = decode(localStorage.getItem("JWT"));
    Axios.get(`${API_URL}/appointments/${userId}`).then(({ data: appts }) =>
      this.setState({ appointments: appts, role })
    );
  };

  getMentor = mentorId => {
    Axios.get(`${API_URL}/mentors/${mentorId}`).then(
      mentor => this.setState({ mentors: [...this.state.mentors, mentor.data] })
      //console.log("mentor", mentor.data.firstName)
    );
  };

  handleStatus = (apptId, status) => {
    //e.preventDefault();
    Axios.put(`${API_URL}/appointment/${apptId}`, {
      status
    }).then(res => {
      if (res.data.updated) {
        this.fetchAppts();
      }
    });
  };

  render() {
    let mentorName = [];
    if (this.state.mentors.length > 0) {
      for (let mentor in this.state.mentors) {
        this.state.appointments.map(appt => {
          if (appt.mentorId === this.state.mentors[mentor].mentorId) {
            mentorName.push(
              `${this.state.mentors[mentor].firstName} ${
                this.state.mentors[mentor].lastName
              }`
            );
          } else {
            return mentorName[0];
          }
        });

        //console.log("mentor", this.state.mentors[mentor].firstName);
      }
    }
    //console.log("MMM", mentorName);

    return (
      <div
        className="container text-center"
        style={{
          padding: 5,
          // minHeight: 900,
          marginTop: 58,
          backgroundColor: "rgb(230, 230, 230, .8)"
        }}
      >
        <span>
          <h2 className="text-dark pt-2">Dashboard </h2>
          <h6>newest appointment on top</h6>
        </span>

        <table className="table w-100 d-block d-md-table">
          <thead className="thead-dark">
            <tr>
              <th className="d-none d-md-table-cell" scope="col">
                #
              </th>
              <th scope="col">Date</th>
              <th
                className={`${this.state.role === "mentor" &&
                  "d-none"} d-md-table-cell`}
                scope="col"
              >
                Time
              </th>
              <th scope="col" className="d-none d-md-table-cell">
                {this.state.role === "mentor" ? "Student" : "Mentor"}
              </th>
              <th scope="col">Comments</th>
              <th scope="col">Status</th>
              {this.state.role === "mentor" && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.length > 0 ? (
              this.state.appointments.map((appt, k) => {
                return (
                  <tr key={k}>
                    <td className="d-none d-md-table-cell">{k + 1}</td>
                    <td>
                      {new Date(appt.date)
                        .toLocaleString()
                        .slice(0, 10)
                        .replace(",", " ")}
                      {this.state.role === "mentor" && (
                        <p className="d-block d-md-none">
                          {new Date(appt.date)
                            .toLocaleString()
                            .replace(/:\d{2}\s/, " ")
                            .slice(11, 20)}
                        </p>
                      )}
                    </td>
                    <td
                      className={`${this.state.role === "mentor" &&
                        "d-none"} d-md-table-cell`}
                    >
                      {new Date(appt.date)
                        .toLocaleString()
                        .replace(/:\d{2}\s/, " ")
                        .slice(11, 20)}
                    </td>
                    <td className="d-none d-md-table-cell">
                      {this.state.role === "mentor" ? (
                        <Link
                          to={`/student/${appt.studentId}`}
                          className="btn btn-link username"
                        >
                          {`${appt.User.first} ${appt.User.last}`}
                        </Link>
                      ) : (
                        `${mentorName[k]}`
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-info"
                        data-toggle="modal"
                        data-target={`#exampleModal${appt.apptId}`}
                      >
                        <i className="fas fa-comments" />
                      </button>

                      <div
                        className="modal fade"
                        id={`exampleModal${appt.apptId}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title username"
                                id="exampleModalLabel"
                              >
                                {appt.User.first} {appt.User.last}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body text-left">
                              {appt.comment
                                .split(/\r?-->/)
                                .map((comment, key) => (
                                  <p key={key}>{comment}</p>
                                ))}
                              <textarea
                                className="form-control"
                                onChange={e =>
                                  this.setState({ comment: e.target.value })
                                }
                                value={this.state.comment}
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                onClick={() =>
                                  this.handleReply(appt.apptId, appt.comment)
                                }
                                className="btn btn-info"
                              >
                                <span className="fa fa-send" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-info"
                                data-dismiss="modal"
                              >
                                <span className="fa fa-times" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{appt.status}</td>
                    {this.state.role === "mentor" && (
                      <td>
                        <button
                          className="btn btn-outline-info ml-1"
                          onClick={() =>
                            this.handleStatus(appt.apptId, "accepted")
                          }
                        >
                          <i className="far fa-check-circle" />
                        </button>
                        <button
                          className="btn btn-danger ml-1"
                          onClick={() =>
                            this.handleStatus(appt.apptId, "rejected")
                          }
                        >
                          <i className="far fa-times-circle" />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">
                  <div className="alert alert-warning">
                    There are currently no appointments.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
