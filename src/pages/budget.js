import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_budget.css";
import {Link} from 'react-router-dom';

export default function Budget() {
  const [isCheckedEtud, setIsCheckedEtud] = useState(false);
  const [isCheckedAge, setIsCheckedAge] = useState(false);
  const [isCheckedHandi, setIsCheckedHandi] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [result, setResult] = useState("");
  const [revenu, setRevenu] = useState("0");
  const [loisir, setLoisir] = useState("0");
  const [transport, setTransport] = useState("0");
  const [logement, setLogement] = useState("0");
  const [alimentation, setAlimentation] = useState("0");
  const [epargne, setEpargne] = useState("0");

  const handleOnChangeEtud = () => {
    setIsCheckedEtud(!isCheckedEtud);
    if (isCheckedEtud == false) {
      setIsCheckedAge(false);
      setIsCheckedHandi(false);
    }
  };
 
  const handleOnChangeAge = () => {
    setIsCheckedAge(!isCheckedAge);
    if (isCheckedAge == false) {
      setIsCheckedEtud(false);
      setIsCheckedHandi(false);
    }
  };

  const handleOnChangeHandi = () => {
    setIsCheckedHandi(!isCheckedHandi);
    if (isCheckedHandi == false) {
      setIsCheckedAge(false);
      setIsCheckedEtud(false);
    }
  };

  const setResultEtude = (argent) => {
    setResult(<div>
    Avec vos dépenses mensuelles actuelle, il vous reste {argent} euros restant par mois.<br/>

    Parce que vous êtes étudiant, nous vous conseillons de répartir votre revenu restant de cette façon : <br/>

    - Economiser 70 % = {(argent * 0.7)|0} euros<br/>

    - Plaisir 30 % = {(argent * 0.3)|0} euros<br/>

    Vous pouvez toujours consulter les aides qui pourrais correspondre à vos critères afin d’augmenter vos revenus en <Link to="/">cliquant ici !</Link>
  </div>);
  }

  const setResultHandi = (argent) => {
    setResult(<div>
    Avec vos dépenses mensuelles actuelle, il vous reste {argent} euros restant par mois. <br/>

    Parce que vous êtes une personne en situation d’handicap, nous vous conseillons de répartir votre revenu restant de cette façon : <br/>

    - Traitement / Confort  100% = {argent} euros<br/>
    OU <br/>

    - Economiser entre 60 et 65% = {(argent * 0.63)|0} euros<br/>

    - Loisir entre 35 et 40% = {(argent * 0.37)|0} euros<br/>

    Vous pouvez toujours consulter les aides qui pourrais correspondre à vos critères afin d’augmenter vos revenus en <Link to="/">cliquant ici !</Link>
  </div>);
  }

  const setResultAge = (argent) => {
    setResult(<div>
    Avec vos dépenses mensuelles actuelle, il vous reste {argent} euros restant par mois. <br/>

    Parce que vous êtes une personne âgée, nous vous conseillons de répartir votre revenu restant de cette façon : <br/>

    - Economiser 60% = {(argent * 0.60)|0} euros<br/>

    - Plaisir / Confort 40% = {(argent * 0.40)|0} euros<br/>

    Vous pouvez toujours consulter les aides qui pourrais correspondre à vos critères afin d’augmenter vos revenus en <Link to="/">cliquant ici !</Link> 
  </div>);
  }

  const setResultNeg = (argent) => {
    setResult(<div>
      Avec vos dépenses mensuelles actuelle, vous perdez plus d’argent que vous n’en gagnez ({argent} euros).<br/> 

      Pour remédier à cela, nous vous conseillons de consulter les aides qui pourrais correspondre à vos critères afin d’augmenter vos revenus en <Link to="/">cliquant ici !</Link> 
    </div>)
  }

  const handleResultDisplay = () => {
    if (revenu == "" || loisir == "" || transport == "" || alimentation == "" || logement == "" || epargne == ""
    || (isCheckedEtud == false && isCheckedAge == false && isCheckedHandi == false)) {
      setIsDisplayed(false);
    }
    else {
      const rev = parseInt(revenu, 10);
      const lois = parseInt(loisir, 10);
      const trans = parseInt(transport, 10);
      const alim = parseInt(alimentation, 10);
      const loge = parseInt(logement, 10);
      const epa = parseInt(epargne, 10);
      const res = rev - (lois + trans + alim + loge + epa);
      if (res < 0) {
        setResultNeg(res);
      } else {
        if (isCheckedEtud == true) {
          setResultEtude(res);
        }
        if (isCheckedAge == true) {
          setResultAge(res);
        }
        if (isCheckedHandi == true) {
          setResultHandi(res);
        }
      }
      setIsDisplayed(true);
    }
  };

    return (
    <div>
        <Navbar />
        <div className='budget_title'>Budget</div>
        <div className='checkBoxDiv'>
          <div className="Etudiant">
            <input type="checkbox" value="Etudiant" checked={isCheckedEtud} onChange={handleOnChangeEtud}/>Etudiant
          </div>
          <div className="PersonneAgée" >
            <input type="checkbox" value="PersonneAgée" checked={isCheckedAge} onChange={handleOnChangeAge}/>Personne Agée
          </div>
          <div className="Handicap">
            <input type="checkbox" value="Handicap" checked={isCheckedHandi} onChange={handleOnChangeHandi}/>Handicap
          </div>
        </div>
        <div className='budget_calculator'>
          <div className='first_line'>
              <div className='revenu'>
                Revenu<br/>
                <input defaultValue={"0"} type='number' onChange={event => setRevenu(event.target.value)}></input>
              </div>
              <div className='loisirs'>
                Loisirs<br/>
                <input defaultValue={"0"} type='number' onChange={event => setLoisir(event.target.value)}></input>
              </div>
              <div className='transports'>
                Transports<br/>
                <input defaultValue={"0"} type='number' onChange={event => setTransport(event.target.value)}></input>
              </div>
          </div>
          <div className='second_line'>
              <div className='logement'>
                Logement<br/>
                <input defaultValue={"0"} type='number' onChange={event => setLogement(event.target.value)}></input>
              </div>
              <div className='alimentation'>
                Alimentation<br/>
                <input defaultValue={"0"} type='number' onChange={event => setAlimentation(event.target.value)}></input>
              </div>
              <div className='epargne'>
                Epargne<br/>
                <input defaultValue={"0"} type='number' onChange={event => setEpargne(event.target.value)}></input>
              </div>
          </div>
        <button className="btn_budget" onClick={event => handleResultDisplay()}>Calculer</button>
        </div>
        {(isDisplayed) && (
          <div className="result">
            {result}
          </div>
        )}
    </div>);
}