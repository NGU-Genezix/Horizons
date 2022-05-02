import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aide() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Aides pour manger
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Etudiant
            </div>
            <div className='box2'>
              Jusqu'à 3000€
            </div>
          </div>
          <div className='box3'>
            L’aide alimentaire permet à de nombreuses personnes et familles avec de très faibles revenus d’obtenir un repas d’urgence, des tickets ou des chèques alimentaires afin de se nourrir, mais également d’acheter des ressources de première nécessité (hygiène, couches pour bébé…).
            L’avantage de ces tickets alimentaires (également appelés chèques de services) est la discrétion qu’ils procurent à leurs utilisateurs. En effet, socialement parlant, il n’est pas toujours évident d’assumer son besoin d’aide. Ces bons ressemblent fortement à des tickets restaurants et vous permettent de régler vos achats sans attirer l’attention des autres clients dans les épiceries et commerces partenaires de l’initiative (le CCAS ou les associations peuvent vous indiquer les commerçants qui acceptent le bon alimentaire).
          </div>
          <div className='box4'>
            Liens utiles: https://www.gouv.aidespourmanger.com/
          </div>
        </div>
      </div>
    );
} 