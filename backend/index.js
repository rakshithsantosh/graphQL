const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-def");
const { resolvers } = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

//resolvers are function that deal with data

server.listen().then(({ url }) => {
  console.log(`Your API is Running :) at ${url}`);
});
