import React from 'react';
 
const Button = (props) => {
    return (
        <button
            type="button"
            className="button"
            name={props.name}
            style={{width : props.size}}
            onClick={props.onClick}>
        {props.title}
        </button>
    );
}

export default Button;