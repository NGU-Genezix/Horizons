import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useNavigate } from "react-router-dom";
import GoogleButtonAuth from "../components/GoogleButtonAuth";
import LockLogo from "../assets/login-lock-logo.png";
import Navbar from '../components/Navbar';
import "../styles/page_login.css";
import API from '../components/APIManager';
import AUTH from '../components/AuthManager'
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
 
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const storage = localStorage;
    let navigate = useNavigate(); 

    async function login() {
        var res = new AUTH().connect(email, password).then(res=> {
            if (res[0] == 200)
                navigate('/')
        })
        console.log(res)
    }

    const handleChange = (event) => {
        if (event.target.title == "email")
            setEmail(event.target.value);
        else if (event.target.title == "password")
            setPassword(event.target.value);
    }

    return (
        <div>
            <Navbar />
            <div className="auth">
                <div className="background-design">
                    <div className="big-circle-1"></div>
                    <div className="big-circle-2"></div>
                    <div className="little-circle-1"></div>
                    <div className="little-circle-2"></div>
                </div>
                <div className="login-container">
                    <div className="big-square">
                        <h1 className="main-title">Connexion</h1>

                        <div className="email-title">Adresse email</div>
                        <div className="input-1">
                            <TextFieldAuth
                                title="email"
                                onChange={handleChange}
                                placeholder="Adresse email"
                                type="text"
                                style="width: 500px"
                            />
                        </div>
                        <div className="password-title">Mot de passe</div>
                        <div className="input-2">
                            <TextFieldAuth
                                title="password"
                                onChange={handleChange}
                                placeholder="Mot de passe"
                                type="password"
                            />
                        </div>

                        <div className="remember-container">
                            <input type="checkbox" />
                            <label>Se souvenir de moi</label>
                        </div>
                        <div className="separator-auth-methods-container">
                            <hr></hr>
                            <span>OU</span>
                            <hr></hr>
                        </div>
                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <GoogleButtonAuth/>
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p className="btn-text"><b>Continuer avec Google</b></p>
                        </div>



                        <div className="clicable-widgets-container">
                            <ButtonAuth
                                onClick={login}
                                title="Connexion"
                            />
                            <div className="link-container">
                                <a href="#">Mot de passe oublié?</a>
                                <a href="#" onClick={() => navigate('/register')}> Je n'ai pas encore de compte</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;