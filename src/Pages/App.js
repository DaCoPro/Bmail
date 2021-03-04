import './App.css';
//External tools
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
//api utilities
import { getToken } from '../utilities/users-service';
//COMPONENTS
import Login from '../Pages/Login/Login';
import LoggedIn from '../Pages/LoggedIn/LoggedIn';

export default function App() {
  const [user, setUser] = useState(getToken());
  
  return (
    <div className="App">
      {user ?
        <Switch>
          <Route path="/inbox">
            <LoggedIn user={user} setUser={setUser} />
          </Route>
          <Redirect to="/inbox" />
        </Switch> 
        :
        <Login user={user} setUser={setUser} />
      }
        
      
      
    </div>
  );
}


