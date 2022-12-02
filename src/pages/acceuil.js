import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_acceuil.css";
import AideAcceuil from '../components/aide_acceuil';
import { Link } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'
import axios from 'axios'
import fileDownload from 'js-file-download'
import Tchatbot from '../components/Tchatbot';
import API from '../components/APIManager';
import { getSuggestedQuery } from '@testing-library/react';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate, createSearchParams } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Acceuil() {

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
      <div>
        <Navbar />
        <Tchatbot/>
        <div id="description" className='description'>
        Horizons a pour but d’être une plateforme d’aide aux personnes à la recherches d’aides financières et propose divers services comme la possibilité de se renseigner sur comment mieux gérer son budget mensuellement et trouver l’aide adaptée à sa situation.
        <br/>
        <br/>
        Permettre aux utilisateurs de trouver toutes les aides auxquelles ils sont éligibles, quelles que soient leurs situations (étudiants, situation de handicap, personnes âgées). De pouvoir à long terme accompagner étape par étape l’utilisateur dans ses démarches.
        <br/>
        <br/>
        </div>
        <div className='aide_financiere'>Aides Financières</div>
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
          <div className="Fav">
            <input type="checkbox" value="Favoris" checked={isCheckedFav} onChange={handleOnChangeFav}/>Favoris
          </div>
          <div className="search_criteria">
            Critères de recherche :<br/>
            <div className="revenus">
              Vos Revenus :
              <input className="input_rev" defaultValue={0} type='number' onChange={event => changeMaximumRevenu(event.target.value)}></input>
            </div>
            {/* <div className="place">
              Votre Région :
              <input onChange={event => changePlace(event.target.value)}></input>
            </div> */}
          </div>
        </div>
        {list_aide}
    </div>);
}