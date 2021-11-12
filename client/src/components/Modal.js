import React from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { 
    BUTTON_STYLES, 
    LINK_STYLES,
    // MODAL_STYLE, 
    // OVERLAY_STYLES 
} from './styles';

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

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    return (
        <>
        <h2>context annotations:</h2>
        <ul>
            {data.getAnnot.map(a => <li key={a.username}>{a.body}</li>)}  
        </ul>
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
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal modal-fade">
              {children}
              <Annotation book={book} chapter={chapter} verse={verse} />
              <button style={BUTTON_STYLES}>
                <Link to="/annotations" style={LINK_STYLES}>
                  submit annotation
                </Link>
              </button>
            </div>
          </>,
          document.getElementById("portal")
        );
}

export default Modal;
