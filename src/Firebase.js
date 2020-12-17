import firebase from 'firebase'

let firebaseApp = firebase.initializeApp({  
        apiKey: "AIzaSyBeSlsUiMPN2ujuLK8WUDKn2jYVWhv3YUU",
        authDomain: "portfolio-x-react-contact-form.firebaseapp.com",
        databaseURL: "https://portfolio-x-react-contact-form-default-rtdb.firebaseio.com",
        projectId: "portfolio-x-react-contact-form",
        storageBucket: "portfolio-x-react-contact-form.appspot.com",
        messagingSenderId: "356580898489",
        appId: "1:356580898489:web:d822e91dcaeb9df5854d68"

        })

let db = firebaseApp.firestore();

export { db }