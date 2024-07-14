let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const resultParas = document.querySelector(".resultParas")
const guessSlot = document.querySelector(".guesses");
const guessRemain = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];
let playGame = true;
let numGuess = 1;

if (playGame) {
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number ");
    } else if (guess < 0) {
        alert("Please enter a number greater than 0")
    } else if (guess > 100) {
        alert("Please enter a number less than 101")
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over . The random number was ${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guess it right. `)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`The number is TOOO low. `)

    } else if (guess > randomNumber) {
        displayMessage(`The number is TOOO high. `)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    guessRemain.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    resultParas.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    document.getElementById("newGame").addEventListener("click", function(e){
        console.log('i got clicked')
        randomNumber = Math.floor(Math.random() * 100 + 1);
        userInput.removeAttribute('disabled');
        guessSlot.innerHTML = ''
        resultParas.removeChild(p);
        numGuess = 1;
        guessRemain.innerHTML = `${10 - numGuess}`;
        prevGuess = []
        playGame = true;

    })
}
