import './App.css';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

export default function App() {

  const accessToken = {"username":"test", "password":"test123!"};
  const apiUrl = 'https://messaging-test.bixly.com'

  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Token ${accessToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  console.log(accessToken);

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
      
      // .get(`${apiUrl}/messages/`)
      
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  });
  

  return (
    <div className="App">
      <button onClick={() => {
        fetchData();
      }}
      >Fetch Data</button>
    </div>
  );
}


