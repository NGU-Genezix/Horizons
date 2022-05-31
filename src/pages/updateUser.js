import React, { useState } from "react";
import TextFieldAuth from "../components/TextFieldAuth";
import ButtonAuth from "../components/ButtonAuth";
import { useHistory} from "react-router-dom";
import Navbar from "../components/Navbar"
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import "../styles/page_register.css";
import AUTH from '../components/AuthManager'
 
const UpdateUser = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statut, setStatus] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const sex = ['Homme', 'Femme'];
    const profil = ['Etudiant', 'Personne agée', 'Handicap'];
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    let history = useHistory();

    async function register() {

        let body_content = {
            firstname: firstName,
            lastname: lastName,
        }
        var res = new AUTH().updateuser(body_content).then(res=> {
            if (res[0] == 200)
                history.push('/datauser')
            else
                console.log("register failed", res)
        })
    }

    const handleChange = (event) => {
        if (event.target.title == "firstname")
            setFirstName(event.target.value)
        else if (event.target.title == "lastname")
            setLastName(event.target.value)
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
                        </div>

                        <div className="clicable-widgets-container">
                            <ButtonAuth onClick={register} title="Sauvegarder" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default UpdateUser;