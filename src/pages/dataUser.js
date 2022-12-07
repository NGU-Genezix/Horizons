import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/datauser.css";
import API from '../components/APIManager';
import { BrowserRouter, Link, Route, Switch, useNavigate, createSearchParams } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import Contact from '../components/contact'
import N_Navbar from '../components/new_nav'
 
const DataUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [histo, setHisto] = useState([]);
    const [list_aide, setList] = useState([]);
    const [data, setData] = useState(null);
    let history = useNavigate();
    
    useEffect(() => {
        getUser()  
    }, [])


    const test = () => {
        const txt = new API().get("aide/get_aide", false).then(function(result) {
          const tmp = result[1].map((val, key) => {
            // console.log(val)
            return val
          })
          setData(tmp);
        }
      )}

    const getUser = () => {
        let res = new API().get("get_user", true).then(function(result) {
            setUser(result[1])
            setLoading(false)
            console.log(result[1])
        })
        let res2 = new API().get("get_historique", true).then(function(result) {
            console.log("___")
            console.log(result[1]['1'])
            let n_res = Object.values(result[1])
            setHisto(n_res)
            console.log("___")
            console.log(n_res)
            n_res.forEach(element => {
                    const txt = new API().get("aide/get_aide", false).then(function(result) {
                        const tmp = result[1].map((val, key) => {
                            if (val.id == element) {
                                let link = (valeurs, places) => {
                                    history({
                                      pathname: "/aide",
                                      search: createSearchParams({
                                        val: val.id,
                                      }).toString()
                                    });
                                }
                                setList(liste => [...liste, <div><p><a onClick={link}>{val.name}</a></p></div>])
                            }
                        })
                    }
                    // JSONDATA.filter((val) => {
                    //     return val
                    // }).map((val, key2) => {
                    //     if (val.id == element) {
                    //         console.log("OOOOOOOOOOOOOO" + key2)
                    //         setList(liste => [...liste, <div><Link id="aide_etud" to={{ pathname: "/aide", state: {val: val, places: ["mairie", "point d'information local dédié aux personnes âgées", "Services du département"]}}}>{val.first_name}</Link></div>])
                    //     }
                    // })
         )})}
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
        <div className="main"> 
            <N_Navbar></N_Navbar>
            <div className="space1">
            {/* <div className="auth"> */}
                {/* <div className="background-design">
                    <div className="big-circle-1"></div>
                    <div className="big-circle-2"></div>
                    <div className="little-circle-1"></div>
                    <div className="little-circle-2"></div>
                </div> */}
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
                <div className="histo">
                    <h1>Historique</h1>
                    <div>
                        {list_aide}
                    </div>
                </div>
            </div>
        <Contact></Contact>

        </div>
    );

}


export default DataUser;