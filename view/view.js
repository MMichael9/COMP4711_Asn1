// Create the buttons (Alphabet) that is used to guess the word and append to the corresponding div
createButtons = () => {

    for(let i = 0; i < alphabet.length; i++) {
        let btn = document.createElement("BUTTON");
        let t = document.createTextNode(alphabet[i]);
        btn.setAttribute("class", "alphabet");
        btn.setAttribute("id", alphabet[i]);
        btn.setAttribute("value", alphabet[i]);
        btn.onclick = buttonOnClick;
        btn.appendChild(t);

        document.getElementById('alphaBtns').appendChild(btn);
    }

}

// Add area that stores the word the user is trying to guess
addWordHolder = () => {

    let wordHolder = document.getElementById('word');
    let correct = document.createElement('ul');

    for (let i = 0; i < chosenWord.length; i++) {
        correct.setAttribute('id',  'chosenWord');
        let guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        guess.setAttribute('id', 't'+i);
        guess.innerHTML = "_";

        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }

}

// Retrieve Div that holds the definition and write it depending on the chosen word
getDefn = () => {

    document.getElementById('defn').innerHTML = word_list[wordsIndex].def;

}

// Disable alphabet buttons so they cant be clicked
disableButtons = () => {

    let btns = document.getElementsByClassName('alphabet');

    let i;
    for (i = 0; i < btns.length; i++) {

        btns[i].disabled = true;
    }

}

// Display correct number of tries remaining (called on reset)
updateStats = () => {

    let tries = document.getElementById('tries');
    tries.setAttribute("class", "tryMsg");
    tries.innerHTML = "Number of Tries Remaining : " + attemptsLeft;
}

// Enable alphabet buttons upon reset
enableButtons = () => {
    
    let btns = document.getElementsByClassName('alphabet');

    let i;
    for (i = 0; i < btns.length; i++) {

        btns[i].disabled = false;
    }

}

// When restarting, divs need to be cleared and then re added based on new word chosen
deleteDivs = () => {

    let div = document.getElementById('word');

    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    addWordHolder();

    let defnDiv = document.getElementById('defn');

    defnDiv.removeChild(defnDiv.firstChild);

    getDefn();
}

// Update the text underneath title to display a Congratulations message if the user guesses the word
displayWinMsg = () => {

    let tries = document.getElementById('tries');
    tries.setAttribute("class", "winMsg");
    tries.innerHTML = "Congratulations...You Win";
}

// Update the text underneath title to display a game over message if the user guesses the word
displayLoseMsg = () => {

    let tries = document.getElementById('tries');
    tries.setAttribute("class", "loseMsg");
    tries.innerHTML = "Game Over...You Lose";

}