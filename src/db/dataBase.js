
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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export async function getAll() {
    let items = [];
    await db.collection('offices').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let item = doc.data();
            items.push(item)
        });
    });
    return items;
}

export async function getById(id) {
    let items = [];
    await db.collection('offices').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let item = doc.data();
            if (item.id === id) {
                items.push(item)
            }
        });
    });
    return items;


    // const officeQuery = db.collection('offices').where('id', '==', id);
    // let items = [];
    // await db.collection('offices').where('id', '==', id).then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //         let item = doc.data();
    //         console.log('MyItem = ', item)
    //         // items.push(item)
    //     });
    // });
    // return items;
}

export async function remove(id) {
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
    return items;
}

export async function add(newOffice) {
    const items = db.collection('offices').add(newOffice);
    return items;
}


export async function update(id, updatedOffice) {
    await db.collection("offices").where("id", "==", id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            db.collection("offices").doc(doc.id).update({...updatedOffice});
        });
   })

   let items = [];
   await db.collection('offices').get().then((snapshot) => {
       snapshot.docs.forEach(doc => {
           let item = doc.data();
           items.push(item)
       });
   });
   return items;
}







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