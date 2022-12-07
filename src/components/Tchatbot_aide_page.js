import React, {useState, useEffect} from 'react'
import "./../styles/tchatbot.css"
import logo from "../assets/logo_Horizon.png"
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import { wait } from '@testing-library/react';
import AUTH from './AuthManager';
import API from './APIManager';
import { useNavigate, createSearchParams } from "react-router-dom";

export default function Tchatbot_aide_page() {
    
    const history = useNavigate()
    const isconnect = new AUTH().isConnected();
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [tchat, setTchatText] = useState("");
    const [allTchat, setAllTchat] = useState([]);
    const [answers, setAnswers] = useState({});
    const [dataSendBack, setDataSendBack] = useState([]);
    const [myMsg, setMyMsg] = useState(true);
    const [etu, setEtu] = useState(false);
    const [age, setAge] = useState(false);
    const [handi, setHandi] = useState(false);

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
          setAnswers(result[1]["data"]["autoRess"].filter(elem => elem.id !== 55 && elem.id !== 59))
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
          if (elem.id == 1) {
            if (isconnect) {
                history({
                    pathname: "/datauser"
                })
                window.location.reload(false);
            } else {
                history({
                    pathname: "/register"
                })
                window.location.reload(false);
            }
          }
          if (elem.id == 8) {
            setEtu(true)
          }
          if (elem.id == 9) {
            setHandi(true)
          }
          if (elem.id == 10) {
            setAge(true)
          }
          if (elem.id == 11) {
            setEtu(false)
            setHandi(false)
            setAge(false)
          }
          if (elem.id == 16) {
            setEtu(true)
            setHandi(true)
            setAge(true)
          }
          sendText(elem.res)
        let res = new API().tchat("chatbot/send", false, body_content).then(function(result) {
            if ( result[1]["data"] ) {
                console.log("_________")
                console.log(result[1])
                console.log("_________")
                setTchatText(result[1]["data"]["botRess"][0])
                sendText(result[1]["data"]["botRess"][0])
                console.log(result[1]["data"]["autoRess"][0])
                setAnswers(result[1]["data"]["autoRess"].filter(elem => elem.id !== 55 && elem.id !== 59))
                console.log(answers)
            } else {
                console.log("_____-------------------____")
                history({
                    pathname: "/rech_aide",
                    search: createSearchParams({
                        etud: etu,
                        handic: handi,
                        agee: age,
                      }).toString()
                })
                window.location.reload(false);
            }
        //   result[1]["data"]["autoRess"][0]
        })
    }

    return (
        <div className='tchatbot'>
            <button className='decouvrez_assistant' onClick={toggleOn}><span className='dec_aide'>Découvrez votre assistant</span></button>
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
                </div>
            )}
        </div>
    )
}