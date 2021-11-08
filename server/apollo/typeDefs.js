import { gql } from "graphql-tag";

const typeDefs = gql`
    type Annot {
        id: ID!
        book: String!
        chapter: Int!
        verse: Int!
        username: String!
        body: String!
        createdAt: String!
    }

    type Book {
        book: String!
        chapters: [Chapter]
    }


    type Chapter {
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
        getChapter(book: String!): Book
        getAnnot(verseId: ID!): Annot
        getAnnots: [Annot]
        getUsers: [User]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createAnnotation(
            book: String!,
            chapter: Int!,
            verse: Int!
            body: String!): Annot!
    }
`;

export default typeDefs;