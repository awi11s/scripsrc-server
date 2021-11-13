import { useMutation } from '@apollo/client';
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { MainGraphic } from '../assets/MainGraphic';
import { AuthContext } from '../components/context/authContext'
import { BUTTON_STYLES, FORM_STYLE, INPUT_STYLES, LINK_STYLES } from '../style/styles';
import { REGISTER_USER } from '../utils/mutations';







export const Register = () => {
    const context = useContext(AuthContext)
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

    if (data) {
        return (
            <>
            <h1>account has been created!</h1>
            <h2>welcome {data.register.username}</h2>
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

        try {
            const dat = await addUser()
            context.register(dat)
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <div>
            <MainGraphic />
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
            {error ? error.graphQLErrors.map(({ message }, i) => (
                <h2 key={i}>{message}</h2>
            )) : null}
        </div>
    )
}
