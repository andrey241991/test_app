import React, { Component } from 'react';
import './style.css';
import Button from '../Button';

// const adressItems = (items) => {
//   {
//     return items.map((item) => {
//       <span>{item}</span>
//     }

// }

const OfficeItem = ({ primary, adress, phone, email, fax, id, removeOffice, editOffice }) => {

  return (
    <section className='office-item'>
      <div className='office-item-container'>
        <div className='adress-container'>
          <span className='adress-container__title'>Address:</span>
          <div>
            {primary ? <div className='adress-container__primary'>&#10004; Primary HQ</div> : false}
            <div className='adress-container__item' >
              {adress ?
                adress.map((item) => {
                  return <span>{item}</span>
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
          <Button theme='button__remove-theme' onClickCallBack={() => removeOffice(id)}>Remove</Button>
          <Button theme='button__edit-theme' onClickCallBack={() => editOffice(id)}>Edit</Button>
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