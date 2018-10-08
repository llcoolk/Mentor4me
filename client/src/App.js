import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  About,
  Appointment,
  Dashboard,
  Home,
  Login,
  Mentors,
  Mentor,
  Profile,
  Register,
  Student
} from "./containers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header brand="Mentor4me" />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mentors" component={Mentors} />
          <Route exact path="/mentor/:id" component={Mentor} />
          <Route exact path="/mentor/:id/appt" component={Appointment} />
          <Route exact path="/student/:id" component={Student} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
