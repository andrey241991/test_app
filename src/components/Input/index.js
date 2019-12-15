import React from 'react';
import './style.css';

const Input = ({ inputType, logo, children, handleInput, value, fieldName}) => {

    // const checkField = e => {
    //     let inputText = e.target.value;
    //     let isValid = re.test(e.target.value);
    //     isValid ? errorRef.current.style.display = "none" : errorRef.current.style.display = "block";
    //     setValid(isValid, logo, inputText);
    //     if(password && inputText !== password){
    //         errorRef.current.style.display = "block";
    //     }
    // }

    // const onHandleInput = (e) => {
    //     debugger;
    //     // if(logo === 'Office Type'){
    //     //     handleInput(logo, e.);
    //     // }
    //     console.log('stateName', stateName);
    //     console.log('e.target.value', e.target.value);
    //     handleInput(stateName, e.target.value);
    // }

    // {const log2o = {logo == 'Office Type' ? :  }}


    const onHandleInput = (e) => {
        handleInput(fieldName, e.target.value);
    }

    return (
        <section className='input'>
            <span className='input__title'>{logo}</span>
            <input
                className='input__field'
                // checked = {logo === 'Office Type' ? value : undefined}
                value={value}
                type={inputType}
                onChange={onHandleInput} />
            {children}
        </section>

    );
}

export default Input;