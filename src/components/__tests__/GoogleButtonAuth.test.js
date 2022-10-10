import GoogleButtonAuth from '../../components/GoogleButtonAuth'
import React from 'react';
import ReactDOM from 'react-dom'

it("GoogleButtonAuth component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<GoogleButtonAuth></GoogleButtonAuth>, div)
})