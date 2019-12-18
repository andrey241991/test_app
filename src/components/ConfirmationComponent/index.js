import React from 'react';
import './style.css';
import Button from '../Button';

const ConfirmationComponent = ({ removeItemCallback }) => {

    const closeConfirmation = () => {
    }

    return (
        <section className='confirmation-component'>
            <h2 className='confirmation-component__title'>Are you sure you want to delete this item?</h2>
            <div className='confirmation-component__btn-container'>
                <Button theme='button__remove-theme' onClickCallBack={() => closeConfirmation}>No</Button>
                <Button theme='button__edit-theme' onClickCallBack={() => removeItemCallback}>Yes</Button>
            </div>
        </section>
    );
}

export default ConfirmationComponent;