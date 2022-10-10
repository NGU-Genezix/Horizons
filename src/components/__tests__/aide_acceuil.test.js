import AideAcceuil from '../aide_acceuil'
import ReactDOM from 'react-dom'
import React from 'react'

it("AideAcceuil component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<AideAcceuil></AideAcceuil>, div)
})