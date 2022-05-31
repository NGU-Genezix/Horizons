import React, {useState, useEffect} from 'react'
import './App.css';
import Acceuil from './pages/acceuil.js';
import Aide from './pages/aide.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Budget from './pages/budget.js';
import DataUser from './pages/dataUser.js';
import UpdateUser from './pages/updateUser.js';
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
          <Route path="/budget" exact>
            <Budget />
          </Route>
          <Route path="/datauser" exact>
            <DataUser/>
          </Route>
          <Route path="/updateuser" exact>
            <UpdateUser/>
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
