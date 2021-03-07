import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { getToken } from "../utilities/users-service";
import Login from "../Pages/Login/Login";
import LoggedIn from "../Pages/LoggedIn/LoggedIn";

export default function App() {
  const [user, setUser] = useState(getToken());
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {user ? (
        <Switch>
          <Route path="/inbox">
            <LoggedIn user={user} setUser={setUser} userName={userName} />
          </Route>
          <Redirect to="/inbox" />
        </Switch>
      ) : (
        <Login user={user} setUser={setUser} setUserName={setUserName} />
      )}
    </div>
  );
}
