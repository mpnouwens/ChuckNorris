import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";

const JOKECATEGORY_QUERY = gql`
  query LaunchQuery($categories: [String]!) {
    categoryjoke(categories: $categories) {
      categories
      value
      url
      id
      icon_url
      updated_at
      created_at
    }
  }
`;

export class JokeCategory extends Component {
  render() {
    let { categories } = this.props.match.params;
    return (
      <Fragment>
        <h1 className="display-4 my-3" style={{ textAlign: "center" }}>
          Category Joke
        </h1>
        <Query query={JOKECATEGORY_QUERY} variables={{ categories }}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <h4 style={{ textAlign: "center" }}>
                  <img
                    style={{ width: "50%" }}
                    src={require("../infinity.gif")}
                    alt="loading..."
                  />
                </h4>
              );
            if (error) console.log(error);
            const {
              value,
              updated_at,
              created_at,
              categories
            } = data.categoryjoke;

            return (
              <div
                className="card card-body mb-2"
                style={{
                  margin: "auto",
                  width: "80%"
                }}
              >
                <h3>{value}</h3>
                <span className="badge badge-primary" style={{ width: 100 }}>
                  {categories}
                </span>
                <hr />
                <h5>Joke Details</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    Year Created: {created_at}
                  </li>
                  <li className="list-group-item">
                    Year Updated: {updated_at}
                  </li>
                </ul>
                <hr />
                <Link
                  to="/"
                  className="btn btn-secondary"
                  style={{ width: 150 }}
                >
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default JokeCategory;
