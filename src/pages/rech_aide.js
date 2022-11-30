import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/rech_aide.css";
import AideAcceuil from '../components/aide_acceuil';
import JSONDATA from '../assets/Test_searchbar.json'
import axios from 'axios'
import fileDownload from 'js-file-download'
import Tchatbot from '../components/Tchatbot';
import API from '../components/APIManager';
import { getSuggestedQuery } from '@testing-library/react';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Contact from '../components/contact'
import N_Navbar from '../components/new_nav'
import { useNavigate, createSearchParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Rech_Aide() {
  let history = useNavigate();

    const [isCheckedEtud, setIsCheckedEtud] = useState(true);
    const [isCheckedAge, setIsCheckedAge] = useState(true);
    const [isCheckedHandi, setIsCheckedHandi] = useState(true);
    const [maximumRevenu, setMinimRev] = useState(0);
    const [place, setPlace] = useState("");
    const [isCheckedFav, setIsCheckedFav] = useState(true);

 
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

    const slideLeft = (elem, delay, duration) => {
      gsap.fromTo(elem, {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.4,
        duration: 0.6,
        // scrollTrigger: {
        //   trigger: elem,
        //   start: "top center",
        //   end: "bottom center"
        // }
      })
    }



    const changeMaximumRevenu = (revenu) => {
      setMinimRev(parseInt(revenu, 10));
    }

    const changePlace = (new_place) => {
      setPlace(new_place);
    }

    const handleOnChangeEtud = () => {
      setIsCheckedEtud(!isCheckedEtud);
      slideLeft("#aide_etud")
    };

    const handleOnChangeAge = () => {
      setIsCheckedAge(!isCheckedAge);
      slideLeft("#aide_age")
    };

    const handleOnChangeHandi = () => {
      setIsCheckedHandi(!isCheckedHandi);
      slideLeft("#aide_handi")
    };
    
    const handleOnChangeFav = () => {
      setIsCheckedFav(!isCheckedFav);
    };

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);



    useEffect(() => {
      getUser()
      slideLeft("#aide")
      slideInTop("#description")

    }, [])

    const getUser = () => {
      let res = new API().get("get_user", true).then(function(result) {
        if (result[1] != null) {
          if (result[1].statut == "étudiant") {
            handleOnChangeAge();
            handleOnChangeHandi(); }
          else if (result[1].statut == "âgé") {
            handleOnChangeEtud();
            handleOnChangeHandi(); }
          else if (result[1].statut == "handicapé") {
            handleOnChangeEtud();
            handleOnChangeAge(); }
          else if (result[1].statut == "fav") {
              handleOnChangeFav();
            }
        }
      })
    }

    

    let list_aide;
        list_aide =
        <ul id="aide" className='list'>
          {JSONDATA.filter((val) => {
                return val
            }).map((val, key) => {
                let link = (valeurs, places) => {
                  history({
                    pathname: "/aide",
                    search: createSearchParams({
                      val: val.id,
                    }).toString()
                  });
                }
                if (val.type == "Etudiant") {
                  return <a onClick={link}><AideAcceuil onClick={link} className="aideEtudiant" key={key} display={isCheckedEtud} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Etudiant"} price={val.prix} /></a>
                } else if (val.type == "Handicap") {
                  return <a onClick={link}><AideAcceuil onClick={link} className="aideHandicap" key={key} display={isCheckedHandi} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Handicap"} price={val.prix} /></a>
                } else if (val.type == "Personne Agée") {
                  return <a onClick={link}><AideAcceuil onClick={link} className="aideAge" key={key} display={isCheckedAge} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Personne Agée"} price={val.prix} /></a>
                } else {
                  return <a onClick={link}><AideAcceuil onClick={link} className="aideEtudiant" key={key} display={isCheckedEtud} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Etudiant"} price={val.prix} /></a>
                }
            })}
        </ul>


    return (
      <div className='main'>
        <N_Navbar></N_Navbar>
        <div className='rech_daide'>Recherches d'aide</div>
        {/* <div className='checkBoxDiv'> */}
        <div className='inline'>
          <div className="fst_block">
            <span className='txt_block'><input type="checkbox" value="Etudiant" checked={isCheckedEtud} onChange={handleOnChangeEtud}/>Etudiant</span>
          </div>
          <div className="sec_block" >
            <span className='txt_block'><input type="checkbox" value="PersonneAgée" checked={isCheckedAge} onChange={handleOnChangeAge}/>Personne Agée</span>
          </div>
        </div>
        <div className='inline'>
          <div className="third_block">
            <span className='txt_block'><input type="checkbox" value="Handicap" checked={isCheckedHandi} onChange={handleOnChangeHandi}/>Handicap</span>
          </div>
          <div className="fourth_block">
            <span className='txt_block'><input type="checkbox" value="Favoris" checked={isCheckedFav} onChange={handleOnChangeFav}/>Favoris</span>
          </div>
        </div>
        <div className='line'></div>
        <span className='txt_bot'>Besoin d'aide dans la recherche d'aides</span>
        <button className='decouvrez_assistant' onClick={() => history('/rech_aide')}><span className='dec_aide'>Découvrez votre assistant</span></button>
        <span className='txt_ger_budg'>Gérer votre budget</span>
        <button className='btn_ger_budg' onClick={() => history('/budget')}><span className='dec_aide'>Gérer votre budget</span></button>
        {/* </div> */}
        {list_aide}
        <div className='space'></div>
        <Contact></Contact>
    </div>);
}