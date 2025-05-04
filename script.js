// Random Number Guess
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const attempts = 10;
let guessCount = 0;

const guessingNumber = document.getElementById('guessingNumber');
const guessingForm = document.getElementById('guessingForm');
const newGameBtn = document.getElementById('newGameBtn');
const hint = document.getElementById('hint');
const attemptsElement = document.getElementById('attempts');
const history = document.getElementById('history');

let guessHistory = [];

guessingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const guess =parseInt(guessingNumber.value);
    checkGuess(guess);
    guessingNumber.value = '';
});

newGameBtn.addEventListener('click', function () {
   location.reload();
});
function checkGuess(guess){
    guessCount++;
    guessHistory.push(guess);

    attemptsElement.textContent = `You have ${attempts - guessCount} attempts left`;
    
    if (guess === randomNumber) {
        guessingForm.style.display = 'none';
        hint.textContent = 'You Guessed The Correct Number';
        attemptsElement.textContent = `You took ${guessCount} attempts To Guess The Number`;
        history.textContent = `Your Guess History: ${guessHistory.join(', ')}`;
    } else if (guess < randomNumber) {
        hint.textContent = 'Your Guess Is Too Low! Try Again..';
        // attemptsElement.textContent = `You have ${attempts - guessCount} attempts left`;
        history.textContent = `Your Guess History: ${guessHistory.join(', ')}`;
    } else if (guess > randomNumber) {
        hint.textContent = 'Your Guess Is Too High! Try Again..';
        // attemptsElement.textContent = `You have ${attempts - guessCount} attempts left`;
        history.textContent = `Your Guess History: ${guessHistory.join(', ')}`;
    }

    if (guessCount === attempts) {
        guessingForm.style.display = 'none';
        hint.textContent = 'You Failed To Guess The Number! Refresh The Page To Try Again';
    }
}
