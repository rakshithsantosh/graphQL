# GraphQL

## GraphQL is a query language

graphQL exists as a layer between frontend and backend, it queries an API , not a database

### Query

handles everything related to fetching the data (get)

### Mutation

handles everything that is related to mutating the data (put , delete , post)

## Difference Between GQL and REST

GQL has only one endpoint (/graphql)

Overfetching and Underfetching is avoided using graphql

## DataTypes

- ID
- String
- Boolean
- Int
- Float

these are known as scaler or types which are primitive to graphql

type User{
id:ID!
name:String!
age:Int!
friends:[User]
}

we can nest other complex types to compose a new type

we have an ! mark means the data is not nullable (making the feild required)

## Schema

Every graphql api should have schema , its a schema that defines all that exists in GQL

## Querying using GQL

{
country(code:"US"){
code
phone
capital
currency
continent{
code
name
countries{
name
capital
}
}
}
}
