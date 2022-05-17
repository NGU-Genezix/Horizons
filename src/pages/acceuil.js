import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_acceuil.css";
import AideAcceuil from '../components/aide_acceuil';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
            <div className="place">
              Votre Région :
              <input onChange={event => changePlace(event.target.value)}></input>
            </div>
          </div>
        </div>
        <ul className='list'>
            <Link to="/aide"><AideAcceuil className="aideEtudiant" display={isCheckedEtud} min_rev={-1} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Aide à la mobilité Parcoursup"} status={"Etudiant"} price={"500"} /></Link>
            <Link to="/aide2"><AideAcceuil className="aideEtudiant" display={isCheckedEtud} min_rev={1008} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Prime d'activité : étudiant, stagiaire"} status={"Etudiant"} price={"246"} /></Link>
            <Link to="/aide3"><AideAcceuil className="aideAge" display={isCheckedAge} min_rev={-1} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Allocation personnalisée d'autonomie"} status={"Personne Agée"} price={"1807"} /></Link>
            <Link to="/aide4"><AideAcceuil className="aideAge" display={isCheckedAge} min_rev={1423} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Allocation de solidarité aux personnes âgées"} status={"Personne Agée"} price={"916"} /></Link>
            <Link to="/aide5"><AideAcceuil className="aideHandicap" display={isCheckedHandi} min_rev={919} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Allocation aux adultes handicapés"} status={"Handicap"} price={"919"} /></Link>
            <Link to="/aide6"><AideAcceuil className="aideHandicap" display={isCheckedHandi} min_rev={-1} place={"Paris"} set_rev={maximumRevenu} search_place={place} name={"Pension d'invalidité de la Sécurité sociale"} status={"Handicap"} price={"2860"} /></Link>
        </ul>
    </div>);
}