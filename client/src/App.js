import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.png";
import Categories from "./components/Categories";
import JokeCategory from "./components/JokeCategory";
import RandomJoke from "./components/RandomJoke";
import { Link } from "react-router-dom";

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
          <Route exact path="/" component={Categories} />
          <Route
            exact
            path="/categoryjoke/:categories"
            component={JokeCategory}
          />
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

export default App;
