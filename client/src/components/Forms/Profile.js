import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  return (
    <form>
      <div className="form-group mt-4">
        <h4 className="text-center mb-3">Edit your profile settings</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="form-group col-md-6 p-0">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              id="first"
              name="first"
              className="form-control"
              value={props.first}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group col-md-6 p-0">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              id="last"
              name="last"
              className="form-control"
              value={props.last}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="imgUrl">Profile Image</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          className="form-control"
          value={props.imgUrl}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="example@example.com"
          value={props.email}
          onChange={props.onChange}
        />
        {props.errors.email && (
          <small className="text-danger">{props.errors.email}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Reset Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={props.password}
          onChange={props.onChange}
        />
        {props.errors.password && (
          <small className="text-danger">{props.errors.password}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          className="form-control"
          value={props.password2}
          onChange={props.onChange}
          required
        />
        {props.errors.password && (
          <small className="text-danger">{props.errors.password}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="summary">Skillsets/Languages</label>
        <textarea
          id="summary"
          name="summary"
          className="form-control"
          value={props.summary}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio/Intro</label>
        <textarea
          id="bio"
          name="bio"
          className="form-control"
          value={props.bio}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-info" type="submit" onClick={props.onSubmit}>
          Save Changes
        </button>
        <Link
          to={`/${props.role}/${props.userId}`}
          className="btn btn-outline-info ml-3"
        >
          Profile preview
        </Link>
        {!!props.success && (
          <div className="alert alert-success mt-2">{props.success}</div>
        )}
        {!!props.errors.global && (
          <div className="alert alert-danger">{props.errors.global}</div>
        )}
      </div>
    </form>
  );
};

export default Profile;
