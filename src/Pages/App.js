import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
//COMPONENTS
import Login from '../Pages/Login/Login';
import LoggedIn from '../Pages/LoggedIn/LoggedIn';

export default function App() {
  

  

  
  

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


