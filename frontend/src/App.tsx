import React from 'react';
import logo from './logo.svg';
import {SignUp}  from'./components/signUp';
import {SignIn}  from'./components/signIn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route
        exact path="/sign_up"
        >
          <SignUp/>
        </Route>
        <Route
        exact path="/sign_in"
        >
          <SignIn/>
        </Route>
      </Switch>


    </Router>


    </>
  )
}

export default App;
