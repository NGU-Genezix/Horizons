import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'

it("Main App renders without crashing", ()=> {
    const div= document.createElement("App")
    ReactDOM.render(<App></App>, div)
})