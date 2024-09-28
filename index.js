let randomNumber = parseInt(Math.random()*100 + 1);

const userInput = document.querySelector('#userInput');
const submitButton = document.querySelector('#subt');
const results = document.querySelector('.results');
const lowOrHigh = document.querySelector('#lowOrHigh');
const guesses = document.querySelector('#guesses');
const reamining = document.querySelector('#reamining-numbers');
console.log('hi')

const p = document.createElement('p');

let numGuess = 1;
let playGame = true;
let previousGuess = [];

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validGuess(guess);
        console.log(guess)
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter number greater than 1')
    }else if(guess > 100){
        alert('Please enter number less than 100')
    }else{
        previousGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`Game is over. Random number is ${randomNumber} `);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("YAYYYY!! You guessed it right");
        endGame()
    }else if(guess > randomNumber){
        displayMessage("Your guess is TOOO highh");
    }else if(guess < randomNumber){
        displayMessage("Your guess is TOOO loww");
    }
}
function displayGuess(guess){
    userInput.value = '';
    guesses.innerHTML += `${guess}, `
    numGuess++;
    reamining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    results.appendChild(p)
    playGame = false;
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
         randomNumber = parseInt(Math.random()*100 + 1);
         previousGuess = [];
         numGuess = 1;
         guesses.innerHTML = '';
         reamining.innerHTML = `${11 - numGuess} `;
         userInput.removeAttribute('disabled');
         results.removeChild(p)
         playGame = true;


    }
    )
}