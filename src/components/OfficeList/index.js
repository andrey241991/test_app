import React, { Component } from 'react';
import './style.css';
import OfficeItem from '../OfficeItem';

const OfficeList = ({ offices, removeOffice, editOffice }) => {
    return offices.map(item => {
        return <OfficeItem
            primary={item.primary}
            adress={item.adress}
            phone={item.phone}
            email={item.email}
            fax={item.fax}
            id={item.id}
            removeOffice={removeOffice}
            editOffice={editOffice}
        />
    })
}

export default OfficeList;


