import TextFieldAuth from '../../components/TextFieldAuth'
import ReactDOM from 'react-dom'
import React from 'react'

it("TextFieldAuth component renders without crashing", ()=> {
    const div= document.createElement("div")
    ReactDOM.render(<TextFieldAuth></TextFieldAuth>, div)
})