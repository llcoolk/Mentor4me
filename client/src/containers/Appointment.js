import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";
import AppointmentForm from "../components/Forms/Appointment";

class Appointment extends Component {
  state = {
    data: {
      date: "",
      time: "",
      comment: "",
      mentorId: null,
      studentId: null
    },
    errors: {}
  };

  componentWillMount = () => {
    const { role } = decode(localStorage.getItem("JWT"));
    if (role === "mentor") {
      this.props.history.push("/mentors");
    }
  };

  componentDidMount = () => {
    const { userId } = decode(localStorage.getItem("JWT"));
    this.setState({
      data: {
        ...this.state.data,
        mentorId: this.props.match.params.id,
        studentId: userId
      }
    });
  };

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { first } = decode(localStorage.getItem("JWT"));

    const { date, time, comment, mentorId, studentId } = this.state.data;

    const newAppt = {
      date: `${date} ${time}:00`,
      time,
      comment: `${first}: ${comment}`,
      mentorId,
      studentId
    };

    const errors = this.validate({ date, time });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/appointments`, newAppt).then(({ data: appt }) => {
        if (appt.success) {
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            errors: { ...this.state.errors, global: appt.data.message }
          });
        }
      });
    }
  };

  validate = data => {
    const errors = {};

    const currentDate = new Date().getTime();
    const chosenDate = new Date(`${data.date} ${data.time}`).getTime();

    if (chosenDate <= currentDate + 24 * 60 * 60 * 1000) {
      errors.date = "Appointment must be booked at least 24 hrs prior";
    }

    console.log("date", chosenDate, currentDate + 24 * 60 * 60 * 1000);
    if (!data.date) errors.date = "Please choose a date";
    if (!data.time) errors.time = "Please choose a time and am/pm ";

    return errors;
  };

  render() {
    return (
      <div className="form-group py-5" style={{ marginTop: 20 }}>
        <div className="container">
          <div className="row" style={{ marginTop: 15 }}>
            <div className="col-md-6 mx-auto">
              <AppointmentForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                data={this.state.data}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
