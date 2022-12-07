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
import N_Acceuil from './pages/new_acc.js';
import Rech_Aide from './pages/rech_aide.js';
import Test from './pages/googleToken.js';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    let res = new API().get("get_user", true).then(function(result) {
        console.log("ça passe1")
        if (result[0] == 200) {
        console.log("ça passe")
        setAuthenticated(true)
      }

    })}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isAuthenticated ?
            <>
              <Route path="/" element={<N_Acceuil />}/>
              <Route path="/aide" element={<Aide />}/>
              <Route path="/budget" element={<Budget />}/>
              <Route path="/datauser" element={<DataUser />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/updateuser" element={<UpdateUser />}/>
              <Route path="/rech_aide" element={<Rech_Aide />}/>
              <Route render="/" element={<N_Acceuil/>}/>
            </>
            :
            <>
              <Route path="/" element={<N_Acceuil />}/>
              <Route path="/aide" element={<Aide />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/budget" element={<Login />}/>
              <Route path="/rech_aide" element={<Rech_Aide />}/>
              <Route render="/" element={<N_Acceuil/>}/>
              <Route render="/connect/google/:token" element={<Test/>}/>
            </>
          }
          
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
