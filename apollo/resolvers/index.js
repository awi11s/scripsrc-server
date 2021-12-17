import annotResolvers from "./annotations.js";
import userResolver from "./users.js";
import versesResolver from "./verses.js";

const resolvers =  {
    Query: {
        ...annotResolvers.Query,
        ...userResolver.Query,
        ...versesResolver.Query
    },

    Mutation: {
        ...userResolver.Mutation,
        ...annotResolvers.Mutation
    }
}

export default resolvers;