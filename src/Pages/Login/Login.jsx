import './Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useState, useEffect, useCallback } from 'react';
import * as usersAPI from '../../utilities/users-api';

export default function Login () {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        "username":"test",
        "password":"test123!"
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const result = await usersAPI.login(credentials);
          console.log(result)
          
        } catch {
          setError('Log In Failed - Try Again');
        }
    }

    return (
        <div className="LoginPage">
            {/* <h1>Login Page</h1>
            <button onClick={() => { usersAPI.login() }}
            >Fetch Data</button> */}
            <div>
                <div className="form-container" onSubmit={handleSubmit}>
                    <form autoComplete="off" >
                    <label>Username</label>
                    <input type="text" name="email" value={credentials.username} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </div>
    )
}