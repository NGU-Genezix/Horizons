import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aide() {
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            Aide à la mobilité Parcoursup
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              Etudiant
            </div>
            <div className='box2'>
              Jusqu'à 500€
            </div>
          </div>
          <div className='box3'>
          C’est une aide financière de 500 € pour les futurs étudiants qui bénéficient d'une bourse de lycée et qui souhaitent s'inscrire, via Parcoursup, dans une formation située hors de leur académie de résidence. Elle peut être demandée à partir du 8 juillet 2022 en se connectant sur messervices.etudiant.gouv.fr.
          <br/>Trois conditions à remplir :
          <br/>- être bénéficiaire d'une bourse de lycée
          <br/>- être inscrit sur Parcoursup cette année et avoir confirmé au moins un vœu en-dehors de son académie de résidence
          <br/>- avoir accepté définitivement une proposition d'admission (OUI ou OUI-SI) pour un vœu confirmé hors de son académie de résidence
          <br/>En vous connectant à la plateforme Parcoursup, vous saurez quels sont vos vœux qui permettent de bénéficier de ce dispositif. Un bouton « Mobilité »  est affiché à côté du vœu correspondant à une formation en-dehors de son académie de résidence
          </div>
          <div className='box4'>
            Liens utiles: https://amp.etudiant.gouv.fr/
          </div>
        </div>
      </div>
    );
} 