import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar"
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import "../styles/page_register.css";
 
const Register = () => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const sexe = ['Homme', 'Femme'];
    const profil = ['Etudiant', 'Personne agée', 'Handicap'];
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    let history = useHistory();

    async function register() {

        let body_content = {
            firstname: firstName,
            lastname: lastName,
            username: username,
            mail: email,
            password: password,
        }
    }

    const handleChange = (event) => {
        if (event.target.title == "username")
            setUsername(event.target.value)
        else if (event.target.title == "firstname")
            setFirstName(event.target.value)
        else if (event.target.title == "lastname")
            setLastName(event.target.value)
        else if (event.target.title == "email")
            setEmail(event.target.value)
        else if (event.target.title == "password")
            setPassword(event.target.value)
        else if (event.target.title == "c_password")
            setConfPassword(event.target.value)
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
                <div className="register-container">
                    <div className="big-square">
                        <h1 className="main-title">Inscription</h1>

                        <div className="input-container">
                            <div className="one-title">Nom d'utilisateur</div>
                            <div className="input-1">
                                <TextFieldAuth
                                    title="username"
                                    onChange={handleChange}
                                    placeholder="Nom d'utilisateur"
                                    type="text"
                                />
                            </div>
                            <div className="two-title">Prénom</div>
                            <div className="input-2">
                                <TextFieldAuth
                                    title="firstname"
                                    onChange={handleChange}
                                    placeholder="Prénom"
                                    type="text"
                                />
                            </div>
                            <div className="three-title">Nom</div>
                            <div className="input-3">
                                <TextFieldAuth
                                    title="lastname"
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    type="text"
                                />
                            </div>
                            <div className="four-title">Adresse email</div>
                            <div className="input-4">
                                <TextFieldAuth
                                    title="email"
                                    onChange={handleChange}
                                    placeholder="Adresse email"
                                    type="text"
                                />
                            </div>
                            <div className="five-title">Sexe</div>
                            <div className="input-7">
                                <label><input 
                                    type="checkbox" 
                                />
                                Homme
                                </label>
                                <label><input 
                                    type="checkbox" 
                                />
                                Femme
                                </label>
                            </div>
                            <div className="six-title">Profil</div>
                            <div className="input-8">
                                <label><input 
                                    type="checkbox" 
                                />
                                Etudiant
                                </label>
                                <label><input 
                                    type="checkbox" 
                                />
                                Personne agée
                                </label>
                                <label><input 
                                    type="checkbox" 
                                />
                                Handicap
                                </label>
                            </div>
                            <div className="seven-title">Mot de passe</div>
                            <div className="input-5">
                                <TextFieldAuth
                                    title="password"
                                    onChange={handleChange}
                                    placeholder="Mot de passe"
                                    type="password"
                                />
                            </div>
                            <div className="input-6">
                                <TextFieldAuth
                                    title="c_password"
                                    onChange={handleChange}
                                    placeholder="Confirmation mot de passe"
                                    type="password"
                                />
                            </div>
                        </div>

                        <div className="clicable-widgets-container">
                            <ButtonAuth onClick={register} title="Créer mon compte" />
                            <div className="link-container">
                                <a href="#" onClick={() => history.push('/login')}>Vous avez déjà un compte ? Se connecter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Register;