import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../components/styles';

const Input = styled.input.attrs(props => ({
    type: props.type,
    size: '0.5em',
}))`
    border: 2px solid palevioletred;
    margin: 0.5em;
    padding: 0.5em;
`;

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

    const [addUser, { data, loading, error}] = useMutation(REGISTER_USER);

    if (loading) return 'adding user...';
    if (error) return `user registration failed: ${error.message}`;

    const onChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        addUser({ variables: values });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input 
                    label="username"
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={values.username}></Input>
                <Input 
                    label="email"
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}></Input>
                <Input 
                    label="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}></Input>
                <Input 
                    label="confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={onChange}
                    value={values.confirmPassword}></Input>
                <Button>Register</Button>
                
            </form>
        </div>
    )
}
