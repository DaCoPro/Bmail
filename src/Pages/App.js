import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
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

  

  
  

  return (
    <div className="App">
      {localStorage.getItem('token') ? 
        <>
          <LoggedIn />
        </>
        :
        <>
          <Login />
        </>}
      
      
    </div>
  );
}


