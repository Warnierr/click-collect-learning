const graphql = require('graphql')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = graphql

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'Hello Express';
          },
        },
      },
    }),
  });

  module.exports = schema