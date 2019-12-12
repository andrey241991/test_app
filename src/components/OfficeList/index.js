import React, { Component } from 'react';
import './style.css';
import OfficeItem from '../OfficeItem';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCoCOFTkFvJCtj8-_F31_WXop9SBYiW9lE",
    authDomain: "officeapp-a0ad9.firebaseapp.com",
    databaseURL: "https://officeapp-a0ad9.firebaseio.com",
    projectId: "officeapp-a0ad9",
    storageBucket: "officeapp-a0ad9.appspot.com",
    messagingSenderId: "103183867653",
    appId: "1:103183867653:web:bc4ee164e988e70957216c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class OfficeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offices: []
        };
    }

    componentDidMount() {
        this.getOffices();
    }

    setToDataBase() {
        console.log('firebetToDataBasease IS CALL');
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('offices').add({
            adress: ['myAdress'],
            email: 'myEmail',
            phone: '+380947878'
        });
    }

    getOffices() {
        let items = [];
        const db = firebase.firestore();
        db.collection('offices').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let item = doc.data();
                item = JSON.stringify(item);
                items.push(item)
            });
        });
        this.setState({
            offices: items
        })
    }


    render() {
        let { offices } = this.state;
        return (
            <div>
                {console.log('offices in render = ', offices)}
                {offices[0] ? <h2>{offices[0].email}</h2> : false}
                {console.log('offices in render2  = ', offices[0].email)}
                {/* {offices.map(item => {
                    debugger;
                    return <OfficeItem
                        adress={item.adress}
                        phone={item.phone}
                        email={item.email}
                        fax={item.fax}
                    />
                })} */}
            </div>
        );
    }
}

export default OfficeList;


// {
//     id: '0',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
//     email: 'msft@microsoft.com',
//     fax: '+44 (0)87 0602 0100'
// },
// {
//     id: '1',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
// },
// {
//     id: '2',
//     adress: ['Thames Valley Park', 'Reading',
//         'Berkshire, England RG6 1WG', 'United Kingdom'
//     ],
//     phone: '+ 1(425) 882 - 8080',
//     email: 'msft@microsoft.com',
// }