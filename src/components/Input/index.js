import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

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
        const { inputType, logo, children, value, theme } = this.props;
        const { isErrorVisible } = this.state;
        return (
            <section className='input'>
                <span className='input__title'>{logo}</span>
                <input
                    className={isErrorVisible ? 'input__field--error' : `input__field ${theme}`}
                    checked={inputType === 'checkbox' ? value : false}
                    value={value}
                    type={inputType}
                    onChange={this.onHandleInput} />
                {children}
            </section>
        );
    }
}

Input.defaultProps = {
    isRequared: false,
    inputType:'',
};

Input.propTypes = {
    handleInput: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    isRequared: PropTypes.bool,
    inputType: PropTypes.string,
    logo: PropTypes.string.isRequired,
    children: PropTypes.string,
    value:  PropTypes.any.isRequired,
};

export default Input;
