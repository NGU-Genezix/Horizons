import ButtonAuth from '../../components/ButtonAuth'
import React from 'react';
import ReactDOM from 'react-dom'

it("ButtonAuth component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<ButtonAuth></ButtonAuth>, div)
})