import React from 'react';
import { Link } from "react-router-dom";
 
const GoogleButtonAuth = (props) => {
    return (
        <div className="google-button-auth-container" onClick={props.onClick}>
            <div className="google-button-auth-sub-container">
                <a href="https://gregoriex.fr/connect/google" > HERE</a>
                <div className="title-container">
                    <h1 className="google-auth-btn-text">{props.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default GoogleButtonAuth;