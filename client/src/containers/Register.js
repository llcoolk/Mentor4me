import React, { Component } from "react";
import validator from "validator";
import Axios from "axios";
import SignUp from "../components/Forms/SignUp";
import { API_URL } from "../backend_api";

class Register extends Component {
  state = {
    first: "",
    last: "",
    role: "student",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  handleChange = e => {
    console.log("changed", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { first, last, role, email, password, password2 } = this.state;
    const errors = this.validate({ first, last, email, password, password2 });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/signup`, {
        first,
        last,
        role,
        email,
        password
      }).then(user => {
        if (user.status === 201) {
          this.props.history.push("/login");
        } else {
          this.setState({
            errors: { ...this.state.errors, global: user.data.message }
          });
          console.log("errors", user.data);
        }
        // this.setState({ email, password });
      });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.first) errors.first = "Enter your first name";
    if (!data.last) errors.last = "Enter your last name";
    if (!validator.isEmail(data.email)) errors.email = "Enter a valid email";
    if (!data.password) errors.password = "Enter password";
    if (data.password !== data.password2)
      errors.password = "Password does not match";

    return errors;
  };

  componentWillMount = () => {
    if (localStorage.getItem("JWT")) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <SignUp
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                first={this.state.first}
                last={this.state.last}
                role={this.state.role}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
