import React from 'react';
import './style.css';

const ValidationInput = ({ inpuType, logo, children }) => {

    // const checkField = e => {
    //     let inputText = e.target.value;
    //     let isValid = re.test(e.target.value);
    //     isValid ? errorRef.current.style.display = "none" : errorRef.current.style.display = "block";
    //     setValid(isValid, logo, inputText);
    //     if(password && inputText !== password){
    //         errorRef.current.style.display = "block";
    //     }
    // }

    return (
        <section className='input'>
            <span className='input__title'>{logo}</span>
            <input className='input__field' type={inpuType} onChange={() => { }} />
            {children}
        </section>

    );
}

export default ValidationInput;