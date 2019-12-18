import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import { options } from '../../countries'
import Input from '../Input';
import PropTypes from 'prop-types';
import { generateID } from '../../utils/utils'


const AddNewOffice =
  ({ state,
    hideOffice,
    addNewOffice,
    handleInput,
    handleSelectInput
  }) => {

    return (
      <section
        className='add-new-office'>
        <div className='add-new-office-container'>

          <div className='adress-container'>
            <div className='country-wrapper'>
              <span className='country__logo'>
                *Country:
          </span>
              <select onChange={handleSelectInput} value={state.country} className='country__select' id='country'>
                {options.map(country => {
                  return <option key={generateID()}>{country}</option>
                })}
              </select>
            </div>
            <Input
              handleInput={handleInput}
              logo='*State/Province:'
              value={state.province}
              fieldName={'province'}
              isRequared={true}
            />
            <Input
              handleInput={handleInput}
              logo='*Postal Code:'
              value={state.postalCode}
              fieldName={'postalCode'}
              isRequared={true}
            />
            <Input
              handleInput={handleInput}
              logo='*City:'
              value={state.city}
              fieldName={'city'}
              isRequared={true}
            />
            <Input
              handleInput={handleInput}
              logo='*Street Address:'
              value={state.streetAddress}
              fieldName={'streetAddress'}
              isRequared={true}
            />
            <Input
              handleInput={handleInput}
              logo='Address 2:'
              value={state.addressOptional}
              fieldName={'addressOptional'}
            />
          </div>
          <div className='contacts-container'>
            <Input
              handleInput={handleInput}
              logo='Phone:'
              value={state.phone}
              fieldName={'phone'}
            />
            <Input
              handleInput={handleInput}
              logo='Fax:'
              value={state.fax}
              fieldName={'fax'}
            />
            <Input
              handleInput={handleInput}
              logo='Email:'
              value={state.email}
              fieldName={'email'}
            />
            <Input
              handleInput={handleInput}
              inputType='checkbox'
              logo='Office Type'
              value={state.primary}
              fieldName={'primary'}
            >Primary HQ</Input>
          </div>
          <div className='buttons-container'>
            <Button theme='button__back-theme' onClickCallBack={hideOffice}>Cancel</Button>
            <Button theme='button__edit-theme' onClickCallBack={addNewOffice}>Save</Button>
          </div>
        </div>
      </section>
    );
  }

AddNewOffice.defaultProps = {
  theme: ''
};

AddNewOffice.propTypes = {
  state: PropTypes.object,
  hideOffice: PropTypes.func.isRequired,
  theme: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  handleSelectInput: PropTypes.func.isRequired,
};

export default AddNewOffice;
