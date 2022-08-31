import APIManager from '../../components/APIManager'
import React from 'react';
import ReactDOM from 'react-dom'

it("APIManager component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<APIManager></APIManager>, div)
})