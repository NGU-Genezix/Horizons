import React from 'react';
import { Link } from "react-router-dom";
import AUTH from '../components/AuthManager';
import { useNavigate } from "react-router-dom";

const GoogleButtonAuth = (props) => {
    return (
        <div className="google-button-auth-container">
            <div className="google-button-auth-sub-container">
                <a href="https://horizons.page/api/connect/google" > <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> <p className="btn-text"><b>Continuer avec Google</b></p> </a>
            </div>
        </div>
    );
}

export default GoogleButtonAuth;