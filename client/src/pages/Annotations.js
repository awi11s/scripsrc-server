import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { MainGraphic } from '../assets/MainGraphic';
import { CREATE_ANNOTATION } from '../utils/mutations';
import { BUTTON_STYLES, FORM_STYLE, INPUT_STYLES, LINK_STYLES } from '../style/styles';





export const Annotations = () => {

    const [values, setValues] = useState({
        book: '',
        chapter: '',
        verse: '',
        body: ''
    })


    const [submitAnnotation, { data, loading, error }] = useMutation(CREATE_ANNOTATION, {
        variables: values,
        errorPolicy: 'all'
    })

    if (data) {
        return (
            <>
            <h1>annotation has been submitted!</h1>
            <button style={BUTTON_STYLES}><Link style={LINK_STYLES} to="/">back to home</Link></button>
            </>
        )
    }
    if (loading) return 'loading...'



    const onChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(values)
        try {
            await submitAnnotation()
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <div>
            <MainGraphic />
            <h1>annotation submission</h1>
            <button style={BUTTON_STYLES}>
                <Link 
                to="/" 
                className="link"
                style={LINK_STYLES}>main page</Link>
            </button>
            
            <form style={FORM_STYLE} onSubmit={onSubmit}>
                <input 
                    style={INPUT_STYLES}
                    placeholder='book'
                    label="book"
                    type="text"
                    name="book"
                    onChange={onChange}
                    value={values.book}></input>

                <input 
                    style={INPUT_STYLES}
                    placeholder="chapter"
                    label="chapter"
                    type="text"
                    name="chapter"
                    onChange={onChange}
                    value={values.chapter}></input>
                <input 
                    style={INPUT_STYLES}
                    placeholder="verse"
                    label="verse"
                    type="text"
                    name="verse"
                    onChange={onChange}
                    value={values.verse}></input>
                <input 
                    style={INPUT_STYLES}
                    placeholder="annotation body"
                    label="annotation"
                    type="text"
                    name="body"
                    onChange={onChange}
                    value={values.body}></input>

                <button style={BUTTON_STYLES}>submit</button>
                <button style={BUTTON_STYLES}><Link style={LINK_STYLES} to="/">back to home</Link></button>
                
            </form>
            {error ? error.graphQLErrors.map(({ message }, i) => (
                <h2 key={i}>{message}</h2>
            )) : null}
        </div>
    )
}

// import React from 'react'

// export const Annotations = () => {
//     return (
//         <div>
//             <h1>submissions</h1>
//         </div>
//     )
// }
