import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [redirect, setRedirect] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
        setRedirect(true);
    }

    return (
        !redirect
        ?
        <form onSubmit={onSubmit}>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)}/>
                    <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        : <Navigate to="/" />
    )
}

export default LoginPage
