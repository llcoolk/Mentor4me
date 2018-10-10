import React from "react";
import { Link } from "react-router-dom";

const SignIn = props => (
  <form>
    {/* {!!props.errors.global && (
      <div className="alert alert-danger">{props.errors.global}</div>
    )} */}
    <div className="form-group">
      <h2 className="text-center mt-4">Login To Your Account</h2>
      <p className="text-center">
        <strong>Not a member yet?</strong>
        <Link to="/register"> Sign up for free!</Link>
      </p>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control mt-2"
        placeholder="example@example.com"
        onChange={props.onChange}
        value={props.email}
      />
      {props.errors.email && (
        <small className="text-danger">{props.errors.email}</small>
      )}
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="form-control mt-2"
        onChange={props.onChange}
        value={props.password}
      />
      {props.errors.password && (
        <small className="text-danger">{props.errors.password}</small>
      )}
    </div>
    <button onClick={props.onSubmit} className="btn btn-info mt-3">
      Login
    </button>
  </form>
);

export default SignIn;
