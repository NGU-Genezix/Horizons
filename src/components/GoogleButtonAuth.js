import React from 'react';
import { Link } from "react-router-dom";
 
const GoogleButtonAuth = (props) => {
    return (
        <div className="google-button-auth-container" onClick={props.onClick}>
            <div className="google-button-auth-sub-container">
                <a href="https://gregoriex.fr/api/connect/google" > <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> <p className="btn-text"><b>Continuer avec Google</b></p> </a>
                
            </div>
        </div>
    );
}

export default GoogleButtonAuth;