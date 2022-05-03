import React, { useState } from "react";
import Navbar from "../components/Navbar";
 
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
                    <h1 className="main-title">PAYET DORIAN</h1>

                    <div className="info-container">
                        <div className="info-1">
                            <text>Date de naissance</text>
                            <br></br>
                            <text>27/07/2000</text>
                        </div>
                        <div className="info-2">
                            <text>Adresse mail</text>
                            <br></br>
                            <text>dorian.payet@epitech.eu</text>
                        </div>
                        <div className="info-3">
                            <text>Sexe</text>
                            <label><input 
                                type="checkbox" 
                                checked="checked"
                            />
                            Homme
                            </label>
                        </div>
                        <div className="info-4">
                            <text>Profil</text>
                            <label><input 
                                type="checkbox"
                                checked="checked" 
                            />
                            Etudiant
                            </label>
                        </div>
                        <button>Modifier</button>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DataUser;