import Button from '../../components/Button'
import React from 'react';
import ReactDOM from 'react-dom'

it("Button component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<Button></Button>, div)
})