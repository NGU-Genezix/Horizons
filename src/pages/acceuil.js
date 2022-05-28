import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_acceuil.css";
import AideAcceuil from '../components/aide_acceuil';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import JSONDATA from '../assets/Test_searchbar.json'

export default function Acceuil() {
    const [isCheckedEtud, setIsCheckedEtud] = useState(true);
    const [isCheckedAge, setIsCheckedAge] = useState(true);
    const [isCheckedHandi, setIsCheckedHandi] = useState(true);
    const [maximumRevenu, setMinimRev] = useState(0);
    const [place, setPlace] = useState("");


    const changeMaximumRevenu = (revenu) => {
      setMinimRev(parseInt(revenu, 10));
    }

    const changePlace = (new_place) => {
      setPlace(new_place);
    }

    const handleOnChangeEtud = () => {
      setIsCheckedEtud(!isCheckedEtud);
    };

    const handleOnChangeAge = () => {
      setIsCheckedAge(!isCheckedAge);
    };

    const handleOnChangeHandi = () => {
      setIsCheckedHandi(!isCheckedHandi);
    };

    let list_aide;
        list_aide =
        <ul className='list'>
          {JSONDATA.filter((val) => {
                return val
            }).map((val, key) => {
                if (val.type == "Etudiant") {
                  return <Link to={{ pathname: "/aide", state: val,}}><AideAcceuil className="aideEtudiant" display={isCheckedEtud} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Etudiant"} price={val.prix} /></Link>
                } else if (val.type == "Handicap") {
                  return <Link to={{ pathname: "/aide", state: val}}><AideAcceuil className="aideHandicap" display={isCheckedHandi} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Handicap"} price={val.prix} /></Link>
                } else if (val.type == "Personne Agée") {
                  return <Link to={{ pathname: "/aide", state: val}}><AideAcceuil className="aideAge" display={isCheckedAge} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Personne Agée"} price={val.prix} /></Link>

                } else {
                  return <Link to={{ pathname: "/aide", state: val}}><AideAcceuil className="aideEtudiant" display={isCheckedEtud} min_rev={val.rev_max} set_rev={maximumRevenu} name={val.first_name} status={"Etudiant"} price={val.prix} /></Link>
                }
            })}
        </ul>

    return (
    <div>
        <Navbar />
        <div className='description'>
        Horizons a pour but d’être une plateforme d’aide aux personnes à la recherches d’aides financières et propose divers services comme la possibilité de se renseigner sur comment mieux gérer son budget mensuellement et trouver l’aide adaptée à sa situation.
        <br/>
        <br/>
        Permettre aux utilisateurs de trouver toutes les aides auxquelles ils sont éligibles, quelles que soient leurs situations (étudiants, situation de handicap, personnes âgées). De pouvoir à long terme accompagner étape par étape l’utilisateur dans ses démarches.
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
          <div className="search_criteria">
            Critères de recherche :<br/>
            <div className="revenus">
              Vos Revenus :
              <input defaultValue={0} type='number' onChange={event => changeMaximumRevenu(event.target.value)}></input>
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