import { gql } from "graphql-tag";

const typeDefs = gql`
    type Annot {
        id: ID
        book: String
        chapter: String 
        verse: String
        username: String
        body: String
        createdAt: String
    }

    type Book {
        book: String
        chapters: [Chapter]
    }


    type Chapter {
        book: String!
        totalChaps: String!
        chapter: String!
        verses: [Verse]
   }
   
    type Verse {
        verse: String!
        text: String!
    }
        
    type User {
        id: ID!
        username: String!
        email: String!
        token: String!
        createdAt: String!
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }
 
    type Query {
        getVerses(book: String!, chapter: String!): [Chapter]
        getAnnot(book: String!, chapter: String!, verse: String!): [Annot]
        getAnnots: [Annot]
        getUsers: [User]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createAnnotation(
            book: String!,
            chapter: String!,
            verse: String!
            body: String!): Annot!
    }
`;

export default typeDefs;