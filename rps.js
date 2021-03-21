// Picks the computer's choice randomly.
const computerPlay = () => { 
    // 0 -> Rock, 1 -> Paper, 2 -> Scissors
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("Terrible, terrible day in DenisVille\n");
    }
    

    return computerChoice;
};

// Collect User's choice
const playerInput = () => {
    const playerChoice = prompt("Enter Rock, Paper, Scissors: ");
    return playerChoice;
}

// Actually get computer
let computerSelection = computerPlay();
// Get human to play then sanitise
let playerSelection = playerInput();
playerSelection = playerSelection.trim().toLowerCase();

const playGame = (computerSelection, playerSelection) => {

    let outcome;
    // paper beats rock
    if (computerSelection === "paper" && playerSelection ==="rock"){
        outcome = "Machine Wins! Paper beats Rock!";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        outcome = "Human Wins! Paper beats Rock!";
    }
    // rock beats scissors
    else if (computerSelection === "rock" && playerSelection ==="scissors"){
        outcome = "Machine Wins! Rock beats Scissors!";
    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        outcome = "Human Wins! Rock beats Scissors!";
    }
    // scissors beats paper
    else if (computerSelection === "scissors" && playerSelection ==="paper"){
        outcome = "Machine Wins! Scissors beats Paper!";
    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        outcome = "Human Wins! Scissors beats Paper!";
    } else { // Edge Case
        outcome = "Well, That's funny";
    }

    return outcome;
}
console.log(playGame(computerSelection, playerSelection));