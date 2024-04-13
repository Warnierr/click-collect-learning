const graphql = require('graphql');
const product = require('../models/product');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
    GraphQLList
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello GraphQL';
      },
    },
    products : {
      type :
    }
  },
})

var schema = new GraphQLSchema({
    query: RootQuery
  });

  module.exports = schema