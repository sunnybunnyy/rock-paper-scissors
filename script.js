function getComputerChoice () {
    let num = Math.random();
    if (num < 0.33) {
        return 'rock';
    } else if (num < 0.66) {
        return 'paper';
    }
    return 'scissors';
}

function getHumanChoice() {
    let choice = prompt('Choose "rock", "paper", or "scissors":');
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            console.log('It\'s a tie! You and the computer chose '
                + humanChoice[0].toUpperCase
                + humanChoice.slice(1).toLowerCase()
                + '!');
            return;
        } else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScore++;
                console.log('You lose! Paper beats Rock');
                return;
            }
            humanScore++;
            console.log('You win! Rock beats Scissors');
            return;
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                console.log('You win! Paper beats Rock');
                return;
            }
            computerScore++;
            console.log('You lose! Scissors beats Paper');
            return;
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                console.log('You lose! Rock beats Scissors');
                return;
            }
            humanScore++;
            console.log('You win! Scissors beats Paper');
            return;
        } 
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);