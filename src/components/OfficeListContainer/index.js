import React, { Component } from 'react';
import './style.css';
import OfficeList from '../OfficeList';
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import { generateID } from '../../utils/utils'

const firebaseConfig = {
    apiKey: "AIzaSyCoCOFTkFvJCtj8-_F31_WXop9SBYiW9lE",
    authDomain: "officeapp-a0ad9.firebaseapp.com",
    databaseURL: "https://officeapp-a0ad9.firebaseio.com",
    projectId: "officeapp-a0ad9",
    storageBucket: "officeapp-a0ad9.appspot.com",
    messagingSenderId: "103183867653",
    appId: "1:103183867653:web:bc4ee164e988e70957216c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class OfficeListContainer extends React.Component {


    componentDidMount() {
        this.getOffices();
    }

    async getOffices() {
        let items = [];
        await db.collection('offices').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let item = doc.data();
                items.push(item)
            });
        });
        this.props.setOffices(items);
    }

    async removeOffice(id) {
        const officeQuery = db.collection('offices').where('id', '==', id);
        officeQuery.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });

        let items = [];
        await db.collection('offices').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let item = doc.data();
                if (item.id !== id) {
                    items.push(item)
                }
            });
        });
        this.props.setOffices(items);
    }

    editOffice(id) {
        console.log('update id = ', id);
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
        removeOffice: () => {
            dispatch();
        },
        // sendMessage: () =>{
        //     dispatch(addMessageActionCreator() );
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListContainer);
