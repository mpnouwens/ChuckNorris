import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.png";
import Categories from "./components/Categories";
import JokeCategory from "./components/JokeCategory";
import RandomJoke from "./components/RandomJoke";
import SearchJokes from "./components/SearchJokes";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "redux";

//Todo: Add proxy
const client = new ApolloClient({
  uri: "https://ihcxe.sse.codesandbox.io/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              alt="Chucky Norris"
              style={{ width: 150, display: "block", margin: "auto" }}
            />
          </div>
          <div className="row justify-content-center m-3">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card card-sm">
                <div className="card-body row no-gutters align-items-center">
                  <div className="col">
                    <input
                      placeholder="Search"
                      ref={input => this.props.setSearch(input)}
                      type="Search"
                      value={this.props.joke.search || ""}
                      className="form-control form-control-lg form-control-borderless"
                    />
                  </div>
                  <div className="col-auto">
                    <Link
                      to={`/searchjoke`}
                      className="btn btn-success"
                      style={{ width: 150, marginLeft: 10 }}
                    >
                      Search
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Route exact path="/" component={Categories} />
          <Route
            exact
            path="/categoryjoke/:categories"
            component={JokeCategory}
          />
          <Route exact path="/searchjoke" component={SearchJokes} />
          <Route exact path="/random" component={RandomJoke} /> <hr />
          <Link
            to={`/random`}
            className="btn btn-success"
            style={{ width: 150, marginLeft: 50, marginBottom: 10 }}
          >
            Random Joke
          </Link>
        </Router>
      </ApolloProvider>
    );
  }
}

const mapState = state => ({
  joke: state.joke
});

const mapDispatch = dispatch => ({
  setSearch: sch => dispatch.joke.search(sch)
});

export default connect(
  mapState,
  mapDispatch
)(App);
