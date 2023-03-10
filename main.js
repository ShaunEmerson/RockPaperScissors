// STEP 1

// Create a function that randomly selects "rock", "paper", or "scissors".
// Create a function named "getComputerChoice()".
// Create a variable named "choices" that contains an array of the choices.
// Create another variable named "selection" that randomly chooses a value from the "choices array".
// Test the function with console.log() to verify it works.

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let selection = choices[Math.floor(Math.random() * choices.length)];
    return selection;
}

// STEP 2


// playerSelection is entered into a prompt and reduced toLowerCase for comparison with computerSelection.
// computerSelection is equal to the result of getComputerChoice function.
// playRound function evaluates playerSelection against computerSelection using if else statements.
// Based on the evaluation, shows an alert message declaring a "winner", "loser", or a "tie".

let computerSelection = getComputerChoice();

let playerSelection = prompt(`Please enter ${choices[0]}, ${choices[1]}, or ${choices[2]}.`).toLowerCase();

function playRound() {
    if (playerSelection === computerSelection) {
        let result = "it's a tie";
        return result;
    } else if (playerSelection === choices[0] && computerSelection === choices[1] || playerSelection === choices[1] && computerSelection === choices[2] || playerSelection === choices[2] && computerSelection === choices[0]) {
        let result = `You lose, ${computerSelection} beats ${playerSelection}!`;
        return result;
    } else if (playerSelection === choices[1] && computerSelection === choices[0] || playerSelection === choices[2] && computerSelection === choices[1] || playerSelection === choices[0] && computerSelection === choices[2]) {
        let result = `You win, ${playerSelection} beats ${computerSelection}!`;
        return result;
    }
}

alert(playRound());

// STEP 3

// Create game() function that iterates matches with a loop until five matches are played.
// Use console.log to display the results after each match and the winner of the five rounds.

// Function somehow calls playRound() to run one game of Rock Paper Scissors.
// Once round is completed, function displays the results and re-runs the playround() game.
// As long as the current game is less than the 5th one, reitterates with a loop.