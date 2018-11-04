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
var firebaseRefLeaderboard = database.ref('Leaderboard/');

// array of users scores
var scores = [];

// push each item from database into the score array, 
//display the leaderboard upon completion
firebaseRefLeaderboard.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

        let item = childSnapshot.val();
        console.log(item);

        scores.push(item);
        });
}).then(function() {
    displayLeaderboard();
});
