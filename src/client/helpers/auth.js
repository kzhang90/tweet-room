import firebase from 'firebase';
import { firebaseAuth } from '../config/constants';

const provider = new firebaseAuth.TwitterAuthProvider();

export function signIn() {
  return firebase.auth().signInWithRedirect(provider);
}

export function retrieveTwitterToken() {
  return firebase.auth().getRedirectResult().then(function(result) {
          if (result.credential) {
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
          }
          var user = result.user;  
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        })
  
}

export function logout() {
  return firebase.auth().signOut().then(function() {
   console.log("signout successful"); 
  }, function(error) {
    console.log(error);
  });
}

