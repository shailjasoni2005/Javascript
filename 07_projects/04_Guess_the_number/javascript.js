let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

// At first we need to check if we are available for playing this game or not.for this:--

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // We will check if it's number or not,to check that the value should not be less than 1,and should not exceed 100(since it's the range).
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  }
  if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // here we will print a message that whether the value is correct,low or high.We will check that if the value is equal to random number,if so then user win.
  if (guess === randomNumber) {
    displayMessage(`You guessed right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high.`);
  }
}

function displayGuess(guess) {
  // It will clean the values , update the guess array , will print message take inside lowOrHigh.Like updating guess value.
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuesses++;
  Remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // all manipulation related to dom will be done in this function.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

// Method for ending game and starting a new game:----

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    Remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild('p');

    playGame = true;
  });
}
