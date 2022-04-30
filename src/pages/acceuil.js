import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_acceuil.css";
import AideAcceuil from '../components/aide_acceuil';

export default function Acceuil() {
    const [isCheckedEtud, setIsCheckedEtud] = useState(true);
    const [isCheckedAge, setIsCheckedAge] = useState(true);
    const [isCheckedHandi, setIsCheckedHandi] = useState(true);

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
        </div>
        <ul className='list'>
            <AideAcceuil className="aideEtudiant" display={isCheckedEtud} name={"Aide pour manger"} status={"Etudiant"} price={"2000"} />
            <AideAcceuil className="aideAge" display={isCheckedAge} name={"Aide pour ce loger"} status={"Personne Agée"} price={"3000"} />
            <AideAcceuil className="aideHandicap" display={isCheckedHandi} name={"Aide pour ce déplacer"} status={"Handicap"} price={"200"} />
            <AideAcceuil className="aideAge" display={isCheckedAge} name={"Aide voyage à l'étranger"} status={"Personne Agée"} price={"50"} />
            <AideAcceuil className="aideHandicap" display={isCheckedHandi} name={"Aide voyage"} status={"Handicap"} price={"1450"} />
            <AideAcceuil className="aideAge" display={isCheckedAge} name={"Aide pour ce déplacer"} status={"Personne Agée"} price={"90000"} />
            <AideAcceuil className="aideEtudiant" display={isCheckedEtud} name={"Aide d'étude"} status={"Etudiant"} price={"2000"} />
        </ul>
    </div>);
}