import React from "react";
import "./style.css";

const Card = ({ first, last, email, role, imgUrl, summary, bio, userId }) => (
  <div className="card mt-5">
    <h2
      className="card-title text-dark capitalize"
      style={{
        fontWeight: 700,
        paddingLeft: 30,
        paddingTop: 10
      }}
    >{`${first} ${last}`}</h2>
    <img
      className="mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no-avatar.png"}
      alt={`${first} ${last}`}
      height="300"
      width="300"
    />
    <div
      className="email text-center"
      style={{
        paddingTop: 10,
        paddingBottom: 5,
        color: "rgba(49, 205, 232, 1)"
      }}
    >
      <a href={`mailto:${email}`} rel="noopener noreferrer">
        <i className="fa fa-envelope"> {`${email}`}</i>
      </a>
    </div>
    <div
      className="card-body"
      style={{
        backgroundColor: "rgba(49, 205, 232, .4)"
        // backgroundColor: "#fff3cb"
      }}
    >
      <h3
        className="card-text p-2"
        style={{
          color: "hsl(0, 0%, 15%)",
          fontWeight: 500
        }}
      >
        {summary}
      </h3>
      <h4
        className="card-text px-2 "
        style={{
          color: "hsl(0, 0%, 45%)",
          paddingBottom: 35
        }}
      >
        {bio}
      </h4>
    </div>
  </div>
);

export default Card;
