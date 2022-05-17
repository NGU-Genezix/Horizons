import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aidefour() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Allocation de solidarité aux personnes âgées
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Personne agée
            </div>
            <div className='box2'>
              Jusqu'à 916€/mois
            </div>
          </div>
          <div className='box3'>
          L'allocation de solidarité aux personnes âgées (Aspa) est une prestation mensuelle accordée aux retraités ayant de faibles ressources et vivant en France. Elle est versée par votre caisse de retraite (Carsat, MSA, ...). Son montant dépend notamment de votre situation familiale (vie de couple ou non).
          </div>
          <div className='box4'>
            Liens utiles: https://www.service-public.fr/particuliers/vosdroits/F16871
          </div>
        </div>
      </div>
    );
} 