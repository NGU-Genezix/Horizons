import Tchatbot from '../../components/Tchatbot'
import ReactDOM from 'react-dom'
import React from 'react'

it("Tchatbot component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<Tchatbot></Tchatbot>, div)
})