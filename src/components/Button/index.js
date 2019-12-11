import React from 'react';
import './style.css';

const Button = ({children, onClickCallBack}) => {
    return(
        <button onClick={onClickCallBack} className='button'>
            {children}
        </button>
    );
}

export default Button;