import { gql } from "@apollo/client";

export const GET_ANNOTATION = gql`
    query annotation($book: String!, $chapter: String!, $verse: String!) {
        getAnnot(book: $book, chapter: $chapter, verse: $verse) {
            body
            username
        }
    }
`;