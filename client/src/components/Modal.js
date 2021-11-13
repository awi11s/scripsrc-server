import React, { useContext } from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { 
    BUTTON_STYLES, 
    LINK_STYLES
} from '../style/styles';
import { AuthContext } from './context/authContext';
import { GET_ANNOTATION } from '../utils/queries';

const Annotation = ({ book, chapter, verse }) => {
    const { loading, error, data } = useQuery(GET_ANNOTATION, {
        variables: { book, chapter, verse }
    })

    if (loading) return <p>loading</p>;
    if (error) {
      return (
        <>
        <h2>error:</h2>
        <p>DB is inaccessable on mobile rn</p>
        <p>annotations will go here...</p>
        </>
      );
    }

    return (
        <>
        <h2>context annotations:</h2>
            {data.getAnnot.map(a => (
            <>
            <p key={a.username}>{a.body}</p>
            <hr style={{ borderTop: '5px solid #99764e'}} />
            </>
            ))}  
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

    const { user } = useContext(AuthContext)
    
    if(!open) return null;

    

        return ReactDom.createPortal(
          <>
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal modal-fade">
              {children}
              <Annotation book={book} chapter={chapter} verse={verse} />
              {user ? 
              <button style={BUTTON_STYLES}>
                <Link to="/annotations" style={LINK_STYLES}>
                  submit annotation
                </Link>
              </button>
              : 
              <button style={BUTTON_STYLES}>
                <Link to="/login" style={LINK_STYLES}>
                  login to add annotation
                </Link>
              </button>
              }
              
            </div>
          </>,
          document.getElementById("portal")
        );
}

export default Modal;
