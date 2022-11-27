import React, {useState, useEffect} from 'react'
import "./../styles/tchatbot.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from './AuthManager';
import API from './APIManager';
import { useNavigate } from "react-router-dom";

export default function Tchatbot() {
    
    const history = useNavigate()
    const isconnect = new AUTH().isConnected();
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [tchat, setTchatText] = useState("");
    const [allTchat, setAllTchat] = useState([]);
    const [answers, setAnswers] = useState({});
    const [dataSendBack, setDataSendBack] = useState([]);
    const [myMsg, setMyMsg] = useState(true);

    const toggleOn = () => {
        setIsDisplayed(false);
    }

    const toggleOff = () => {
        setIsDisplayed(true);
    }

    const sendText = (elem) => {
        setAllTchat(allTchat => [...allTchat, elem])
    };

    const getAnswer = (elem) => {
        setAnswers(answers => [...answers, elem])
    };

    let test = 0


    useEffect(() => {
        test1()
      }, [])

    const test1 = () => {
        let res = new API().post("chatbot/send", false, null).then(function(result) {
          console.log("OUI")
          console.log(result[1]["data"])
          setAllTchat([result[1]["data"]["botRess"][0]])
          console.log(result[1]["data"]["autoRess"][0])
          setAnswers(result[1]["data"]["autoRess"])
          setDataSendBack(result[1]["data"]["dataToSendBack"])
          console.log(answers)
        //   result[1]["data"]["autoRess"][0]
        })
      }

    const reply = (elem) => {
        let body_content = {
            type: "autoRes",
            res: elem,
            dataSendBack: dataSendBack,
          }
          console.log("_________")
          console.log(elem.res)
          console.log("_________")
          setTchatText(elem.res)
          sendText(elem.res)
        let res = new API().tchat("chatbot/send", false, body_content).then(function(result) {
            if ( result[1]["data"] ) {
                console.log("_________")
                console.log(result[1])
                console.log("_________")
                setTchatText(result[1]["data"]["botRess"][0])
                sendText(result[1]["data"]["botRess"][0])
                console.log(result[1]["data"]["autoRess"][0])
                setAnswers(result[1]["data"]["autoRess"])
                console.log(answers)
            } else {
                console.log("_____-------------------____")
                history("/rech_aide")
                window.location.reload(false);
            }
        //   result[1]["data"]["autoRess"][0]
        })
    }

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
                                if (test == 1) {
                                    test = 0
                                    return (<div key={elem} className="send">{elem}</div>)
                                } else {
                                    test = 1
                                    return (<div key={elem} className="answer">{elem}</div>)
                                }
                            })
                            : null
                        }
                    </div>
                    {answers.length
                    ? answers.map(elem => {
                        return (<button key={elem.id} onClick={() => reply(elem)}>{elem.res}</button>)
                    })
                    : null}
                    <div className='input_tchat'>
                        <input type="text" class="bar_design" placeholder='Tapez pour écrire ...' onChange={(event) => {
                            setTchatText(event.target.value);
                        }}></input>
                        <button class="send_design" onClick={() => sendText(tchat)}>Envoyer</button>
                    </div>
                </div>
            )}
        </div>
    )
}