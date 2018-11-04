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
var firebaseRef = database.ref('Users/');
var firebaseRefLeaderboard = database.ref('Leaderboard/');

var fname;
var lname;
var email;
var pswd;
var c_pswd;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user signed in");
      
      // create leaderboard entry for new user
      firebase.database().ref('Leaderboard/' + user.uid).set({
        email: email.value,
        totalScore: 0
      });

      // upon sign up, send user to hangman page
      window.location = "index.html"
    } else {
      // No user is signed in.
      console.log("user not signed in");
    }
  });