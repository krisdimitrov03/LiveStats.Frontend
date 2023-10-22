import React from 'react'
import { Navigate, redirect } from 'react-router-dom';

function Logout({ onLogout }) {
    const onLoad = () => {
        onLogout();
    }

    return <Navigate to="/" />
}

export default Logout
