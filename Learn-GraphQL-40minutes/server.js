const express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const app = express();

//build construc a schema using graphql schema language
var schema = buildSchema(`
  type Query {
    hello:String
  }`);

//the root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return "Hello World!";
    },
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(5000, () => console.log("Server Running"));
