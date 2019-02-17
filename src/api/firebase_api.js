import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCzzIbgLOLRWdWrSVVIopYTwr4H7HDnn00",
    authDomain: "crypto-site-mockup.firebaseapp.com",
    databaseURL: "https://crypto-site-mockup.firebaseio.com",
    projectId: "crypto-site-mockup",
    storageBucket: "crypto-site-mockup.appspot.com",
    messagingSenderId: "104291122356"
};
const fireBaseApi = firebase.initializeApp(config);
const db = firebase.firestore();

export function registerUser(email, password, successCallback) {
    fireBaseApi.auth().createUserWithEmailAndPassword(email, password).then(function () {
        successCallback();
    }, function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
    })
}

export function signInUser(email, password, successCallback) {
    fireBaseApi.auth().signInWithEmailAndPassword(email, password).then(function () {
        successCallback();
    }, function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
    })
}

export function signOutUser(successCallback) {
    fireBaseApi.auth().signOut().then(function () {
        successCallback()
    }).catch(function (error) {
        console.log(error);
    });
}

export function singInUsingGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    fireBaseApi.auth().signInWithPopup(googleProvider).then(function (result) {
        // const token = result.credential.accessToken;
        // const user = result.user;
    }).catch(function (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
    });
}

export function addToCollection(docID, data, collectionName) {
    db.collection(collectionName).doc(docID).set({
        ...data
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }, function (error) {
            console.error("Error adding document: ", error);
        });
}

export function readFromCollection(docID, collectionName) {
    const docRef = db.collection(collectionName).doc(docID);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }, function (error) {
        console.log("Error getting document:", error);
    });
}