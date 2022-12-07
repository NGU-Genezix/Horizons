import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import "../styles/page_register.css";
import AUTH from '../components/AuthManager'
import Contact from '../components/contact'
import N_Navbar from '../components/new_nav'

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statut, setStatus] = useState("");
    const [sex, setSex] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const profil = ['Etudiant', 'Personne agée', 'Handicap'];
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    let navigate = useNavigate();

    async function register() {

        let body_content = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            birthday: birthday,
            statut: statut,
            sex: sex
        }
        console.log(body_content)
        var res = new AUTH().register(body_content).then(res=> {
            if (res[0] == 200)
                navigate('/login')
            else
                console.log("register failed", res)
        })
    }

    const handleChange = (event) => {
        if (event.target.title == "firstname")
            setFirstName(event.target.value)
        else if (event.target.title == "lastname")
            setLastName(event.target.value)
        else if (event.target.title == "email")
            setEmail(event.target.value)
        else if (event.target.title == "password")
            setPassword(event.target.value)
        else if (event.target.title == "c_password")
            setConfPassword(event.target.value)
        else if (event.target.title == "etudiant")
            setStatus("Etudiant")
        else if (event.target.title == "agee")
            setStatus("Agé")
        else if (event.target.title == "handicap")
            setStatus("Handicapé")
        else if (event.target.title == "birthday")
            setBirthday(event.target.value)
        else if (event.target.title == "homme")
            setSex("Homme")
        else if (event.target.title == "femme")
            setSex("Femme")
    }

    return (
        <div className='main'> 
            <N_Navbar></N_Navbar>
            <div className="space1">
                <div className="register-container">
                    <div className="big-square">
                        <h1 className="main-title">Inscription</h1>

                        <div className="input-container">
                            <div className="two-title">Prénom:</div>
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
                            <div className="one-title">Date de naissance:</div>
                            <div className="input-1">
                                <TextFieldAuth
                                    title="birthday"
                                    onChange={handleChange}
                                    placeholder="jj/mm/yyyy"
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
                            <div className="input-5">
                                <label><input onChange={handleChange} title="homme"
                                    type="checkbox" 
                                />
                                Homme
                                </label>
                                <label><input onChange={handleChange} title="femme"
                                    type="checkbox" 
                                />
                                Femme
                                </label>
                            </div>
                            <div className="six-title">Profil</div>
                            <div className="input-8">
                                <label><input onChange={handleChange} title="etudiant"
                                    type="checkbox" 
                                />
                                Etudiant
                                </label>
                                <label><input onChange={handleChange} title="agee"
                                    type="checkbox" 
                                />
                                Personne agée
                                </label>
                                <label><input onChange={handleChange} title="handicap"
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
                                <a href="#" onClick={() => navigate('/login')}>Vous avez déjà un compte ? Se connecter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Contact></Contact>

        </div>
    );

}


export default Register;