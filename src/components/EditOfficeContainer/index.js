import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux'
import AddNewOffice from '../AddNewOffice';
import { options } from '../../countries'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import {getById, update } from '../../db/dataBase'

class EditOfficeContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            id: '',
            country: options[0],
            province: '',
            postalCode: '',
            city: '',
            streetAddress: '',
            addressOptional: '',
            phone: '',
            fax: '',
            email: '',
            primary: false,
            itemId: props.editedItemId,
        };
        console.log('EditOfficeContainer')
    }

    addNewOffice() {
        const {
            id,
            primary,
            country,
            postalCode,
            province,
            city,
            streetAddress,
            addressOptional = '',
            phone='',
            fax='',
            email='',
        } = this.state;

        let adress = [country, province, postalCode, city, streetAddress, addressOptional];
        const newOffice = {
            id,
            primary,
            adress: adress,
            phone,
            fax,
            email,
        }

        let items = update(id, newOffice);
        items.then(items => {
            this.props.setOffices(items);
        })
    }

    setFields = (item) => {
        console.log('ITEM = ', item); // 1
        this.setState({
            id: item.id,
            country: item.adress[0],
            province: item.adress[1],
            postalCode: item.adress[2],
            city: item.adress[3],
            streetAddress: item.adress[4],
            addressOptional: item.adress[5],
            email: item.email,
            fax: item.fax,
            phone: item.phone,
            primary: item.primary,
        })
    }

    async getOfficeById() {
        let items = getById(this.props.editedItemId);
        Promise.resolve(items).then(item => {
            this.setFields(item[0]);
        });
    }

    handleInput(type, body) {
        if (type === 'primary') {
            this.setState({
                primary: !this.state.primary
            })
        } else {
            this.setState({
                [type]: body
            })
        }
    }

    handleSelectInput(e) {
        this.setState({
            country: e.target.value
        })
    }


    componentDidUpdate(prevProps) {
        if (this.props.editedItemId !== prevProps.editedItemId) {
            this.getOfficeById();
        }
    }

    render() {
        console.log('render email', this.state.email);
        return (
            <AddNewOffice
                state={this.state}
                hideOffice={this.props.hideOffice}
                addNewOffice={this.addNewOffice.bind(this)}
                handleInput={this.handleInput.bind(this)}
                handleSelectInput={this.handleSelectInput.bind(this)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offices: state.officePage.offices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOffices: (offices) => {
            dispatch(setOfficesActionCreator(offices));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOfficeContainer);
