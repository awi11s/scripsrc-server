import React, { useState, useContext } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { MainGraphic } from '../assets/MainGraphic';
import { AuthContext } from '../components/context/authContext';
import { LOGIN_USER } from '../utils/mutations';
import { BUTTON_STYLES, FORM_STYLE, INPUT_STYLES, LINK_STYLES } from '../style/styles';


export const Login = () => {

    const context = useContext(AuthContext)

    const [values, setValues] = useState({
        username: '',
        password: ''
    })


    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
        variables: values,
        errorPolicy: 'all'
    })


    if (data) {
        return (
            <>
            <h1>welcome {data.login.username}</h1>
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
            const dat = await loginUser();
            context.login(dat);
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <div>
            <MainGraphic />
            <h1>login page</h1>
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
                    placeholder="password"
                    label="password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}></input>

                <button style={BUTTON_STYLES}>login</button>
                
            </form>
            {error ? error.graphQLErrors.map(({ message }, i) => (
                <h2 key={i}>{message}</h2>
            )) : null}
        </div>
    )
}
