import React, { Component } from 'react';
import './style.css';
import Button from '../Button';

// const adressItems = (items) => {
//   {
//     return items.map((item) => {
//       <span>{item}</span>
//     }

// }

const OfficeItem = ({ adress, phone, email, fax }) => {

  return (
    <section className='office-item'>
      <div className='office-item-container'>
        <div className='adress-container'>
          <span className='adress-container__title'>Address:</span>
          <div className='adress-container__item' >
            {adress ?
              adress.map((item) => {
                return <span>{item}</span>
              }) :
              false
            }
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
          <Button theme='button__remove-theme'>Remove</Button>
          <Button theme='button__edit-theme'>Edit</Button>
        </div>
      </div>
    </section>
  );
}


export default OfficeItem;

  //  {/* {adress ?
  //               adress.map((item) => {
  //                 return <span>{item}</span>
  //               }) :
  //               false
  //             } */}


  // const adressItems = adress.map(item =>
  //   <span>{item}</span>
  // );