
// Function that plays multiple rounds of Rock Paper Scissors
function game(){

// List of variables used at game() function level
    const choices = ["rock", "paper", "scissors"];
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

// Function randomly selects "rock", "paper", or "scissors" for computer to play against player
    function getComputerChoice() {
        let selection = choices[Math.floor(Math.random() * choices.length)];
        return selection;
    }

// Creates a basic visual aspect to follow in the console
    console.log("The best of 5 rounds wins!");
    console.log("");

// Iterates through the rounds until the game has been played five times
    for (i = 0; i < 5; i++){

// Function that plays a round of Rock Paper Scissors
        function playRound(playerSelection, computerSelection) {
            console.log("Round: " + round);
            computerSelection = getComputerChoice();
            playerSelection = prompt(`Please enter ${choices[0]}, ${choices[1]}, or ${choices[2]}.`, "rock").toLowerCase();

// Validates the player's choice to ensure it is one of the correct options
            if (playerSelection === "rock" ||
                playerSelection === "paper" ||
                playerSelection === "scissors") {
                console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}.`);
            } else {
                playerSelection = prompt(`You made an invalid choice. Please enter ${choices[0]}, ${choices[1]}, or ${choices[2]}.`, "rock")
            }

// Evaluates choices and displays a message declaring a winner, loser, or tie, and updates the scores and jumps to the next round
            if (playerSelection === computerSelection) {
            console.log(`It's a tie, you chose the same as the computer.`)
            } else if (playerSelection === choices[0] && computerSelection === choices[1] ||
                playerSelection === choices[1] && computerSelection === choices[2] || 
                playerSelection === choices[2] && computerSelection === choices[0]) {
                computerScore += 1;
                console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
            } else {
                playerScore += 1;
                console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
            }
            round++;
        }

// Calls the round to begin
        playRound();

// Displays the score of the previous round
        console.log(`Score          Player: ${playerScore}      Computer: ${computerScore}`);
        console.log("")
    }

// Evaluates the player's score against the computer's score and declares the winner of the game
    if (playerScore === computerScore) {
        if (playerScore === 0 && computerScore === 0) {
            console.log("It's a tie. You and the computer have tied every round.");
        } else {
            console.log("It's a tie. You've won the same amount of rounds as the computer.");
        }
    } else if (playerScore > computerScore) {
        if (computerScore === 1){ 
        console.log(`You win! You've won ${playerScore} rounds, while the computer has won only 1 round.`)
        } else {
        console.log(`You win! You've won ${playerScore} rounds, while the computer has won only ${computerScore} rounds.`)
        }
    } else {
        if (playerScore === 1) {
        console.log(`You lose! You've won only 1 round, while the computer has won ${computerScore} rounds.`)
        } else if (playerScore === 0){
            console.log(`You lose! You've won 0 rounds, while the computer has won ${computerScore} rounds.`)
        } else {
            console.log(`You lose! You've won only ${playerScore} rounds, while the computer has won ${computerScore} rounds.`)
        }
    }
}

// Calls the game to play
game();