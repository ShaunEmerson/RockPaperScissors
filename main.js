const choices = ["rock", "paper", "scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let round = 1;

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        pImage();
        computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection);
        if (round === 6) {
            round = " "
            endGame();
        }
    });
});

const pImage = function () {
    document.querySelector('#p-selection').style="border: 3px solid blue; box-shadow: 0 0 5rem blue, inset 0 0 1rem blue;";
    if (playerSelection === choices[0]) {
        document.querySelector('#p-selection').src="images/rock.png";
    } else if (playerSelection === choices[1]) {
        document.querySelector('#p-selection').src="images/paper.png";
    } else if (playerSelection === choices[2]) {
        document.querySelector('#p-selection').src="images/scissors.png";
    }
    document.getElementById('narrative').textContent="COMPUTER TURN: WAITING ON COMPUTER...";    
}

function getComputerChoice() {
    let selection = choices[Math.floor(Math.random() * choices.length)];
    setTimeout( function() {
        document.querySelector('#c-selection').style="border: 3px solid red; box-shadow: 0 0 5rem red, inset 0 0 1rem red;";
        if (selection === choices[0]) {
        document.querySelector('#c-selection').src="images/rock.png";
        } else if (selection === choices[1]) {
        document.querySelector('#c-selection').src="images/paper.png";
        } else if (selection === choices[2]) {
        document.querySelector('#c-selection').src="images/scissors.png";
        }
    }, 2000);  
    return selection;
}

function displayScore() {
    setTimeout( function() {
        document.getElementById('player-score' ).textContent = playerScore;
        },2250);
}

function playRound(arg1, arg2) {
// Evaluates choices and displays a message declaring a winner, loser, or tie, and updates the scores and jumps to the next round
    document.getElementById('round').textContent = "Round: " + round;
    if (playerSelection === computerSelection) {
        setTimeout( function() {
        document.getElementById('narrative').textContent=`IT'S A TIE. YOU BOTH CHOSE ${playerSelection}.`;
        }, 2250);
    } else if (playerSelection === choices[0] && computerSelection === choices[1] ||
        playerSelection === choices[1] && computerSelection === choices[2] || 
        playerSelection === choices[2] && computerSelection === choices[0]) {
        computerScore += 1;
        setTimeout( function() {
            document.getElementById('computer-score' ).textContent = computerScore;
            document.getElementById('narrative').textContent=`YOU LOSE! ${computerSelection} BEATS ${playerSelection}!`;
        }, 2250);
    } else {
        playerScore += 1;
        displayScore();
        setTimeout( function() {
            document.getElementById('narrative').textContent=`YOU WIN! ${playerSelection} BEATS ${computerSelection}!`;
        }, 2250);
    }
    round++;
}

function change_paper() {
    document.querySelector('#paper').id="start";
    document.querySelector('#start').textContent="START";
}

function remove_buttons() {
    let removebtns = document.getElementById('opt');
    let remove_rock = document.getElementById('rock');
    let remove_scissors = document.getElementById('scissors');
    change_paper();
    removebtns.removeChild(remove_rock);
    removebtns.removeChild(remove_scissors);
    reset()
}

function endGame() {
    setTimeout( function() {
        if (playerScore === computerScore) {
            document.getElementById('narrative').textContent="IT'S A TIE!";
        } else if (playerScore > computerScore) {
            document.getElementById('narrative').textContent="YOU WIN! YOU SCORED THE BEST OUT OF 5 ROUNDS!";
        } else {
            document.getElementById('narrative').textContent="YOU LOSE! COMPUTER SCORED THE BEST OUT OF 5 ROUNDS";
        }
        document.getElementById('round').textContent="CLICK START FOR NEW\ GAME";
        remove_buttons();
    }, 3250);
}

function reset() {
    const startNew = document.querySelector('#start');
    startNew.addEventListener('click', () => {
           window.location.reload();
    })
}



// Function that plays multiple rounds of Rock Paper Scissors
/*function game(){
    console.log("The best of 5 rounds wins!");
    console.log("");
    for (i = 0; i < 5; i++){
        playRound();
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
}*/

// Calls the game to play
// game();