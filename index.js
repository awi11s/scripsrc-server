import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resolvers from './apollo/resolvers/index.js';
import typeDefs from './apollo/typeDefs.js';
import { 
    ApolloServerPluginLandingPageLocalDefault, 
    ApolloServerPluginLandingPageProductionDefault 
} from 'apollo-server-core';

dotenv.config();

let MONGO;

if (process.env.NODE_ENV === "development") {

    MONGO = process.env.MONGODB;
    console.log("you are in development")

} else {
    MONGO = process.env.MONGO_URL;
}



const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [
        process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: "my-graph-id@my-graph-variant",
            footer: false,
        })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
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



