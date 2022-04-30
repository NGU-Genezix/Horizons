import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_budget.css";

export default function Budget() {
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
                <input></input>
              </div>
              <div className='loisirs'>
                Loisirs<br/>
                <input></input>
              </div>
              <div className='transports'>
                Transports<br/>
                <input></input>
              </div>
          </div>
          <div className='second_line'>
              <div className='logement'>
                Logement<br/>
                <input></input>
              </div>
              <div className='alimentation'>
                Alimentation<br/>
                <input></input>
              </div>
              <div className='epargne'>
                Epargne<br/>
                <input></input>
              </div>
          </div>
        </div>
    </div>);
}