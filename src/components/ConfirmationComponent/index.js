import React from 'react';
import './style.css';
import Button from '../Button';
import PropTypes from 'prop-types';

const ConfirmationComponent = ({hideConfirmationRemoveWindow, removeOffice }) => {

    return (
        <section className='confirmation-component'>
            <h2 className='confirmation-component__title'>Are you sure you want to delete this item?</h2>
            <div className='confirmation-component__btn-container'>
                <Button theme='button__remove-theme' onClickCallBack={hideConfirmationRemoveWindow}>No</Button>
                <Button theme='button__edit-theme' onClickCallBack={removeOffice}>Yes</Button>
            </div>
        </section>
    );
}

Button.propTypes = {
    hideConfirmationRemoveWindow: PropTypes.func.isRequired,
    removeOffice: PropTypes.func.isRequired,
  };

export default ConfirmationComponent;