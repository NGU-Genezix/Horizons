import React, {useState, useEffect} from 'react'
import "./../styles/contact.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from '../components/AuthManager';
import { useHistory } from "react-router-dom";
// import API from './APIManager';
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
// import { Button } from '@mui/material';

export default function Contact() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        
        <div>
            <div className='main_div'>
                <img className="logo_2" src={logo}></img>
                <div className='faq'>
                    <a href='https://www.youtube.com/'>- F.A.Q</a>
                </div>
                <div className='a_propos'>
                    <a  href='https://www.youtube.com/'>- À Propos</a>
                </div>
            </div>
        </div>
    )
}