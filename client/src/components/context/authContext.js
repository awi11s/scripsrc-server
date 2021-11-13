import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
    user: null,
    login: (data) => {},
    register: (data) => {},
    logout: () => {}
})

function authReducer(state, action) {
    switch(action.type) {
        case 'LOGIN': 
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }

        default:
            return state;
}
}


function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    function login(userData) {
        localStorage.setItem('jwtToken', userData.data.login.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function register(userData) {
        localStorage.setItem('jwtToken', userData.data.register.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function logout() {
        localStorage.removeItem('jwtToken')
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <AuthContext.Provider value={{ user: state.user, login, register, logout }} {...props} />
    )
}

export {AuthContext, AuthProvider}
