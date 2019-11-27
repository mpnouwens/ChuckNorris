import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";
// import { Link } from "react-router-dom";
// import Moment from "react-moment";
import { connect } from "react-redux";

const SEARCHCATEGORY_QUERY = gql`
  query SearchJokeQuery($search: String!) {
    searchjoke(search: $search) {
      value
      url
      id
      icon_url
      updated_at
      created_at
    }
  }
`;

export class SearchJokeCategory extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3" style={{ textAlign: "center" }}>
          Category Joke
        </h1>
        <Query query={SEARCHCATEGORY_QUERY} variables={this.props.joke.search}>
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
            // const {
            //   value,
            //   updated_at,
            //   created_at,
            //   categories
            // } = data.categoryjoke;
            console.log(data);
            return <h1>test</h1>;
          }}
        </Query>
      </Fragment>
    );
  }
}

const mapState = state => ({
  joke: state.joke
});

const mapDispatch = dispatch => ({
  setSearch: sch => dispatch.user.search(sch)
});

export default connect(
  mapState,
  mapDispatch
)(SearchJokeCategory);
