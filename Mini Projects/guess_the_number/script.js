let randomNum = parseInt(Math.random()*100 + 1);
let submitBtn = document.getElementById('subt');
let userInput = document.getElementById('guessField');
let guessSlot = document.querySelector('.guesses');
let guessRemaining = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevGuesses = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const input = parseInt(userInput.value);
        validateGuess(input);
    })
}
function validateGuess(guess) {
    if (isNaN(guess) || guess<1 || guess>100) {
        alert('Provide only numbers between 1 - 100');
    } else {
        prevGuesses.push(guess);
        if(numOfGuesses === 10){
            displayGuess(guess);
            displayMessage(`Game over. The random number was: ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if(guess === randomNum){
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNum){
        displayMessage(`Your guess is Too Low`);
    } else if (guess > randomNum) {
        displayMessage(`Your guess is Too High`);
    } 
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numOfGuesses++;
    guessRemaining.innerHTML = `${11 - numOfGuesses}`; 
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    let newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click',function () {
        randomNum = parseInt(Math.random()*100 + 1);
        prevGuesses = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = '';
        guessRemaining.innerHTML = `${11 - numOfGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}