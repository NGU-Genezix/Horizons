import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_budget.css";
import {Link} from 'react-router-dom';
import API from '../components/APIManager';
import renderHTML from 'react-render-html';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Budget() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [result, setResult] = useState("");
  const [revenu, setRevenu] = useState(0);
  const [loisir, setLoisir] = useState(0);
  const [transport, setTransport] = useState(0);
  const [logement, setLogement] = useState(0);
  const [alimentation, setAlimentation] = useState(0);
  const [epargne, setEpargne] = useState(0);

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(elem, {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.4,
      duration: 0.6,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    })
  }

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffda6d"})
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fff2cc"})
  }

  useEffect(() => {
    start()
    slideInTop("#budget")
  }, [])

  const start = () => {
    let res_budget = new API().get("get_budget", true).then(function(resu) {
      if (resu[0] == 200) {
        console.log(resu[1])
        if (resu[1] != null) {
          setRevenu(resu[1]["Revenu"])
          setEpargne(resu[1]["Epargne"])
          setLogement(resu[1]["Logement"])
          setLoisir(resu[1]["Loisir"])
          setAlimentation(resu[1]["Alimentation"])
          setTransport(resu[1]["Transport"])
          //resu[1]["Revenu"]
        }
        let res2 = new API().get("get_advice", true).then(function(result) {
          console.log(result)
          console.log(result[1][0])
          if (result[1][0] != null) {
            setResult(result[1][0])
            setIsDisplayed(true);
            slideInTop("#result")
          }
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
      if (resu[0] == 200) {
        let res_budget = new API().post_budget("get_budget", true, body_content).then(function(resul) {
          console.log(resul)
          let res2 = new API().get("get_advice", true).then(function(result) {
            console.log(result)
            console.log(result[1][0])
            setResult(result[1][0])
            setIsDisplayed(true);
          })
        });
      } else {
        let set_bdg = new API().post_budget("set_budget", true, body_content).then(function(resu) {
          let res_budget = new API().post_budget("get_budget", true, body_content).then(function(resul) {
            console.log(resul)
            let res2 = new API().get("get_advice", true).then(function(result) {
              console.log(result)
              console.log(result[1][0])
              setResult(result[1][0])
              setIsDisplayed(true);
            })
          });
          console.log(resu)
        });
        slideInTop("#result")
      }
    });
    
    
    
 
  }

    return (
    <div>
        <Navbar />
        <div className='budget_title'>Budget</div>
        <div id="budget" className='budget_calculator'>
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
          <div id="result" className="result">
            {renderHTML(result) }
          </div>
        )}
    </div>);
}