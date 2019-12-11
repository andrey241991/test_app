import React from 'react';
import './style.css';

const Button = ({children, onClickCallBack, theme}) => {
    return(
        <button onClick={onClickCallBack} className={`button ${theme}`}>
            {children}
        </button>
    );
}

export default Button;