import React, {useState, useEffect} from 'react'
import './App.css';
import Acceuil from './pages/acceuil.js';
import Aide from './pages/aide.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>
          <Route path="/aide" exact>
            <Aide />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
