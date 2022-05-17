import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aidefive() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Allocation aux adultes handicapés
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Handicap
            </div>
            <div className='box2'>
              Jusqu'à 919€
            </div>
          </div>
          <div className='box3'>
            L'allocation aux adultes handicapés (AAH) est une aide financière qui vous permet d'avoir un minimum de ressources. Cette aide est attribuée sous réserve de respecter des critères d’incapacité, d'âge, de résidence et de ressources. Elle est accordée sur décision de la commission des droits et de l'autonomie des personnes handicapées (CDAPH). Son montant vient compléter vos éventuelles autres ressources.
          </div>
          <div className='box4'>
            Liens utiles: https://www.service-public.fr/particuliers/vosdroits/F12242
          </div>
        </div>
      </div>
    );
} 