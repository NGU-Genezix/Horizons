import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_budget.css";
import {Link} from 'react-router-dom';
import API from '../components/APIManager';
import renderHTML from 'react-render-html';

export default function Budget() {
  const [isCheckedEtud, setIsCheckedEtud] = useState(false);
  const [isCheckedAge, setIsCheckedAge] = useState(false);
  const [isCheckedHandi, setIsCheckedHandi] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [result, setResult] = useState("");
  const [revenu, setRevenu] = useState(0);
  const [loisir, setLoisir] = useState(0);
  const [transport, setTransport] = useState(0);
  const [logement, setLogement] = useState(0);
  const [alimentation, setAlimentation] = useState(0);
  const [epargne, setEpargne] = useState(0);


  useEffect(() => {
    start()
  }, [])

  const start = () => {
    let res_budget = new API().get("get_budget", true).then(function(resu) {
      if (resu[0] == 200) {
        console.log(resu[1])
        setRevenu(resu[1]["Revenu"])
        setEpargne(resu[1]["Epargne"])
        setLogement(resu[1]["Logement"])
        setLoisir(resu[1]["Loisir"])
        setAlimentation(resu[1]["Alimentation"])
        setTransport(resu[1]["Transport"])
        //resu[1]["Revenu"]
        let res2 = new API().get("get_advice", true).then(function(result) {
          console.log(result)
          console.log(result[1][0])
          setResult(result[1][0])
          setIsDisplayed(true);
        })
      }
    });
  }

  const setBudget = () => {
    let body_content = {
      revenu: revenu,
      alimentation: alimentation,
      epargne: epargne,
      logement: logement,
      loisir: loisir,
      transport: transport
    }
    let pt_bdg = new API().post_budget("update_budget", true, body_content).then(function(resu) {
      
      console.log(resu)
    });
    let set_bdg = new API().post_budget("set_budget", true, body_content).then(function(resu) {
      
      console.log(resu)
    });
    let res_budget = new API().post_budget("get_budget", true, body_content).then(function(resu) {
      console.log(resu)
    });
    let res2 = new API().get("get_advice", true).then(function(result) {
      console.log(result)
      console.log(result[1][0])
      setResult(result[1][0])
      setIsDisplayed(true);
    })
 
  }


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
                <input className='input' defaultValue={revenu} value={revenu} type='number' onChange={event => setRevenu(parseInt(event.target.value))}></input>
              </div>
              <div className='loisirs'>
                Loisirs<br/>
                <input className='input' defaultValue={loisir} value={loisir} type='number' onChange={event => setLoisir(parseInt(event.target.value))}></input>
              </div>
              <div className='transports'>
                Transports<br/>
                <input className='input' defaultValue={transport} value={transport} type='number' onChange={event => setTransport(parseInt(event.target.value))}></input>
              </div>
          </div>
          <div className='second_line'>
              <div className='logement'>
                Logement<br/>
                <input className='input' defaultValue={logement} value={logement} type='number' onChange={event => setLogement(parseInt(event.target.value))}></input>
              </div>
              <div className='alimentation'>
                Alimentation<br/>
                <input className='input' defaultValue={alimentation} value={alimentation} type='number' onChange={event => setAlimentation(parseInt(event.target.value))}></input>
              </div>
              <div className='epargne'>
                Epargne<br/>
                <input className='input' defaultValue={epargne} value={epargne} type='number' onChange={event => setEpargne(parseInt(event.target.value))}></input>
              </div>
          </div>
        <button className="btn_budget" onClick={event => setBudget()}>Calculer</button>
        </div>
        {(isDisplayed) && (
          <div className="result">
            {renderHTML(result) }
          </div>
        )}
    </div>);
}