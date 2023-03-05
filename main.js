// STEP 1

// Create a function that randomly selects "rock", "paper", or "scissors".
// Create a function named "getComputerChoice()".
// Create a variable named "choices" that contains an array of the choices.
// Create another variable named "selection" that randomly chooses a value from the "choices array".
// Test the function with console.log() to verify it works.

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let selection = choices[Math.floor(Math.random() * choices.length)];
    return selection;
}

// STEP 2


// playerSelection is entered into a prompt and reduced toLowerCase for comparison with computerSelection.
// computerSelection is equal to the result of getComputerChoice function.
// playRound function evaluates playerSelection against computerSelection using if else statements.
// Based on the evaluation, shows an alert message declaring a "winner", "loser", or a "tie".

let computerSelection = getComputerChoice();

let playerSelection = prompt('Please enter "rock", "paper", or "scissors".').toLowerCase();

function playRound() {
    if (playerSelection === computerSelection) {
        let result = "it's a tie";
        return result;
    }else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        let result = `You lose, ${computerSelection} beats ${playerSelection}!`;
        return result;
    }else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors") {
        let result = `You win, ${playerSelection} beats ${computerSelection}!`;
        return result;
    }
}

alert(playRound());