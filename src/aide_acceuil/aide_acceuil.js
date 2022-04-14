import React from 'react'
import "./aide_acceuil.css"

const AideAcceuil = ({display, name, status, price}) => {
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
