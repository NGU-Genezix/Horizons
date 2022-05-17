import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aidetwo() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Prime d'activité : étudiant, stagiaire
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Etudiant
            </div>
            <div className='box2'>
              Jusqu'à 246€/mois
            </div>
          </div>
          <div className='box3'>
          La prime d'activité remplace le RSA activité et la prime pour l'emploi. Les étudiants salariés, les stagiaires et les apprentis de plus de 18 ans peuvent en bénéficier sous certaines conditions. La demande de prime d'activité se fait via un téléservice ou auprès de la Caf ou de la MSA.
          </div>
          <div className='box4'>
            Liens utiles: https://www.service-public.fr/particuliers/vosdroits/F33375
          </div>
        </div>
      </div>
    );
} 