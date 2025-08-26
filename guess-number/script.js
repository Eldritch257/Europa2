const myButton = document.getElementById('my_button');
const input = document.getElementById('my_input');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const gifContainer = document.getElementById('gif-container');
const playAgainBtn = document.getElementById('play-again');
const historyDisplay = document.getElementById('history');

let randomNum;
let attempts;
let guessHistory = [];

function startGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number:", randomNum);
    attempts = 0;
    guessHistory = [];

    feedback.textContent = "";
    attemptsDisplay.textContent = "";
    gifContainer.innerHTML = "";
    historyDisplay.textContent = "";
    input.value = "";
    playAgainBtn.classList.add("hidden");
}
startGame();

myButton.addEventListener('click', () => {
    let guess = parseInt(input.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please make your guess between 1 and 100...";
        input.value = "";
        return;
    }

    attempts++;
    guessHistory.push(guess);

    if (guess === randomNum) {
        feedback.textContent = `Victory Achieved! The Number was ${randomNum}.`;
        attemptsDisplay.textContent = `It took you ${attempts} tries!`;
        gifContainer.innerHTML = `<img src="victory-achieved.gif" alt="Victory Achieved!">`;
        playAgainBtn.classList.remove("hidden");
    } else if (guess < randomNum) {
        feedback.textContent = "Too Low!";
    } else {
        feedback.textContent = "Too High!";
    }

    historyDisplay.textContent = "Your previous attempts were: " + guessHistory.join(", ");
    input.value = "";
});

playAgainBtn.addEventListener('click', startGame);