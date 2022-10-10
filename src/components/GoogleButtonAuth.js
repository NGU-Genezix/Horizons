import React from 'react';
 
const GoogleButtonAuth = (props) => {
    return (
        <div className="google-button-auth-container" onClick={props.onClick}>
            <div className="google-button-auth-sub-container">
                <div className="title-container">
                    <h1 className="google-auth-btn-text">{props.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default GoogleButtonAuth;