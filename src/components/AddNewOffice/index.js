import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import { options } from '../../countries'
import Input from '../Input';

class AddNewOffice extends React.Component {

  constructor() {
    super();
    this.state = {
      country: options[0],
      postalCode: '',
      city: '',
      streetAddress: '',
      addressOptional: '',
      phone: '',
      fax: '',
      email: '',
      primary: true,
      isAddNewOfficeVisible:false
    };
  }

  handleInput(type, body) {
    if (type === 'primary') {
      this.setState({
        primary: !this.state.primary
      })
    } else {
      console.log('type', type);
      console.log('body', body);
      this.setState({

        [type]: body
      })
    }

  }

  handleSelectInput(e) {
    console.log('type', e.target.value);
    this.setState({
      country: e.target.value
    })
  }

  render() {
    const {
      country,
      state,
      city,
      postalCode,
      streetAddress,
      addressOptional,
      phone,
      fax,
      email,
      primary
    } = this.state;
    return (
      <section className='add-new-office'>
        <div className='add-new-office-container'>

          <div className='adress-container'>
            <div className='country-wrapper'>
              <span className='country__logo'>
                *Country:
              </span>
              <select onChange={this.handleSelectInput.bind(this)} value={country} className='country__select' id='country'>
                {options.map((country, index) => {
                  return <option key={index}>{country}</option>
                })}
              </select>
            </div>
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='*State/Province:'
              value={state}
              fieldName={'state'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='*Postal Code:'
              value={postalCode}
              fieldName={'postalCode'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='*City:'
              value={city}
              fieldName={'city'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='*Street Address:'
              value={streetAddress}
              fieldName={'streetAddress'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='Address 2:'
              value={addressOptional}
              fieldName={'addressOptional'}
            />
          </div>
          <div className='contacts-container'>
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='Phone:'
              value={phone}
              fieldName={'phone'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='Fax:'
              value={fax}
              fieldName={'fax'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              logo='Email:'
              value={email}
              fieldName={'email'}
            />
            <Input
              handleInput={this.handleInput.bind(this)}
              inputType='checkbox'
              logo='Office Type'
              value={primary}
              fieldName='primary'
            >Primary HQ</Input>
          </div>

          <div className='buttons-container'>
            <Button theme='button__remove-theme' onClickCallBack={() => { }}>Cancel</Button>
            <Button theme='button__edit-theme' onClickCallBack={() => { }}>Save</Button>
          </div>
        </div>
      </section>
    )
  }
}


export default AddNewOffice;

