import React, {useState, useEffect} from 'react'
import "./../styles/Navbar.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from '../components/AuthManager';
import { useHistory } from "react-router-dom";
import API from './APIManager';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)
    const [searchTerm, setSearchTerm] = useState('')
    const [focused, setFocused] = useState(false)
    let history = useHistory();

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
                return <div className='search' onFocus={onFocus}><p><Link to={{ pathname: "/aide", state: {val: val, places: ["mairie", "point d'information local dédié aux personnes âgées", "Services du département"]}}}>{val.first_name}</Link></p></div>
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

    const isconnect = new AUTH().isConnected();


    return (
        
        <div>
            <nav>
                {(toggleMenu || largeur > 500) && (
                    <ul className='liste'>
                        <Link to="/"><img className="logo" src={logo}></img></Link>
                        <li className='items mobile'><Link to="/mobile">Mobile</Link></li>
                        <li className='items budget'><Link to="/budget">Budget</Link></li>
                        <li className='items'><input className='recherche' type="text"
                        placeholder='Rechercher ...'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}></input></li>
                        {/* <li><Link to="../assets/google-logo.png" target="_blank" download>Download</Link></li> */}
                        {/* <li className='items budget'><button onClick={download()}>Budget</button></li> */}
                        {isconnect ?
                        <>
                        <li className='items datauser'><button className='btn_s'><Link to="/datauser">Mon compte</Link></button></li>
                        <li className='items disconnect'><button className='btn_s' onClick={() => {new AUTH().disconnect() ; history.push('/login')} }>Déconnexion</button></li>
                        </>:
                        <>
                        <li className='items btn_connexion'><button className='btn_s'><Link to="/login">Connexion</Link></button></li>
                        <li className='items btn_inscription'><button className='btn_s'><Link to="/register">Inscription</Link></button></li>
                        </>
                        }
                        
                    </ul>
                )}
                <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
                {search_list}
            </nav>
            <div className='beta'>
                Ceci est une version bêta de notre application. Merci de nous faire des retours en remplissant <a  href='https://forms.gle/2bdpRBieGSnCYwSh6'>ce questionnaire !</a>
            </div>
        </div>
    )
}