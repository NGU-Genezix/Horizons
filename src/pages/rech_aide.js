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
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import Tchatbot_aide_page from "../components/Tchatbot_aide_page"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Rech_Aide() {
  let history = useNavigate();
  const [params] = useSearchParams();

    const [isCheckedEtud, setIsCheckedEtud] = useState(true);
    const [isCheckedAge, setIsCheckedAge] = useState(true);
    const [isCheckedHandi, setIsCheckedHandi] = useState(true);
    const [maximumRevenu, setMinimRev] = useState(0);
    const [place, setPlace] = useState("");
    const [isCheckedFav, setIsCheckedFav] = useState(true);
    const [searchTerm, setSearchTerm] = useState('')
    const [focused, setFocused] = useState(false)
    const [list_aide, setListAide] = useState([])
    const [search_list, setSearchList] = useState('')
 
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
      get_list(isCheckedEtud, isCheckedHandi, isCheckedAge, parseInt(revenu, 10))
    }

    const changePlace = (new_place) => {
      setPlace(new_place);
    }

    const handleOnChangeEtud = () => {
      get_list(!isCheckedEtud, isCheckedHandi, isCheckedAge, maximumRevenu)
      setIsCheckedEtud(!isCheckedEtud);
      slideLeft("#aide_etud")
    };

    const handleOnChangeAge = () => {
      get_list(isCheckedEtud, isCheckedHandi, !isCheckedAge, maximumRevenu)
      setIsCheckedAge(!isCheckedAge);
      slideLeft("#aide_age")
    };

    const handleOnChangeHandi = () => {
      get_list(isCheckedEtud, !isCheckedHandi, isCheckedAge, maximumRevenu)
      setIsCheckedHandi(!isCheckedHandi);
      slideLeft("#aide_handi")
    };
    
    const handleOnChangeFav = () => {
      setIsCheckedFav(!isCheckedFav);
    };

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const onFocus = () => setFocused(true)
    const onBlur = () => {
        setTimeout(() => {
            setFocused(false)
         }, 100);
    }
    // 'Etudiants'
    // 'Personnes en situation de handicap'
    // 'Personnes âgées'

    const get_search = (val1) => {
        let tmp = new API().get("aide/get_aide", false).then(function(result) {

                  let tmp = result[1].map((val, key) => {
                    if (val.name.toLowerCase().includes(val1.toLowerCase())) {
                      console.log(val)
                      let link = (valeurs, places) => {
                        history({
                          pathname: "/aide",
                          search: createSearchParams({
                            val: val.id,
                          }).toString()
                        });
                      }
                    
                      return <div className='search2' onFocus={onFocus}><p><a onClick={link}>{val.name}</a></p></div>
                    }
                })
                  setSearchList(
                    <div className='search_list2' onFocus={onFocus}>
                      <button className='btn_close2' onClick={close}>X</button>
                      {tmp}
                    </div>
                  )
              }
           )}
        


    const get_list = (etud, handi, age, rev) => {
      console.log(etud, handi, age)
      const test = new API().get("aide/get_aide", false).then(function(result) {
        console.log(result[1][2])
        let tmp = result[1].map((val, key) => {
          // console.log(val)
          let link = (valeurs, places) => {
            history({
              pathname: "/aide",
              search: createSearchParams({
                val: val.id,
              }).toString()
            });
          }
          if (val.type == 'Etudiants') {
            return <a onClick={link} className="link_aide"><AideAcceuil onClick={link} className="aide_l aide_etud" key={key} display={etud} min_rev={val.maxIncome} set_rev={rev} name={val.name} status={"Etudiants"} price={val.incomeLimit} /></a>
          } else if (val.type == "Personnes en situation de handicap") {
            return <a onClick={link} className="link_aide"><AideAcceuil onClick={link} className="aide_l aide_handi" key={key} display={handi} min_rev={val.maxIncome} set_rev={rev} name={val.name} status={"Personnes en situation de handicap"} price={val.incomeLimit} /></a>
          } else if (val.type == "Personnes âgées") {
            return <a onClick={link} className="link_aide"><AideAcceuil onClick={link} className="aide_l aide_age" key={key} display={age} min_rev={val.maxIncome} set_rev={rev} name={val.name} status={"Personnes âgées"} price={val.incomeLimit} /></a>
          } else {
            return <a onClick={link} className="link_aide"><AideAcceuil onClick={link} className="aide_l aide_etud" key={key} display={etud} min_rev={val.maxIncome} set_rev={rev} name={val.name} status={"Etudiant"} price={val.incomeLimit} /></a>
          }
          })
          setListAide(
            <ul id="aide" className='list'>
              {tmp}
            </ul>)
        }
      )
      
    }

    const close = () => {
      setSearchList("")
    }

    useEffect(() => {
      getUser()
      slideLeft("#aide")
      slideInTop("#description")
      let etud = false;
      let age = false;
      let handi = false;
      if (params.get("etud") != null) {
        if (params.get("etud") == "true") {
          etud = true;
          console.log("OK---")
          setIsCheckedEtud(true);
        } else if (params.get("etud") == "false") {
          setIsCheckedEtud(false);
          console.log("OK---")
        }
        if (params.get("agee") == "true") {
          let age = true;
          setIsCheckedAge(true);
        } else if (params.get("agee") == "false") {
          setIsCheckedAge(false);
        }
        if (params.get("handic") == "true") {
          handi = true;
          setIsCheckedHandi(true);
        } else if (params.get("handic") == "false") {
          setIsCheckedHandi(false);
        }
        get_list(etud, handi, age, maximumRevenu)
      } else {
        console.log("ok" + isCheckedEtud + isCheckedAge + isCheckedHandi)
        get_list(isCheckedEtud, isCheckedHandi, isCheckedAge, maximumRevenu)
      }

    }, [])

    const getUser = () => {
      let res = new API().get("get_user", true).then(function(result) {
        console.log(params.get("etud"))
      if (params.get("etud") == null) {
          if (result[1] != null) {
            if (result[1].statut == "étudiant") {
              handleOnChangeAge();
              handleOnChangeHandi();
              console.log("ETUDIANT")
              get_list(isCheckedEtud, false, false)
            }
            else if (result[1].statut == "âgé") {
              handleOnChangeEtud();
              handleOnChangeHandi();
              get_list(false, false, isCheckedAge)
            }
            else if (result[1].statut == "handicapé") {
              handleOnChangeEtud();
              handleOnChangeAge();
              get_list(false, isCheckedHandi, false)
            }
            else if (result[1].statut == "fav") {
                handleOnChangeFav();
              }
          }
        }
      })
    }

    const handleSearchTerm = (val) => {
      setSearchTerm(val)
      get_search(val)
    }

    return (
      <div className='main'>
        <N_Navbar></N_Navbar>
        <Tchatbot_aide_page/>
        <div className='rech_daide'>Recherches d'aide</div>
        <input className='recherche_2' type="text"
                        placeholder='Rechercher ...'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={(event) => {
                          handleSearchTerm(event.target.value);
                        }}></input>
        {search_list}
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
        <div className="search_criteria_2">
          <div className="revenus">
            Spécifier vos revenus mensuels :
            <input className="input_rev" defaultValue={0} type='number' onChange={event => changeMaximumRevenu(event.target.value)}></input>
          </div>
        </div>
        <span className='txt_bot'>Besoin d'aide dans la recherche d'aides</span>
        <span className='txt_ger_budg'>Gérer votre budget</span>
        <button className='btn_ger_budg' onClick={() => history('/budget')}><span className='dec_aide'>Gérer votre budget</span></button>
        {/* </div> */}
        {list_aide}
        <div className='space'></div>
        <Contact></Contact>
    </div>);
}