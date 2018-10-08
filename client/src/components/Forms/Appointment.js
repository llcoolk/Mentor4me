import React from "react";

const Appointment = ({ onChange, onSubmit, data, errors }) => (
  <form>
    <div className="form-group">
      <h2 className="text-center">Create an Appointment</h2>
    </div>
    <div className="form-group">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        className={`form-control ${errors.date && "is-invalid"}`}
        value={data.date}
        onChange={onChange}
      />
      {errors.date && <small className="text-danger">{errors.date}</small>}
    </div>
    <div className="form-group">
      <label htmlFor="time">Time</label>
      <input
        type="time"
        id="time"
        name="time"
        className={`form-control ${errors.time && "is-invalid"}`}
        value={data.time}
        onChange={onChange}
      />
      {errors.time && <small className="text-danger">{errors.time}</small>}
    </div>
    <div className="form-group">
      <label htmlFor="time">Enter comment</label>
      <textarea
        id="comment"
        name="comment"
        className="form-control"
        value={data.comment}
        onChange={onChange}
      />
    </div>
    <button type="submit" className="btn btn-info mt-5" onClick={onSubmit}>
      Submit Appointment
    </button>
  </form>
);

export default Appointment;
