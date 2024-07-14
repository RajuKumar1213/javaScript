// let randomNumber = Math.floor(Math.random() * 100 + 1);

// const userInput = document.querySelector("#guessField");
// const submitBtn = document.querySelector("#subt");
// const resultParas = document.querySelector(".resultParas")
// const guessSlot = document.querySelector(".guesses");
// const guessRemain = document.querySelector(".lastResult")
// const lowOrHi = document.querySelector(".lowOrHi");

// const p = document.createElement('p')

// let playGame = true;
// let prevGuess = [];
// let numGuess = 1;

// if (playGame) {
//     submitBtn.addEventListener('click', function (e) {
//         e.preventDefault();
//         const guess = parseInt(userInput.value)
//         validateGuess(guess)
//     })
// }

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert("plase enter valid number");
//     }
//     else if (guess < 0) {
//         alert("number must be greater than 0");
//     }
//     else if (guess > 100) {
//         alert("number mush be less than 0");
//     }
//     else {
//         prevGuess.push(guess)
//         if (numGuess === 11) {
//             displayGuess(guess);
//             displayMessage(`Game Over. Random number was ${randomNumber}`)
//             endGame();
//         }
//         else {
//             displayGuess(guess)
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMessage(`You guessed it right.`);
//         endGame();
//     }
//     else if (guess < randomNumber) {
//         displayMessage(`Number is TOOO low`)
//     }
//     else if (guess > randomNumber) {
//         displayMessage(`Number is TOOO high`)
//     }
// }

// function displayGuess(guess) {
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess}, `
//     numGuess++;
//     guessRemain.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2> ${message}</h2>`
// }

// function endGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add("button")
//     p.innerHTML = `<h2 id="newGame" > Start new Game</h2>`
//     resultParas.appendChild(p)
//     playGame = false;
//     newGame()
// }

// function newGame() {
//     const newGameButton = document.querySelector("#newGame")
//     newGameButton.addEventListener("click", function () {
//         let randomNumber = Math.floor(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuess = 1;
//         guessRemain.innerHTML = `${11 - numGuess}`
//         guessSlot.innerHTML = ''
//         userInput.removeAttribute("disabled")
//         resultParas.removeChild(p)
//         playGame = true;

//     })
// }







// practicing again 

