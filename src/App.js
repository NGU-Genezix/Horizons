import React, {useState, useEffect} from 'react'
import './App.css';
import Acceuil from './pages/acceuil.js';
import Aide from './pages/aide.js';
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
