// import React, { useReducer } from 'react';

// const loginReducer = (state, action) => {
//     switch (action.type) {
//         case 'login': {
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: '',
//             }
//         }
//         case 'success': {
//             return {
//                 ...state,
//                 isLoggedIn: true,
//             }
//         }
//         case 'error': {
//             return {
//                 ...state,
//                 error: 'incorrect username and password',
//                 isLoading: false,
//                 username: '',
//                 password: '',
//             }
//         }
//     }
// }

// const InitState = {
//     username: '',
//     password: '',
//     isLoading: false,
//     error: '',
//     isLoggedIn: false,
// }

export const Login = () => {
    // const [state, dispatch] = useReducer(reducer, InitState);

    // const onSubmit = async e => {
    //     e.preventDefault();

    //     dispatch({ type: 'login' })

    //     try {
    //         dispatch({ type: 'success' })
    //     } catch {
    //         dispatch({ type: 'error' })
    //     }
    // }

    return (
        <div>
            <h1>login page</h1>
        </div>
    )
}
