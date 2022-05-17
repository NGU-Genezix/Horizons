import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useHistory } from "react-router-dom";
import GoogleButtonAuth from "../components/GoogleButtonAuth";
import LockLogo from "../assets/login-lock-logo.png";
import Navbar from '../components/Navbar';
import "../styles/page_login.css";
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
 
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const storage = localStorage;

    async function login() {

        let body_content = {
            mail: email,
            password: password,
        }

        let result = await fetch("URL-Horizon-API", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(body_content),
        });

        let rq_response = await result.json();

        console.log(rq_response);
        
        if (rq_response.status.code == 200) {
            console.log(rq_response.data.access_token);
            storage.setItem("access_token", rq_response.data.access_token);
            storage.setItem("refresh_token", rq_response.data.refresh_token);
            storage.setItem("id", rq_response.data.user.id);
            storage.setItem("firstname", rq_response.data.user.firstname);
            storage.setItem("lastname", rq_response.data.user.lastname);
            storage.setItem("address", rq_response.data.user.address);
            storage.setItem("mail", rq_response.data.user.mail);
            history.push("/me");
        }
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
                        <div class="google-btn">
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p class="btn-text"><b>Continuer avec Google</b></p>
                        </div>



                        <div className="clicable-widgets-container">
                            <ButtonAuth
                                onClick={login}
                                title="Connexion"
                            />
                            <div className="link-container">
                                <a href="#">Mot de passe oublié?</a>
                                <a href="#" onClick={() => history.push('/register')}> Je n'ai pas encore de compte</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;