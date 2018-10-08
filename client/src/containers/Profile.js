import React, { Component } from "react";
import Axios from "axios";
import ProfileForm from "../components/Forms/Profile";
import { API_URL } from "../backend_api";
import decode from "jwt-decode";

class Profile extends Component {
  state = {
    userId: null,
    first: "",
    last: "",
    imgUrl: "",
    email: "",
    role: "",
    password: "",
    password2: "",
    summary: "",
    bio: "",
    errors: {},
    success: ""
  };

  handleChange = e => {
    console.log("changed", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userId } = decode(localStorage.getItem("JWT"));

    const {
      first,
      last,
      imgUrl,
      email,
      password,
      password2,
      bio,
      summary
    } = this.state;

    const errors = this.validate({ email, password, password2 });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.put(`${API_URL}/users/${userId}`, {
        first,
        last,
        email,
        imgUrl,
        password,
        summary,
        bio
      }).then(user => {
        if (user.data.updated) {
          this.setState({ success: "Your changes has been saved" });
        } else {
          this.setState({
            errors: { ...this.state.errors, global: user.data.message }
          });
        }
        console.log("error", errors);
      });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Enter email";
    if (data.password !== data.password2)
      errors.password = "Password does not match";

    return errors;
  };

  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
  };

  componentDidMount = () => {
    const { userId } = decode(localStorage.getItem("JWT"));

    Axios.get(`${API_URL}/users/${userId}`).then(profile => {
      console.log("profile", profile);
      const { firstName, lastName, email, image, userId, role } = profile.data;
      this.setState({
        first: firstName,
        last: lastName,
        email,
        role,
        imgUrl: image,
        summary: profile.data.summary,
        bio: profile.data.bio,
        userId
      });
    });
  };

  render() {
    return (
      <div className="container text-dark py-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <ProfileForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              errors={this.state.errors}
              success={this.state.success}
              first={this.state.first}
              last={this.state.last}
              imgUrl={this.state.imgUrl}
              email={this.state.email}
              role={this.state.role}
              password={this.state.password}
              password2={this.state.password2}
              summary={this.state.summary}
              bio={this.state.bio}
              userId={this.state.userId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
