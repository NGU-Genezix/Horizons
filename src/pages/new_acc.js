import React, {useState, useEffect} from 'react';
import "../styles/new_acc.css";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import img_horizon from "../assets/image_horizon.jpg"
import logo_aide from "../assets/logo_aide.png"
import img_budget from "../assets/budget.jpg"
import N_Navbar from '../components/new_nav'
import { useNavigate } from "react-router-dom";
import Contact from '../components/contact'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function N_Acceuil() {
  let history = useNavigate();


    const [isCheckedEtud, setIsCheckedEtud] = useState(true);

    return (
      <div className='main'>
        <N_Navbar></N_Navbar>
        <div className='main'>
          <div className='top_div'>
            <img className="img_horizon" src={img_horizon}></img>
            <span className="nouveau_hor">Envisagez de nouveaux horizons</span>
            <span className="lappli">L’application qui vous donne accès à toutes les aides sociales auxquelles vous avez le droit</span>
          </div>
          <div className='main_button'>
            <button className='box_aide' onClick={() => history('/rech_aide')}><img className='logo_aide' src={logo_aide}></img>Trouver vos aides sociales</button>
            <button className='box_budget' onClick={() => history('/budget')}><img className='logo_aide' src={logo_aide}></img>Gérer votre budget</button>
          </div>
          <div className='aide_sociales'>
            <div className='txt_aide_sociales'>
              <span>Trouvez vos aides sociales</span>
            </div>
            <div className='txt_1'>
              <span>Trouvez les établissements près de chez vous</span>
            </div>
            <div  className='txt_2'>
              <span>Facilité vos démarches</span>
            </div>
            <div className='txt_3'>
              <span >Centralisation des informations</span>
            </div>
            <div className='aide_1'>
              <span className='titre_box'>Aide à la mobilité parcoursup</span>
              <div>
                <span className='jusq'>Jusqu'à</span><span className='sec_jusq'> 500€</span>
              </div>
            </div>
            <div className='aide_2'>
              <span className='titre_box'>Allocation personnalisée d’autonomie</span>
              <div>
                <span className='jusq'>Jusqu'à</span><span className='sec_jusq'> 1807€</span>
              </div>
            </div>
            <div className='aide_3'>
              <span className='titre_box'>Prime d’activité: étudiant, stagiaire</span>
              <div>
                <span className='jusq'>Jusqu'à</span><span className='sec_jusq'> 246€</span>
              </div>
            </div>
            <div className='aide_4'>
              <span className='titre_box'>Allocation de solidarité à personnes âgées</span>
              <div>
                <span className='jusq'>Jusqu'à</span><span className='sec_jusq'> 916€</span>
              </div>
            </div>
          </div>
          <button className='decouvrez_aides_sociales' onClick={() => history('/rech_aide')}><span className='dec_aide'>Découvrez vos aides sociales</span></button>
        </div>
        <div className='budget'>
          <div className='txt_aide_sociales'>
            <span>Trouvez vos aides sociales</span>
          </div>
          <img className="img_budget" src={img_budget}></img>
          <div className='txt_rev'>
            <span>Revenu, loisir, transport, ...</span>
          </div>
          <div className='txt_appr'>
            <span >Apprenez à mieux gérer votre buget</span>
          </div>
          <div className='txt_obt'>
            <span>Obtenez des conseils pour économiser de l'argent</span>
          </div>
          <button className='gerer_budget' onClick={() => history('/budget')}><span className='dec_aide'>Découvrez vos aides sociales</span></button>
        </div>
        <Contact></Contact>
    </div>);
}