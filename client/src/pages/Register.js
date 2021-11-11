import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BUTTON_STYLES, FORM_STYLE, INPUT_STYLES, LINK_STYLES } from '../components/styles';



const REGISTER_USER = gql`
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




export const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const [addUser, { data, loading, error }] = useMutation(REGISTER_USER, {
        variables: values,
        errorPolicy: 'all'
    })

    if (data) return 'success';
    if (loading) return 'loading...'



    const onChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();

        try {
            const { data } = await addUser()
            console.log(data)
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <div>
            <button style={BUTTON_STYLES}>
                <Link 
                to="/" 
                className="link"
                style={LINK_STYLES}>main page</Link>
            </button>
            
            <form style={FORM_STYLE} onSubmit={onSubmit}>
                <input 
                    style={INPUT_STYLES}
                    placeholder='username'
                    label="username"
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={values.username}></input>
                <input 
                    style={INPUT_STYLES}
                    placeholder='email'
                    label="email"
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}></input>
                <input 
                    style={INPUT_STYLES}
                    placeholder="password"
                    label="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}></input>
                <input 
                    style={INPUT_STYLES}
                    placeholder="confirm password"
                    label="confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={onChange}
                    value={values.confirmPassword}></input>
                <button style={BUTTON_STYLES}>Register</button>
                
            </form>
            <ul>
            {error ? error.graphQLErrors.map(({ message }, i) => (
                <li key={i}>{message}</li>
            )) : null}
            </ul>
        </div>
    )
}
