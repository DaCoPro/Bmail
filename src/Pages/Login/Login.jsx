import './Login.css';
import { getToken } from '../../utilities/users-service';
import { useState } from 'react';
import * as usersAPI from '../../utilities/users-api';

export default function Login ({ user, setUser }) {
    const [credentials, setCredentials] = useState({
        "username":"",
        "password":""
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }
    if(localStorage.getItem('token')) console.log('token')
    console.log(user)
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await usersAPI.login(credentials);
            setUser(getToken());
        //   console.log(result)
            // history.push('/inbox');
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
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
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