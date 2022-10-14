import React from 'react';
import { Link } from "react-router-dom";
 
const GoogleButtonAuth = (props) => {
    return (
        <div className="google-button-auth-container" onClick={props.onClick}>
            <div className="google-button-auth-sub-container">
                <a href="https://gregoriex.fr/api/connect/google" > HERE</a>
            </div>
        </div>
    );
}

export default GoogleButtonAuth;