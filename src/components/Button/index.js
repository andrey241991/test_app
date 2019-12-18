import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Button = ({children, onClickCallBack, theme}) => {
    return(
        <button onClick={onClickCallBack} className={`button ${theme}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    children:'',
    theme: ''
  };

Button.propTypes = {
    children: PropTypes.string,
    onClickCallBack: PropTypes.func,
    theme: PropTypes.string,
  };

export default Button;