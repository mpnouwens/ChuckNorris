import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";
import CategoryItem from "./CategoryItem";

const CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories
  }
`;

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3" style={{ textAlign: "center" }}>
          Categories
        </h1>
        <Query query={CATEGORIES_QUERY}>
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
            return (
              <div
                style={{
                  margin: "auto",
                  width: "85%"
                }}
              >
                {data.categories.map(cat => (
                  <CategoryItem key={cat} cat={cat} />
                ))}
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Categories;
