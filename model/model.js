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

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["tattoo", "electricity", "hockey", "basketball", "tennis", "clock", "speaker", "database", "computer", "programming"];
var definitions = ["a form of body modification where a design is made by inserting ink", 
                   "the set of physical phenomena associated with the presence and motion of electric charge.",
                   "sport played with a black rubber circle", 
                   "sport played on a wooden court", 
                   "sport played with a green ball", 
                   "this thing tells time", 
                   "this thing plays music very loud", 
                   "a structured set of data held in a computer, especially one that is accessible in various ways", 
                   "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program", 
                   "the action or process of writing computer programs"];
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


firebaseRef.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

        let item = childSnapshot.val();

        word_list.push(item);
        });
}).then(function() {
    loadGame();
});