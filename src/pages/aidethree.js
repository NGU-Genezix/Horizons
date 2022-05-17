import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aidethree() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Allocation personnalisée d'autonomie
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Personne agée
            </div>
            <div className='box2'>
              Jusqu'à 1807€/mois
            </div>
          </div>
          <div className='box3'>
          Vous pouvez, sous conditions d'âge et de perte d'autonomie, obtenir l'Apa. L'Apa sert à payer (en totalité ou en partie) soit les dépenses nécessaires pour rester à votre domicile (Apa à domicile), soit le tarif dépendance de l'établissement médico-social (exemple : Ehpad) où vous vivez (Apa en établissement).
          </div>
          <div className='box4'>
            Liens utiles: https://www.service-public.fr/particuliers/vosdroits/F10009
          </div>
        </div>
      </div>
    );
} 