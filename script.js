// Get references to the HTML elements
const startButton = document.getElementById("startButton");
const options = document.getElementById("options");
const range10 = document.getElementById("range10");
const range50 = document.getElementById("range50");
const range100 = document.getElementById("range100");
const game = document.getElementById("game");
const guessInput = document.getElementById("guessInput");
const guessSubmit = document.querySelector(".guess-submit");
const message = document.querySelector(".message");
const attemptsDisplay = document.getElementById("attempts");

let randomNumber;
let maxRange;
let attempts = 0;

// Event listener for the "Start the Game" button
startButton.addEventListener("click", function () {
    options.style.display = "block";
    startButton.style.display = "none";
});

// Event listeners for range selection buttons
range10.addEventListener("click", function () {
    maxRange = 10;
    startGame();
});

range50.addEventListener("click", function () {
    maxRange = 50;
    startGame();
});

range100.addEventListener("click", function () {
    maxRange = 100;
    startGame();
});

function startGame() {
    // Generate a random number within the selected range
    randomNumber = Math.floor(Math.random() * maxRange) + 1;

    // Hide the options and display the game
    options.style.display = "none";
    game.style.display = "block";

    // Reset attempts and message
    attempts = 0;
    message.textContent = "";
    attemptsDisplay.textContent = attempts;

    // Enable input and button
    guessInput.disabled = false;
    guessSubmit.disabled = false;
    guessInput.focus();
}

// Event listener for the submit button
guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxRange) {
        message.textContent = "Please enter a valid number within the selected range.";
        message.style.color = "red";
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        message.style.color = "green";
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else {
        message.textContent = userGuess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
        message.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
    attemptsDisplay.textContent = attempts;
}

// Add an event listener for the Back button
document.getElementById("backButton").addEventListener("click", function () {
    // Hide the game and show the options
    game.style.display = "none";
    options.style.display = "block";
    
    // Clear the message and reset attempts
    message.textContent = "";
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    
    // Clear the guess input and enable it
    guessInput.value = "";
    guessInput.disabled = false;
    
    // Enable the Submit button
    guessSubmit.disabled = false;
    
    // Reset the focus to the guess input
    guessInput.focus();
});

