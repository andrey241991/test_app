import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import { options } from '../../countries'
import Input from '../Input';


class AddNewOffice extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <section className='add-new-office'>
        <div className='add-new-office-container'>
          <div className='adress-container'>
            <div className='country-wrapper'>
              <span className='country__logo'>
                *Country:
              </span>
              <select id='country'>
                {options.map((country, index) => {
                  return <option key={index}>{country}</option>
                })}
              </select>
            </div>
            <Input
              logo='*State/Province:'
            />
            <Input
              logo='*Postal Code:'
            />
            <Input
              logo='*City:'
            />
            <Input
              logo='*Street Address:'
            />
            <Input
              logo='Address 2:'
            />
          </div>
          <div className='contacts-container'>
            <Input
              logo='Phone:'
            />
            <Input
              logo='Fax:'
            />
            <Input
              logo='Email:'
            />
            <Input
              inpuType='checkbox'
              logo='Office Type:'
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

