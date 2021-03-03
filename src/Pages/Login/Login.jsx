import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

export default function Login () {
    const apiUrl = 'https://messaging-test.bixly.com'
    const fetchData = useCallback(async () => {
        try {
          const result = await axios({
            method: 'post',
            url: `${apiUrl}/api-token-auth/`,
            headers: {},
            data: {
              "username":"test", "password":"test123!"
            }
          })
          //see what's coming back
          console.log(result);
          //save token in local storage
          localStorage.setItem('token', result.data.token)
          const token = localStorage.getItem('token');
          console.log(token);
    
        } catch (err) {
          console.log(err);
        }
    });

    return (
        <div className="LoginPage">
            <h1>Login Page</h1>
            <button onClick={() => { fetchData() }}
            >Fetch Data</button>

        </div>
    )
}