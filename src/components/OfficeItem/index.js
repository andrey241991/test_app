import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import PropTypes from 'prop-types';


const OfficeItem = ({ primary, adress, phone, email, fax, id, showConfirmationRemoveWindow, editOffice }) => {

  return (
    <section className='office-item'>
      <div className='office-item-container'>
        <div className='adress-container'>
          <span className='adress-container__title'>Address:</span>
          <div>
            {primary ? <div className='adress-container__primary'>&#10004; Primary HQ</div> : false}
            <div className='adress-container__item' >
              {adress ?
                adress.map((item, index) => {
                  return <span key={index}>{item}</span>
                }) :
                false
              }
            </div>
          </div>
        </div>
        <div className='contacts-container'>
          {phone ?
            <div>
              <span className='contacts-container__name'>Phone:</span>
              <span> {phone}</span>
            </div>
            : false
          }
          {email ?
            <div>
              <span className='contacts-container__name'>Email:</span>
              <span> {email}</span>
            </div>
            : false
          }
          {fax ?
            <div>
              <span className='contacts-container__name'>Fax:</span>
              <span> {fax}</span>
            </div>
            : false
          }
        </div>
        <div className='buttons-container'>
          <Button theme='button__remove-theme' onClickCallBack={() => showConfirmationRemoveWindow(id)}>Remove</Button>
          <Button theme='button__edit-theme' onClickCallBack={() => editOffice(id)}>Edit</Button>
        </div>
      </div>
    </section>
  );
}



OfficeItem.defaultProps = {
  phone: '',
  email: '',
  fax: '',
};

OfficeItem.propTypes = {
  primary: PropTypes.bool.isRequired,
  adress: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  showConfirmationRemoveWindow: PropTypes.func.isRequired,
  editOffice: PropTypes.func.isRequired
};


export default OfficeItem;
