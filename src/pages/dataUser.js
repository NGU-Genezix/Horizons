import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/datauser.css";
import API from '../components/APIManager';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
 
const DataUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [histo, setHisto] = useState([]);
    const [list_aide, setList] = useState([]);
    
    useEffect(() => {
        getUser()  
    }, [])


    const getUser = () => {
        let res = new API().get("get_user", true).then(function(result) {
            setUser(result[1])
            setLoading(false)
        })
        let res2 = new API().get("get_historique", true).then(function(result) {
            console.log("___")
            console.log(result[1]['1'])
            let n_res = Object.values(result[1])
            setHisto(n_res)
            console.log("___")
            console.log(n_res)
            n_res.forEach(element => {
                    JSONDATA.filter((val) => {
                        return val
                    }).map((val, key2) => {
                        if (val.id == element) {
                            console.log("OOOOOOOOOOOOOO" + key2)
                            setList(liste => [...liste, <div><Link id="aide_etud" to={{ pathname: "/aide", state: {val: val, places: ["mairie", "point d'information local dédié aux personnes âgées", "Services du département"]}}}>{val.first_name}</Link></div>])
                        }
                    })
            })}
            // setList("Test")
        )
        console.log(res2)
    }
        
        

    if (isLoading) {
        return (<div> 
                    <Navbar />
                </div>)
    }
    console.log(list_aide)
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
                                {user.sex}
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
                <div>
                    Historique
                    <div>
                        {list_aide}
                    </div>
                </div>
            </div>
        </div>
    );

}


export default DataUser;