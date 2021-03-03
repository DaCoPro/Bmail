import './Login.css';
// import React, { useState, useEffect, useCallback } from 'react';
import * as usersAPI from '../../utilities/users-api';

export default function Login () {
    
    return (
        <div className="LoginPage">
            <h1>Login Page</h1>
            <button onClick={() => { usersAPI.login() }}
            >Fetch Data</button>

        </div>
    )
}