import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import { options } from '../../countries'
import Input from '../Input';

const AddNewOffice = ({
  country,
  state,
  city,
  postalCode,
  streetAddress,
  addressOptional,
  phone,
  fax,
  email,
  primary,
  hideAddNewOffice,
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
            <select onChange={handleSelectInput} value={country} className='country__select' id='country'>
              {options.map((country, index) => {
                return <option key={index}>{country}</option>
              })}
            </select>
          </div>
          <Input
            handleInput={handleInput}
            logo='*State/Province:'
            value={state}
            fieldName={'state'}
          />
          <Input
            handleInput={handleInput}
            logo='*Postal Code:'
            value={postalCode}
            fieldName={'postalCode'}
          />
          <Input
            handleInput={handleInput}
            logo='*City:'
            value={city}
            fieldName={'city'}
          />
          <Input
            handleInput={handleInput}
            logo='*Street Address:'
            value={streetAddress}
            fieldName={'streetAddress'}
          />
          <Input
            handleInput={handleInput}
            logo='Address 2:'
            value={addressOptional}
            fieldName={'addressOptional'}
          />
        </div>
        <div className='contacts-container'>
          <Input
            handleInput={handleInput}
            logo='Phone:'
            value={phone}
            fieldName={'phone'}
          />
          <Input
            handleInput={handleInput}
            logo='Fax:'
            value={fax}
            fieldName={'fax'}
          />
          <Input
            handleInput={handleInput}
            logo='Email:'
            value={email}
            fieldName={'email'}
          />
          <Input
            handleInput={handleInput}
            inputType='checkbox'
            logo='Office Type'
            value={primary}
            fieldName='primary'
          >Primary HQ</Input>
        </div>
        <div className='buttons-container'>
          <Button theme='button__remove-theme' onClickCallBack={hideAddNewOffice}>Cancel</Button>
          <Button theme='button__edit-theme' onClickCallBack={addNewOffice}>Save</Button>
        </div>
      </div>
    </section>
  );
}

export default AddNewOffice;

