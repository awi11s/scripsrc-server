import { gql, useQuery } from '@apollo/client'

const GET_ANNOTATION = gql`
    query annotation($book: String!, $chapter: String!) {
        getAnnot(book: $book, chapter: $chapter) {
            body
            verse
            username
        }
    }
`;

const Annotation = ({ book, chapter, verse }) => {

    const { loading, error, data } = useQuery(GET_ANNOTATION, {
        variables: { book, chapter, verse },
    });

    if (loading) return 'Loading...';
    if (error) return `error! ${error.message}`;
    return (
        <div>
            {data.getAnnot.map(ann => console.log(ann.verse))}
        </div>
    )
    

}

export default Annotation;
