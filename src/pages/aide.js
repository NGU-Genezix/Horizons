import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/page_aide.css";

export default function Aide() {
  const location = useLocation()
  const data = location.state
    return (
        <div className="App">
        <Navbar />
        <div id="conteneur">
          <h1 className="titles">
            {data.first_name}
          </h1>
          <div id="conteneur1">
            <div className='box1'>
              {data.type}
            </div>
            <div className='box2'>
              Jusqu'à {data.prix}€
            </div>
          </div>
          <div className='box3'>
            {data.descriptif}
          </div>
          <div className='box4'>
            Liens utiles: {data.lien_aide}
          </div>
        </div>
      </div>
    );
} 