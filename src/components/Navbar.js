import React, {useState, useEffect} from 'react'
import "./../styles/Navbar.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
 
export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)
    const [searchTerm, setSearchTerm] = useState('')
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)
    const onBlur = () => {
        setTimeout(() => {
            setFocused(false)
         }, 100);
    }
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }
    
    let search_list;
    if (focused) {
        search_list =
        <div className='search_list' onFocus={onFocus}>
            {JSONDATA.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return <div className='search' onFocus={onFocus}><p><Link to="/budget">{val.first_name}</Link></p></div>
            })}
        </div>
    } else {
        search_list = ""
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className='liste'>
                    <img className="logo" src={logo}></img>
                    <li className='items aide'><Link to="/">Aides</Link></li>
                    <li className='items budget'><Link to="/budget">Budget</Link></li>
                    <li className='items'><input width="20%" type="text"
                    placeholder='Rechercher ...'
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}></input></li>
                    <li className='items btn_connexion'><button><Link to="/login">Connexion</Link></button></li>
                    <li className='items'><button><Link to="/register">Inscription</Link></button></li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
            {search_list}
        </nav>
    )
}