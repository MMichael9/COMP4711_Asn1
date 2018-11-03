createButtons();
// Create the buttons (Alphabet) that is used to guess the word and append to the corresponding div
function createButtons() {

    for(var i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode(alphabet[i]);
        btn.setAttribute("class", "alphabet");
        btn.setAttribute("id", alphabet[i]);
        btn.setAttribute("value", alphabet[i]);
        btn.onclick = buttonOnClick;
        btn.appendChild(t);

        document.getElementById('alphaBtns').appendChild(btn);
    }

}

// Add area that stores the word the user is trying to guess
function addWordHolder() {

    var wordHolder = document.getElementById('word');
    var correct = document.createElement('ul');

    for (var i = 0; i < chosenWord.length; i++) {
        correct.setAttribute('id',  'chosenWord');
        var guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        guess.setAttribute('id', 't'+i);
        guess.innerHTML = "_";

        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }

}

// Retrieve Div that holds the definition and write it depending on the chosen word
function getDefn() {

    document.getElementById('defn').innerHTML = definitions[wordsIndex];

}

// Disable alphabet buttons so they cant be clicked
function disableButtons() {

    var btns = document.getElementsByClassName('alphabet');

    var i;
    for (i = 0; i < btns.length; i++) {

        btns[i].disabled = true;
    }

}

// Display correct number of tries remaining (called on reset)
function updateStats() {

    var tries = document.getElementById('tries');
    tries.setAttribute("class", "tryMsg");
    tries.innerHTML = "Number of Tries Remaining : " + attemptsLeft;
}

// Enable alphabet buttons upon reset
function enableButtons() {
    
    var btns = document.getElementsByClassName('alphabet');

    var i;
    for (i = 0; i < btns.length; i++) {

        btns[i].disabled = false;
    }

}

// When restarting, divs need to be cleared and then re added based on new word chosen
function deleteDivs() {

    var div = document.getElementById('word');

    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    addWordHolder();

    var defnDiv = document.getElementById('defn');

    defnDiv.removeChild(defnDiv.firstChild);

    getDefn();
}

// Update the text underneath title to display a Congratulations message if the user guesses the word
function displayWinMsg() {

    var tries = document.getElementById('tries');
    tries.setAttribute("class", "winMsg");
    tries.innerHTML = "Congratulations...You Win";
}

// Update the text underneath title to display a game over message if the user guesses the word
function displayLoseMsg() {

    var tries = document.getElementById('tries');
    tries.setAttribute("class", "loseMsg");
    tries.innerHTML = "Game Over...You Lose";

}