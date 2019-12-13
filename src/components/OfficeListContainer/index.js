import React, { Component } from 'react';
import './style.css';
import OfficeList from '../OfficeList';
import * as firebase from 'firebase';
import { connect } from 'react-redux'
import { setOfficesActionCreator } from '../../redux/office-reducer';
import {generateID} from '../../utils/utils'

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

class OfficeListContainer extends React.Component {

    componentDidMount() {
        this.getOffices();
    }

    async getOffices() {
        let items = [];
        const db = firebase.firestore();
        await db.collection('offices').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let item = doc.data();
                items.push(item)
            });
        });
        this.props.setOffices(items);
    }

    removeOffice(id){
        console.log('heelos id = ', id);
        // let items = [];
        // const db = firebase.firestore();
        // await db.collection('offices').r  get().then((snapshot) => {
        //     snapshot.docs.forEach(doc => {
        //         let item = doc.data();
        //         items.push(item)
        //     });
        // });
        // this.props.setOffices(items);
    }

    editOffice(id){
        console.log('update id = ', id);
    }



    render() {
        return (
            <OfficeList offices={this.props.offices}
            removeOffice={this.removeOffice}
            editOffice={this.editOffice} />
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
        removeOffice: () =>{
            dispatch();
        },
        // sendMessage: () =>{
        //     dispatch(addMessageActionCreator() );
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeListContainer);

// OfficeListContainer = connect(mapStateToProps, mapDispatchToProps)(OfficeList);
// export default OfficeListContainer;




// setToDataBase() {
//     console.log('firebetToDataBasease IS CALL');
//     const db = firebase.firestore();
//     db.settings({
//         timestampsInSnapshots: true
//     });
//     const userRef = db.collection('offices').add({
//         adress: ['myAdress'],
//         email: 'myEmail',
//         phone: '+380947878'
//     });
// }

// getOffices() {
//     let items = [];
//     const db = firebase.firestore();
//     db.collection('offices').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//             let item = doc.data();
//             item = JSON.stringify(item);
//             items.push(item)
//         });
//     });
//     this.setState({
//         offices: items
//     })
// }

// componentDidMount() {
//     this.getOffices();
// }

