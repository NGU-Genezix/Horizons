import React from 'react';

const TextFieldAuth = (props) => {
    return (
        <div className="textFieldAuth">
            <input
                title={props.title}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
            >
            </input>
        </div>
    );
}
 
export default TextFieldAuth;