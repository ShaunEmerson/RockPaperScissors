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

