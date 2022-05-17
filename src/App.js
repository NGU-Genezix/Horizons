import React, {useState, useEffect} from 'react'
import './App.css';
import Acceuil from './pages/acceuil.js';
import Aide from './pages/aide.js';
import Aidetwo from './pages/aidetwo.js';
import Aidethree from './pages/aidethree.js';
import Aidefour from './pages/aidefour.js';
import Aidefive from './pages/aidefive.js';
import Aidesix from './pages/aidesix.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Budget from './pages/budget.js';
import DataUser from './pages/dataUser.js';
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
          <Route path="/aide2" exact>
            <Aidetwo />
          </Route>
          <Route path="/aide3" exact>
            <Aidethree />
          </Route>
          <Route path="/aide4" exact>
            <Aidefour />
          </Route>
          <Route path="/aide5" exact>
            <Aidefive />
          </Route>
          <Route path="/aide6" exact>
            <Aidesix />
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
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
