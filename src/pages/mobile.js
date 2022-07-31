import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_mobile.css";
import AideAcceuil from '../components/aide_acceuil';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import fileDownload from 'js-file-download'
import ReactLoading from 'react-loading'
import first from "../assets/screen_mobile_1.png"
import second from "../assets/screen_mobile_2.png"
import third from "../assets/screen_mobile_3.png"
import fourth from "../assets/screen_mobile_4.png"


export default function Mobile() {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleDownload = (url, filename) => {
        setIsDisplayed(true);
      axios.get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename)
        setIsDisplayed(false);
      })
    }

    return (
    <div>
        <Navbar />
        <h1>Pour télécharger notre application mobile, <button onClick={() => {handleDownload('https://cors-everywhere-me.herokuapp.com/http://89.234.183.150:8080/api/apk', 'Horizons.zip')}}>Cliquez ici !</button></h1>
        {(isDisplayed) && (
            <div>
                Téléchargement en cours ...<br/>
                <div className='loading'><ReactLoading type="balls" color="#eeca60" 
                    height={100} width={100} /></div>
            </div>
        )}
        <div>
        <br/>
        <br/>
        Vous pouvez télécharger le fichier "Horizons.zip" depuis votre ordinateur puis l'envoyer vers votre mobile, ou directement depuis votre mobile.<br/>
        <br/>
        Puis, sur votre mobile, cliquez sur le fichier "apk.apk" pour lancer l'installation de l'application. 
        <br/>
        <br/>
        <img className="screen" src={first}></img>
        <br/>
        <br/>
        Cliquez ensuite sur "Installer".
        <br/>
        <br/>
        <img className="screen" src={second}></img>
        <br/>
        <br/>
        Lorsque l'application est installée, vous pouvez ouvrir l'application.
        <br/>
        <br/>
        <img className="screen" src={third}></img>
        <br/>
        <br/>
        Vous pouvez maintenant découvrir notre application mobile !
        <br/>
        <br/>
        <img className="screen" src={fourth}></img>
        <br/>
        <br/>
        </div>
    </div>);
}