import firebase from 'firebase';
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyBf1UaR8UNMk-755El8jjw1DPctrBy31ag",
    authDomain: "degroof-petercam-challenge.firebaseapp.com",
    databaseURL: "https://degroof-petercam-challenge.firebaseio.com",
    projectId: "degroof-petercam-challenge",
    storageBucket: "degroof-petercam-challenge.appspot.com",
    messagingSenderId: "337414494229"
};

const base = firebase.initializeApp(config);

export default base;


componentWillMount(){
	config = {
	    apiKey:,
	    authDomain:,
	    databaseURL: ,
	    storageBucket: ,
	    messagingSenderId:
		};
		firebase.initializeApp(config);
	}
