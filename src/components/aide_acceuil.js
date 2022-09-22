import React from 'react'
import "./../styles/aide_acceuil.css"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const AideAcceuil = ({display, min_rev, place, set_rev, search_place, name, status, price}) => {
    if (min_rev < set_rev && min_rev > 0) {
        display = false;
    }
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#ffda6d"})
      }
  
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#fff2cc"})
      }
    return (
        <>
            {(display) && (
                <div className='mainDiv' onMouseEnter={onEnter} onMouseLeave={onLeave} >
                    <div className='name'>{name}</div>
                    <div className='status'>{status}</div>
                    <div className='price'>Jusqu'à {price}€</div>
                </div>
            )}
        </>
    );
}

export default AideAcceuil
