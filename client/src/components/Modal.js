import React from 'react'
import ReactDom from 'react-dom';
import { gql, useQuery } from '@apollo/client';
import { Button } from './styles';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    borderRadius: '7px',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const GET_ANNOTATION = gql`
    query annotation($book: String!, $chapter: String!, $verse: String!) {
        getAnnot(book: $book, chapter: $chapter, verse: $verse) {
            body
            username
        }
    }
`;

const Annotation = ({ book, chapter, verse }) => {
    const { loading, error, data } = useQuery(GET_ANNOTATION, {
        variables: { book, chapter, verse }
    })

    if (loading) return `Loading...`;
    if (error) return `${error.message}`;

    return (
        <>
        <h1>context annotations:</h1>
            {data.getAnnot.map(a => <p key={a.username}>{a.body}</p>)}
        </>
    )
}

const Modal = ({ 
        open, 
        children, 
        onClose,
        book,
        chapter,
        verse
     }) => {

    if(!open) return null;

        return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} onClick={onClose}/>
        <div style={MODAL_STYLE}>
            {children}
            <Annotation book={book} chapter={chapter} verse={verse}/>
            <Button>submit more context</Button>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;
