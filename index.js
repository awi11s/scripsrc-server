import { ApolloServer } from 'apollo-server';
// import { gql } from "graphql-tag";
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

import resolvers from './apollo/resolvers/index.js';
import typeDefs from './apollo/typeDefs.js';

// dotenv.config();

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req }) 
});

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('mongodb connected');
        return server.listen({port: 4000 })
    })
    .then((res) => {
    console.log(`server running at ${res.url}`);
});



