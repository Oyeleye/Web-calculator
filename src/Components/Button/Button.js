import React from "react";
import "./Button.css";


const Button = ({content}) => {
    return(
        <div className={`Button ${content==='0' ? 'zero' : 
        '' }`}>{content}</div>
    );
}

export default Button; 
