import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { AuthContext } from '../components/context/authContext'

export const AuthRoute = () => {
    const { user } = useContext(AuthContext)

    return user ? <Navigate to="/" /> : <Outlet />;
}

export const PrivateRoute = () => {
    const { user } = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to="/" />;
}