import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/datauser.css";
import API from '../components/APIManager';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
 
const DataUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        let res = new API().get("get_user", true).then(function(result) {
            setUser(result[1])
            setLoading(false)
        })
    }

    if (isLoading) {
        return (<div> 
                    <Navbar />
                </div>)
    }
    console.log(user)
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
                        <h1 className="main-title">{user.firstName} {user.lastName}</h1>

                        <div className="info-container">
                            <div className="info-1">
                                <text className="gras">Date de naissance</text>
                                <br></br>
                                <text>{user.birthday}</text>
                            </div>
                            <div className="info-2">
                                <text className="gras">Adresse mail</text>
                                <br></br>
                                <text>{user.email}</text>
                            </div>
                            <div className="info-3">
                                <text className="gras">Sexe</text>
                                <label><input 
                                    type="checkbox" 
                                    checked="checked"
                                />
                                Homme
                                </label>
                            </div>
                            <div className="info-4">
                                <text className="gras">Profil</text>
                                <label><input 
                                    type="checkbox"
                                    checked="checked" 
                                />
                                {user.statut}
                                </label>
                            </div>
                            <div className="info-5">
                                <button className="info-6"><Link to="/updateuser">Modifier</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DataUser;