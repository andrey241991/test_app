import React, { Component } from 'react';
import './style.css';
import OfficeList from '../OfficeList';
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import { getAll, remove, getById } from '../../db/dataBase'
import CustomLoader from '../CustomLoader';
import { fail } from 'assert';


class OfficeListContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isLoaderVisible: false,
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

    async removeOffice(id) {
        this.setState({
            isLoaderVisible: true,
        })
        let items = remove(id);
        items.then(items => {
            this.props.setOffices(items);
        })
        // this.setState({
        //     isLoaderVisible: false,
        // })
    }

    async getOfficeById(id) {
        this.showLoader();
        let item = getById(id);
        console.log('id', id);
        console.log('item mu', item);
        item.then(items => {
            this.props.setOffices(items);
        })
        this.showLoader();
    }

    editOffice(id) {
        this.props.showEditOfficeAndSetItemId(id);
    }

    render() {
        return (
            <>
                <OfficeList
                    offices={this.props.offices}
                    removeOffice={this.removeOffice.bind(this)}
                    editOffice={this.editOffice.bind(this)}
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
        setOffices: (offices) => {
            dispatch(setOfficesActionCreator(offices));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListContainer);
