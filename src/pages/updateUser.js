import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar"
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import "../styles/page_register.css";
import AUTH from '../components/AuthManager'
import Contact from '../components/contact'
import N_Navbar from '../components/new_nav'

const UpdateUser = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statut, setStatut] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [sex, setSex] = useState("");
    const profil = ['Etudiant', 'Personne agée', 'Handicap'];
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    let navigate = useNavigate();

    async function register() {

        let body_content = {
            firstname: firstName,
            lastname: lastName,
            password: password,
            birthday: birthday,
            statut: statut,
            email: email,
            profil: profil,
            sex: sex,
        }
        var res = new AUTH().updateuser(body_content).then(res=> {
            if (res[0] == 200)
                navigate('/datauser')
            else
                console.log("register failed", res)
        })
    }

    const handleChange = (event) => {
        if (event.target.title == "firstname")
            setFirstName(event.target.value)
        else if (event.target.title == "lastname")
            setLastName(event.target.value)
        else if (event.target.title == "email") {
            setEmail(event.target.value)
            console.log(event.target.value)
        }
        else if (event.target.title == "password")
            setPassword(event.target.value)
        else if (event.target.title == "c_password")
            setConfPassword(event.target.value)
        else if (event.target.title == "sex")
            setSex(event.target.value)
        else if (event.target.title == "statut")
            setStatut(event.target.value)
        else if (event.target.title == "birthday")
            setBirthday(event.target.value)
    }

    return (
        <div className='main'> 
            <N_Navbar></N_Navbar>
            <div className="space1">
                <div className="register-container">
                    <div className="big-square">
                        <h1 className="main-title">Modification</h1>

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
                            <div className="four-title">Date de naissance</div>
                            <div className="input-4">
                                <TextFieldAuth
                                title="birthday"
                                onChange={handleChange}
                                placeholder="jj/mm/yyyy"
                                type="text"
                                />
                            </div>
                            <div className="five-title">Email</div>
                            <div className="input-5">
                                <TextFieldAuth
                                    title="email"
                                    onChange={handleChange}
                                    placeholder="Email"
                                    type="text"
                                />
                            </div>
                            <div className="six-title">Sexe</div>
                            <div className="input-6">
                            <TextFieldAuth
                                    title="sex"
                                    onChange={handleChange}
                                    placeholder="Sexe"
                                    type="text"
                                />
                            </div>
                            <div className="seven-title">Profil</div>
                            <div className="input-7">
                            <TextFieldAuth
                                    title="statut"
                                    onChange={handleChange}
                                    placeholder="Profil"
                                    type="text"
                                />
                            </div>
                            <div className="eight-title">Mot de passe</div>
                            <div className="input-8">
                                <TextFieldAuth
                                    title="password"
                                    onChange={handleChange}
                                    placeholder="Mot de passe"
                                    type="password"
                                />
                            </div>
                        </div>

                        <div className="clicable-widgets-container">
                            <ButtonAuth onClick={register} title="Sauvegarder" />
                        </div>
                    </div>
                </div>
            </div>
        <Contact></Contact>

        </div>
    );

}


export default UpdateUser;