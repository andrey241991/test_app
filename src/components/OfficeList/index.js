import React, { Component } from 'react';
import './style.css';
import OfficeItem from '../OfficeItem';
import PropTypes from 'prop-types';

const OfficeList = ({ offices, showConfirmationRemoveWindow, editOffice }) => {
    return offices.map(item => {
        return <OfficeItem
            key={item.id}
            primary={item.primary}
            adress={item.adress}
            phone={item.phone}
            email={item.email}
            fax={item.fax}
            id={item.id}
            showConfirmationRemoveWindow={showConfirmationRemoveWindow}
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
    showConfirmationRemoveWindow: PropTypes.func.isRequired,
    editOffice: PropTypes.func.isRequired
};

export default OfficeList;


