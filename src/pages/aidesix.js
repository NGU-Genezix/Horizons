import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aidesix() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Pension d'invalidité de la Sécurité sociale
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Handicap
            </div>
            <div className='box2'>
              Jusqu'à 2860€
            </div>
          </div>
          <div className='box3'>
            Vous pouvez être reconnu invalide si votre capacité de travail et de gain est réduite d'au moins 2/3 (66%) à la suite d'un accident ou d'une maladie d'origine non professionnelle. Vous pouvez obtenir le versement d'une pension d'invalidité pour compenser la perte de salaire. La pension d'invalidité est attribuée à titre provisoire. Celle-ci peut être modifiée, suspendue ou supprimée selon l'évolution de votre situation.
          </div>
          <div className='box4'>
            Liens utiles: https://www.service-public.fr/particuliers/vosdroits/F672
          </div>
        </div>
      </div>
    );
} 