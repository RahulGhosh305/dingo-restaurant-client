import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuthHook';

const PrivateRoute = ({ children }) => {
    let {isLoggedIn} = useAuth();
    let location = useLocation();

    if (!isLoggedIn.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute;