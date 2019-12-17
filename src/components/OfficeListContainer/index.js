import React, { Component } from 'react';
import './style.css';
import OfficeList from '../OfficeList';
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import { getAll, remove, getById } from '../../db/dataBase'


class OfficeListContainer extends React.Component {

    componentDidMount() {
        this.getOffices();
    }

    async getOffices() {
        let items = getAll();
        items.then(items => {
            this.props.setOffices(items);
        })
    }

    async removeOffice(id) {
        let items = remove(id);
        items.then(items => {
            this.props.setOffices(items);
        })
    }

    async getOfficeById(id) {
        let item = getById(id);
        console.log('id', id);
        console.log('item mu', item);
        item.then(items => {
            this.props.setOffices(items);
        })
    }

    editOffice(id) {
        this.props.showEditOfficeAndSetItemId(id);
    }

    render() {
        return (
            <OfficeList
                offices={this.props.offices}
                removeOffice={this.removeOffice.bind(this)}
                editOffice={this.editOffice.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListContainer);
