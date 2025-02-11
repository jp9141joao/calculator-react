import React from "react";
import './button.css'

export default props => 
    <button 
        onClick={props.click ? () => props.click(props.label) : null}
        className={`
            button 
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
    >
        { props.label }
    </button>