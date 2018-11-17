import React, { Component } from "react";
import validator from "validator";
import Axios from "axios";
import SignIn from "../components/Forms/SignIn";
import { API_URL } from "../backend_api";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  refreshPage = () => {
    document.location.reload(true);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const errors = this.validate({ email, password });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/auth`, { email, password }).then(user => {
        if (user.data.success) {
          localStorage.setItem("JWT", user.data.token);
          this.props.history.push("/");
          this.refreshPage();
        } else {
          console.log("err", user.data.message);
          this.setState({
            errors: { ...this.state.errors, global: user.data.message }
          });
        }
        // console.log("user.data", user.data);
      });
    }
  };

  validate = data => {
    const errors = {};
    // console.log("password", data.password);
    if (!validator.isEmail(data.email)) errors.email = "Enter a valid email";
    if (!data.password) errors.password = "Enter password";
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
              <div className="bg-dark rounded p-5 m-5 text-white">
                <SignIn
                  email={this.state.email}
                  password={this.state.password}
                  errors={this.state.errors}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
