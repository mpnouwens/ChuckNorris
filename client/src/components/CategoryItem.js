import React from "react";
import { Link } from "react-router-dom";

function changeCaseFirstLetter(params) {
  if (typeof params === "string") {
    return params.charAt(0).toUpperCase() + params.slice(1);
  }
  return null;
}

export default function CategoryItem(props) {
  const categories = props.cat;
  return (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-6" style={{ width: "50%" }}>
          <h4>{changeCaseFirstLetter(categories)}</h4>
        </div>
        <div className="col-md-6" style={{ width: "50%" }}>
          <Link
            to={`/categoryjoke/${categories}`}
            className="btn btn-outline-primary"
            style={{ width: 150, float: "right" }}
          >
            View {categories}
          </Link>
        </div>
      </div>
    </div>
  );
}
