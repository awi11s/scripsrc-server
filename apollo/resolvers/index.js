import annotResolvers from "./annotations.js";
import userResolver from "./users.js";
import bookResolvers from "./books.js";

const resolvers =  {
    Query: {
        ...annotResolvers.Query,
        ...userResolver.Query,
        ...bookResolvers.Query
    },

    Mutation: {
        ...userResolver.Mutation,
        ...annotResolvers.Mutation
    }
}

export default resolvers;