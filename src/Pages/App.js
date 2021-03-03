import './App.css';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
//COMPONENTS
import Login from '../Pages/Login/Login';
import LoggedIn from '../Pages/LoggedIn/LoggedIn';

export default function App() {

  // const accessToken = {"username":"test", "password":"test123!"};
  

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.Authorization = `Token ${accessToken}`;
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );
  // console.log(accessToken);

  

  function handleLogOut () {
    localStorage.removeItem('token')
  }
  

  return (
    <div className="App">
      
      {localStorage.getItem('token') ? <h1>logged in</h1> : null}
      <button onClick={() => { handleLogOut () }}
      >Log Out</button>
    </div>
  );
}


