import React from 'react'
import "./../styles/aide_acceuil.css"
 
const AideAcceuil = ({display, min_rev, place, set_rev, search_place, name, status, price}) => {
    if (min_rev < set_rev && min_rev > 0) {
        display = false;
    }
    return (
        <>
            {(display) && (
                <div className='mainDiv'>
                    <div className='name'>{name}</div>
                    <div className='status'>{status}</div>
                    <div className='price'>Jusqu'à {price}€</div>
                </div>
            )}
        </>
    );
}

export default AideAcceuil
