import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/datauser.css";
 
const DataUser = () => {


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
                        <h1 className="main-title">PAYET DORIAN</h1>

                        <div className="info-container">
                            <div className="info-1">
                                <text className="gras">Date de naissance</text>
                                <br></br>
                                <text>27/07/2000</text>
                            </div>
                            <div className="info-2">
                                <text className="gras">Adresse mail</text>
                                <br></br>
                                <text>dorian.payet@epitech.eu</text>
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
                                Etudiant
                                </label>
                            </div>
                            <div className="info-5">
                                <button>Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DataUser;