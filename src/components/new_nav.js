import React, {useState, useEffect} from 'react'
import "./../styles/new_nav.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from '../components/AuthManager';
import { useNavigate } from "react-router-dom";
// import API from './APIManager';
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
// import { Button } from '@mui/material';

export default function N_Navbar() {
    let history = useNavigate();

    return (
        
        <div>
            <div className='main_nav'>
                <img className="n_logo" src={logo}></img>
                <button className='acceuil' onClick={() => history('/')}>Acceuil</button>
                <button className='aide' onClick={() => history('/rech_aide')}>Aides Sociales</button>
                <button className='n_budget' onClick={() => history('/budget')}>Budget</button>
                <button className='connexion' onClick={() => history('/login')}>Connexion</button>
                <button className='inscription' onClick={() => history('/register')}>Inscription</button>
            </div>
        </div>
    )
}