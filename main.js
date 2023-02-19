// STEP 1

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ 
// or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play.

// Make a game where you play rock paper scissors against the computer.
// Computer selects between "rock", "paper", and "scissors" at random.

// Create a function to get the computer's choice.
// Create an array of options containing the strings "rock", "paper", and "scissors".
// Create a function that randomly pulls a selection from the array and returns the selection.

// getComputerChoice function gets the computer's choice using
//  an array of options containing the strings "rock", "paper", and "scissors".

let rock = "Rock";
let paper = "Paper";
let scissors ="Scissors";

const choices = [`${rock}`, `${paper}`, `${scissors}`];

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice(choices))

// STEP 2

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


// playerInput variable takes its value from an input by the player.
// playerSelection function uses toLowerCase to make input variable's string equal to the computer's selection.
// computerSelection variable takes its value from the getComputerChoice function output.
// playGame function takes the playerSelection variable and evaluates it against 
//  computerSelection using if else statements to evaluate the player's selection against the computer.
// Based on the evaluation, shows a message declaring the player a "winner", "loser", or a "tie".

let computerSelection = getComputerChoice(choices);

function playerInput() {
    return prompt(`Please enter "${rock}", "${paper}", or "${scissors}"`);
}

const firstLetter = playerInput.charAt(0);

const remainingLetters = playerInput.slice(1);

playerSelection = firstLetter + remainingLetters;

function playGame() {
    let result;
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock breaks Scissors!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        result = "You lose! Rock breaks Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors cuts Paper!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        result = "You lose! Scissors cuts Paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper covers Rock!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "You lose! Paper covers Rock!";
    } else {
        result = "It's a tie!";
    }
    return result;
    console.log(result);
}

alert(playerSelection());

