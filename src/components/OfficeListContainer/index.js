import React, { Component } from 'react';
import './style.css';
import OfficeList from '../OfficeList';
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import { getAll, remove, getById } from '../../db/dataBase'
import CustomLoader from '../CustomLoader';
import { fail } from 'assert';
import ConfirmationComponent from '../ConfirmationComponent';


class OfficeListContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isLoaderVisible: false,
            isConfirmationWindowVisible: false,
            itemId: ''
        };
    }

    componentDidMount() {
        this.getOffices();
    }

    showLoader() {
        this.setState({
            isLoaderVisible: !this.state.isLoaderVisible,
        })
    }

    async getOffices() {
        this.setState({
            isLoaderVisible: true,
        })
        let items = getAll();
        items.then(items => {
            this.props.setOffices(items);
        })
        this.setState({
            isLoaderVisible: false,
        })
    }

    showConfirmationRemoveWindow(id) {
        this.setState({
            isConfirmationWindowVisible: true,
            itemId: id
        })
    }

    hideConfirmationRemoveWindow = () => {
        this.setState({
            isConfirmationWindowVisible: false,
        })
    }

    async removeOffice() {
        // console.log('removeOffice id2 =', this.state.itemId);

        let items = remove(this.state.itemId);
        items.then(items => {
            this.props.setOffices(items);
        })
        this.setState({
            isConfirmationWindowVisible: false,
        })
        // console.log('removeOffice id =', id);



        // this.setState({
        //     isLoaderVisible: false,
        // })
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
        const { isConfirmationWindowVisible } = this.state
        return (
            <>
                <OfficeList
                    offices={this.props.offices}
                    showConfirmationRemoveWindow={this.showConfirmationRemoveWindow.bind(this)}
                    editOffice={this.editOffice.bind(this)}
                />
                <CustomLoader visible={this.state.isLoaderVisible} />
                <div className={isConfirmationWindowVisible ? 'confirmation-component__wrapper' : 'confirmation-component__wrapper--not-visible'}>
                    <ConfirmationComponent hideConfirmationRemoveWindow={this.hideConfirmationRemoveWindow} removeOffice={this.removeOffice.bind(this)} />
                </div>
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
        setOffices: (offices) => {
            dispatch(setOfficesActionCreator(offices));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListContainer);
