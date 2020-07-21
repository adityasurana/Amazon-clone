import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBzD-Gc0RdQgzyh8CRSYKLR_3dCXwEqpvU",
        authDomain: "clone-c946e.firebaseapp.com",
        databaseURL: "https://clone-c946e.firebaseio.com",
        projectId: "clone-c946e",
        storageBucket: "clone-c946e.appspot.com",
        messagingSenderId: "845790834521",
        appId: "1:845790834521:web:cb5401817653b45970a648",
        measurementId: "G-G8H35PFF97"
})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export {auth}