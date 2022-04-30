import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import logo from "../assets/logo_Horizon.png"
 
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
                    <li className='items aide'>Aides</li>
                    <li className='items budget'>Budget</li>
                    <li className='items'><input width="20%"></input></li>
                    <li className='items btn_connexion'><button>Connexion</button></li>
                    <li className='items'><button>Inscription</button></li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
        </nav>
    )
}