import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        id
        username
        email
        token
        createdAt
    }
}
`;


export const CREATE_ANNOTATION = gql`
    mutation($book: String!, $chapter: String!, $verse: String!, $body: String!) {
        createAnnotation(book: $book, chapter: $chapter, verse: $verse, body: $body) {
            id
            book
            chapter
            verse
            username
            body
        }
    }
`;

export const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id
            email
            username
            createdAt
            token
        }
    }
`;