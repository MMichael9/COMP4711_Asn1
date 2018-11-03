// Load in game elements when the page is created
function loadGame() {
    console.log("Loading Game...");

    // Call functions to create/populate UI
    getWord();
    addWordHolder();
    getDefn();

    let user = document.getElementById('user');
    user.innerHTML = user.innerHTML + currentUser;

}

// Randomly selects a word from array and assigns it for guessing
function getWord() {
    var x = Math.floor((Math.random() * words.length));

    chosenWord = word_list[x].word;
    wordsIndex = x;
}

// Alphabet button on click method - determines if user guess is correct/incorrect
// Performs tasks depending on users guess
function buttonOnClick() {

    var temp = this.innerHTML; // get the button

    var flag = 0; // flag used to determine if user guess is correct

    for (var i = 0; i < chosenWord.length; i++) {

        if(temp == chosenWord[i]) {
            score++;
            correct++;

            document.getElementById('score').innerHTML = "Score : " + score;
            var currentBlock = document.getElementById('t'+i);
            currentBlock.innerHTML = chosenWord[i];
            flag = 1;
        }

    }


    if (flag == 0) {
        score--;
        document.getElementById('score').innerHTML = "Score : " + score;
        document.getElementById('tries').innerHTML = "Number of Tries Remaining : " + --attemptsLeft;
    }

    this.disabled = true;

    checkVictory();
    checkAttempts();
}

// Check if user has guessed every letter of the chosen word
function checkVictory() {

    if (correct == chosenWord.length) {
        disableButtons();

        displayWinMsg();
    }

}

// Check if user has run out of guesses
function checkAttempts() {

    if(attemptsLeft == 0) {
        disableButtons();

        displayLoseMsg();
    }

}

// Resets the game but keeps user score
function resetGame() {

    attemptsLeft = 7;
    correct = 0;

    updateStats();
    getWord();
    enableButtons();

    deleteDivs();

    /*
    for (let i = 0; i < words.length; i++) {
        
        let newWord = {word: words[i], def: definitions[i]}
        let newChildRef = firebaseRef.push();
        newChildRef.set(newWord);

    }
    */

}

goToLeaderboard = () => {
    window.location = 'leaderboard.html';
}

goToLogin = () => {
    window.location = 'login.html';
}

window.onbeforeunload = function (e) {
    console.log("updatescore");

    console.log("update score");
    var db = firebase.database();
    db.ref("Leaderboard/" + currentUserID + "/totalScore").set(totalScoreDB + score);

}