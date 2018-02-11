import firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyCFWMkQYukgmqVDmTxcJWLloeat4tBSA_c",
authDomain: "t9-hack-574a5.firebaseapp.com",
databaseURL: "https://t9-hack-574a5.firebaseio.com",
projectId: "t9-hack-574a5",
storageBucket: "t9-hack-574a5.appspot.com",
messagingSenderId: "396333789146"
};
var fire = firebase.initializeApp(config);
export default fire;