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
var firebaseRef = database.ref('Dictionary/');
var firebaseRefLeaderboard = database.ref('Leaderboard/');

//Hangman variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chosenWord;
var wordsIndex;
var score = 0;
var attemptsLeft = 7;
var correct = 0;

//Firebase variables
var currentUser;
var currentUserID;
var totalScoreDB;
var word_list = [];

// Determine if User is signed in or not
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    currentUser = firebase.auth().currentUser.email;
    currentUserID = user.uid;
    console.log("user signed in");
  } else {
    // No user is signed in.
    console.log("user not signed in");
    window.location = 'login.html'
  }
});

// Retrieve Users totalScore for Leaderboard
var ref = firebase.database().ref()

ref.child("Leaderboard").once('value', gotUserData);

function gotUserData(snapshot) {

  snapshot.forEach(userSnapshot => {

    let email = userSnapshot.val().email;

    if (currentUser == email) {
      totalScoreDB = userSnapshot.val().totalScore;
    }
  });

}

// Load dictionary from database then begin the game
firebaseRef.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

        let item = childSnapshot.val();

        word_list.push(item);
        });
}).then(function() {
  createButtons();  
  loadGame();
});