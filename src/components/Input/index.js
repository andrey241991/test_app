import React from 'react';
import './style.css';

const Input = ({ inputType, logo, children, handleInput, value, fieldName }) => {

    const onHandleInput = (e) => {
        handleInput(fieldName, e.target.value);
    }

    return (
        <section className='input'>
            <span className='input__title'>{logo}</span>
            <input
                className='input__field'
                checked={inputType === 'checkbox' ? value : false}
                value={value}
                type={inputType}
                onChange={onHandleInput} />
            {children}
        </section>

    );
}

export default Input;