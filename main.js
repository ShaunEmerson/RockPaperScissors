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

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

const choices = ["rock", "paper", "scissors"];

// STEP 2

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


// Create a playerSelection variable that takes its value from an input by the player.
// Create a function that takes the playerSelection variable and evaluates it against the getComputerChoice function output.
// Use if else statements to evaluate the player's selection against the computer.
// Based on the evaluation, show a "winner" or "loser" message.
// use toLowerCase to turn make all inputs equal to the computer's selection.
