import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHppoJWabmd8Ylle91l5wQfDsdnV5_LdE",
    authDomain: "tweet-room-566c7.firebaseapp.com",
    databaseURL: "https://tweet-room-566c7.firebaseio.com",
    storageBucket: "tweet-room-566c7.appspot.com",
    messagingSenderId: "352524755739"
};

firebase.initializeApp(config);

// export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;