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
    // slight bug here where error message never shows
    async function handleSubmit(evt) {
        evt.preventDefault();
        //fix weird code here, save user's name
        try {
            const something = await usersAPI.login(credentials);
            setUser(getToken());
        } catch {
          setError('Log In Failed - Try Again');
        }
    }

    return (
        <div className="LoginPage">
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