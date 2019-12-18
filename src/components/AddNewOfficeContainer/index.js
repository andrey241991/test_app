import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux'
import { generateID } from '../../utils/utils'
import AddNewOffice from '../AddNewOffice';
import { options } from '../../countries'
import { addOfficeActionCreator, setOfficesActionCreator } from '../../redux/office-reducer';
import { getAll, add } from '../../db/dataBase'
import CustomLoader from '../CustomLoader';

class AddNewOfficeContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
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
            isInputError: false,
            isLoaderVisible: false,
        };
        console.log('AddNewOfficeContainer')
    }

    addNewOffice() {

        this.setState({
            isLoaderVisible: true
        })

        const {
            primary,
            country,
            province,
            postalCode,
            city,
            streetAddress,
            addressOptional,
            phone,
            fax,
            email,
        } = this.state;

        if (province === '' || postalCode === '' || city === '' || streetAddress === '') {
            alert('The required fields should not be empty');
            return;
        }

        let adress = [country, province, postalCode, city, streetAddress, addressOptional];
        const id = generateID();
        const newOffice = {
            id,
            primary,
            adress: adress,
            phone,
            fax,
            email,
        }
        this.addOffice(newOffice);
        this.cleanFields();
        this.setState({
            isLoaderVisible: false
        })
    }

    async addOffice(newOffice) {
        add(newOffice);
        this.getOffices();
    }

    async getOffices() {
        let items = getAll();
        items.then(items => {
            this.props.setOffices(items);
        })
    }

    cleanFields() {
        this.setState({
            country: options[0],
            primary: false,
            postalCode: '',
            city: '',
            streetAddress: '',
            addressOptional: '',
            phone: '',
            fax: '',
            email: '',
            province: ''
        })
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

    render() {
        return (
            <>
                <AddNewOffice
                    state={this.state}
                    hideOffice={this.props.hideOffice}
                    addNewOffice={this.addNewOffice.bind(this)}
                    handleInput={this.handleInput.bind(this)}
                    handleSelectInput={this.handleSelectInput.bind(this)}
                />
                <CustomLoader visible={this.state.isLoaderVisible} />
            </>
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
        addOffice: (office) => {
            dispatch(addOfficeActionCreator(office));
        },
        setOffices: (offices) => {
            dispatch(setOfficesActionCreator(offices));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOfficeContainer);
