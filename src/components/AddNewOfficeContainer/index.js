import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux'
import { generateID } from '../../utils/utils'
import AddNewOffice from '../AddNewOffice';
import { options } from '../../countries'
import { addOfficeActionCreator } from '../../redux/office-reducer';

// const firebaseConfig = {
//     apiKey: "AIzaSyCoCOFTkFvJCtj8-_F31_WXop9SBYiW9lE",
//     authDomain: "officeapp-a0ad9.firebaseapp.com",
//     databaseURL: "https://officeapp-a0ad9.firebaseio.com",
//     projectId: "officeapp-a0ad9",
//     storageBucket: "officeapp-a0ad9.appspot.com",
//     messagingSenderId: "103183867653",
//     appId: "1:103183867653:web:bc4ee164e988e70957216c"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

class AddNewOfficeContainer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            country: options[0],
            postalCode: '',
            city: '',
            streetAddress: '',
            addressOptional: '',
            phone: '',
            fax: '',
            email: '',
            primary: false,
        };
    }

    addNewOffice() {
        const {
            primary,
            country,
            postalCode,
            city,
            streetAddress,
            addressOptional,
            phone,
            fax,
            email,
        } = this.state;
        let adress = [country, postalCode, city, streetAddress, addressOptional];
        const id = generateID();
        const newOffice = {
            id,
            primary,
            country,
            adress:adress,
            phone,
            fax,
            email,
        }
        console.log('newOffice', newOffice);
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
        console.log('type', e.target.value);
        this.setState({
            country: e.target.value
        })
    }

    render() {
        // const {
        //     country,
        //     state,
        //     city,
        //     postalCode,
        //     streetAddress,
        //     addressOptional,
        //     phone,
        //     fax,
        //     email,
        //     primary,
        //     hideAddNewOffice,
        //     addNewOffice
        // } = this.state;

        return (
            <AddNewOffice
                hideAddNewOffice={this.props.hideAddNewOffice}
                offices={this.props.offices}
                addNewOffice={this.addNewOffice.bind(this)}
                handleInput={this.handleInput.bind(this)}
                handleSelectInput={this.handleSelectInput.bind(this)}


            // country={country}

            // city={city}
            // postalCode={postalCode}
            // streetAddress={streetAddress}
            // addressOptional={addressOptional}
            // phone={phone}
            // fax={fax}
            // email={email}
            // primary={primary}
            // hideAddNewOffice={hideAddNewOffice}

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
        addOffice: (office) =>{
            dispatch(addOfficeActionCreator(office));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOfficeContainer);

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

