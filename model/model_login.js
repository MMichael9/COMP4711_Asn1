// Initialize Firebase
var config = {
    apiKey: "AIzaSyDR5hsMLjPlOnGlNinEtqEtozA2gX9_qxA",
    authDomain: "hangmandb-b579d.firebaseapp.com",
    databaseURL: "https://hangmandb-b579d.firebaseio.com",
    projectId: "hangmandb-b579d",
    storageBucket: "hangmandb-b579d.appspot.com",
    messagingSenderId: "529453448978"};
firebase.initializeApp(config);

var database = firebase.database();

var email;
var pswd;

firebase.auth().signOut();

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'index.html'; //After successful login, user will be redirected to home.html
    }
  });