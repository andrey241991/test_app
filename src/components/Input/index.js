import React, { Component } from 'react';
import './style.css';

class Input extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isErrorVisible: false,
        };
    }

    onHandleInput = (e) => {
        const { handleInput, fieldName, isRequared } = this.props;

        let text = e.target.value;
        handleInput(fieldName, text);

        if (isRequared && text.length === 0) {
            this.setState({
                isErrorVisible: true
            })
        } else {
            this.setState({
                isErrorVisible: false
            })
        }
    }

    render() {
        const { inputType, logo, children, value, } = this.props;
        const { isErrorVisible } = this.state;
        return (
            <section className='input'>
                <span className='input__title'>{logo}</span>
                <input
                    className={isErrorVisible ? 'input__field--error' : 'input__field'}
                    checked={inputType === 'checkbox' ? value : false}
                    value={value}
                    type={inputType}
                    onChange={this.onHandleInput}/>
                {children}
            </section>
        );
    }
}

export default Input;
