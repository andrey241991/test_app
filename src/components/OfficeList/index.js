import React, { Component } from 'react';
import './style.css';
import OfficeItem from '../OfficeItem';
import PropTypes from 'prop-types';

const OfficeList = ({ offices, removeOffice, editOffice }) => {
    return offices.map(item => {
        return <OfficeItem
            key={item.id}
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

OfficeList.defaultProps = {
    phone: '',
    email: '',
    fax: '',
};

OfficeList.propTypes = {
    offices: PropTypes.array.isRequired,
    removeOffice: PropTypes.func.isRequired,
    editOffice: PropTypes.func.isRequired
};

export default OfficeList;


