import React from 'react';
import logo from './logo.svg';
import {DeviseSign}  from'./components/devise';


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
    <Link to="/sign_in">ログイン</Link>
    <br/>
    <Link to="/sign_up">新規登録</Link>
      <Switch>

      <Route exact path={'/sign_up'} component={DeviseSign} />
      <Route exact path={'/sign_in'} component={DeviseSign} />
      </Switch>


    </Router>


    </>
  )
}

export default App;
