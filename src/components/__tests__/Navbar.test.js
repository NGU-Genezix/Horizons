import Navbar from '../../components/Navbar'
import ReactDOM from 'react-dom'
import React from 'react'

it("Navbar component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<Navbar></Navbar>, div)
})