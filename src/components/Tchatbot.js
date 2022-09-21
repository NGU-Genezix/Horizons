import React, {useState, useEffect} from 'react'
import "./../styles/tchatbot.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from './AuthManager';
import { useHistory } from "react-router-dom";
import API from './APIManager';

export default function Tchatbot() {
    
    const isconnect = new AUTH().isConnected();
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [tchat, setTchatText] = useState("");
    const [allTchat, setAllTchat] = useState([]);
    const [myMsg, setMyMsg] = useState(true);

    const toggleOn = () => {
        setIsDisplayed(false);
    }

    const toggleOff = () => {
        setIsDisplayed(true);
    }

    const sendText = () => {
        setAllTchat(allTchat => [...allTchat, tchat, "OK"])
    };

    let test = 0

    return (
        <div className='tchatbot'>
            {(isDisplayed) && (
            <div className='tchat_btn'>
                <button class="tchat_design" onClick={toggleOn}>Tchatbot</button>
            </div>)}
            {(!isDisplayed) && (
                <div className='tchat_div'>
                    <button className='btn_close' onClick={toggleOff}>X</button>
                    <div className='main_tchat'>
                        {allTchat.length
                            ? allTchat.map(elem => {
                                if (test == 0) {
                                    test = 1
                                    return (<div key={elem} className="send">{elem}</div>)
                                } else {
                                    test = 0
                                    return (<div key={elem} className="answer">{elem}</div>)
                                }
                            })
                            : null
                        }
                    </div>
                    <div className='input_tchat'>
                        <input type="text" class="bar_design" placeholder='Tapez pour écrire ...' onChange={(event) => {
                            setTchatText(event.target.value);
                        }}></input>
                        <button class="send_design" onClick={sendText}>Envoyer</button>
                    </div>
                </div>
            )}
        </div>
    )
}