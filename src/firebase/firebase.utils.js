import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaiXm3rMz2L5ND5Yvdja0Sqss4IHwWP1w",
    authDomain: "crwn-db-3eaee.firebaseapp.com",
    databaseURL: "https://crwn-db-3eaee.firebaseio.com",
    projectId: "crwn-db-3eaee",
    storageBucket: "crwn-db-3eaee.appspot.com",
    messagingSenderId: "2605796775",
    appId: "1:2605796775:web:ef09c5a1d6d14f0be27a82",
    measurementId: "G-0VFHEPVRZE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }

    console.log(firestore.doc('users/asdfghj'))
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;