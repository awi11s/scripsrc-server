import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import resolvers from './apollo/resolvers/index.js';
import typeDefs from './apollo/typeDefs.js';

let MONGO;

if (process.env.NODE_ENV === "development") {
    MONGO = process.env.MONGODB;
}

MONGO = process.env.MONGO_URL;

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req }) 
});

mongoose
    .connect(MONGO, { useNewUrlParser: true })
    .then(() => {
        console.log('mongodb connected');
        return server.listen({port: 4000 })
    })
    .then((res) => {
    console.log(`server running at ${res.url}`);
});



