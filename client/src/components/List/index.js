import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const List = ({ userId, first, last, imgUrl, summary, bio }) => (
  <div className="list-group rounded mt-3 mb-3">
    <Link
      to={`/mentor/${userId}`}
      className="list-group-item list-group-item-action"
    >
      <div className="row m-0 p-0">
        <div className="col-md-4">
          <img
            className="rounded-circle d-block w-100"
            src={imgUrl ? imgUrl : "/images/no-avatar.png"}
            alt={`${first} ${last}`}
          />
        </div>
        <div className="list-body col-md-8">
          <h1
            className="list-name"
            style={{ fontWeight: 700, paddingTop: 10, paddingBottom: 20 }}
          >{`${first} ${last}`}</h1>
          <h3
            className="list-summary"
            style={{ fontWeight: 400, paddingBottom: 15, marginBottom: 10 }}
          >
            {summary}
          </h3>
          <h5 className="list-bio overflow-ellipsis">{bio}</h5>
          <span className="pull-right">
            <Link to={`/mentor/${userId}`} className="btn btn-info ml-3 mt-4">
              View Profile
            </Link>
          </span>
        </div>
      </div>
    </Link>
  </div>
);

export default List;
