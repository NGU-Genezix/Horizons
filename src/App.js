import React, {useState, useEffect} from 'react'
import './App.css';
import Acceuil from './pages/acceuil.js';
import Aide from './pages/aide.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Budget from './pages/budget.js';
import DataUser from './pages/dataUser.js';
import UpdateUser from './pages/updateUser.js';
import Mobile from './pages/mobile.js';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
import API from './components/APIManager';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    let res = new API().get("get_user", true).then(function(result) {
      if (result[1]!=null) {
        setAuthenticated(true)
      }

    })}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />}/>
          <Route path="/aide" element={<Aide />}/>
          <Route path="/mobile" element={<Mobile />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/budget" element={<Budget />}/>
          <Route path="/datauser" element={<DataUser />}/>
          <Route path="/updateuser" element={<UpdateUser />}/>
          <Route render="/" element={<Acceuil/>}/>

          
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
