const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema
} = require("graphql");

// Random Type
const RandomJoke = new GraphQLObjectType({
  name: "RandomJoke",
  fields: () => ({
    created_at: { type: GraphQLString },
    icon_url: { type: GraphQLString },
    id: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    url: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

// Random Type
const CategoryJoke = new GraphQLObjectType({
  name: "CategoryJoke",
  fields: () => ({
    categories: { type: GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    icon_url: { type: GraphQLString },
    id: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    url: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

//Result inside Search Type
const ResultSearchType = new GraphQLObjectType({
  name: "ResultSearchType",
  fields: () => ({
    categories: { type: GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    icon_url: { type: GraphQLString },
    id: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    url: { type: GraphQLString },
    value: { type: GraphQLString }
  })
});

//Search Joke Type
const SearchJoke = new GraphQLObjectType({
  name: "SearchJoke",
  fields: () => ({
    total: { type: GraphQLInt },
    result: { type: GraphQLList(ResultSearchType) }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    categories: {
      description: "Gets all the categories.",
      type: new GraphQLList(GraphQLString),
      resolve(parent, args) {
        return axios
          .get(`https://api.chucknorris.io/jokes/categories`)
          .then(res => res.data);
      }
    },
    random: {
      description: "Gets a random joke.",
      type: RandomJoke,
      resolve(parent, args) {
        return axios
          .get(`https://api.chucknorris.io/jokes/random`)
          .then(res => res.data);
      }
    },
    categoryjoke: {
      description: "Gets a joke from a category.",
      type: CategoryJoke,
      args: {
        categories: { type: GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.chucknorris.io/jokes/random?category=${
              args.categories
            }`
          )
          .then(res => res.data);
      }
    },
    searchjoke: {
      description: "Search for jokes.",
      type: SearchJoke,
      args: {
        search: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.chucknorris.io/jokes/search?query=${args.search}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
