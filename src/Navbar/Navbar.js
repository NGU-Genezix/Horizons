import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
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
                    <li className='items budget'><Link to="/aide">Budget</Link></li>
                    <li className='items'><input width="20%"></input></li>
                    <li className='items btn_connexion'><button><Link to="/aide">Connexion</Link></button></li>
                    <li className='items'><button><Link to="/aide">Inscription</Link></button></li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
        </nav>
    )
}