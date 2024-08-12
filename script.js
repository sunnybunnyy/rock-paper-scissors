function getComputerChoice () {
    let num = Math.random();
    if (num < 0.33) {
        return 'rock';
    } else if (num < 0.66) {
        return 'paper';
    }
    return 'scissors';
}
// DELETE
function getHumanChoice() {
    let choice = prompt('Choose "rock", "paper", or "scissors":');
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let results = document.querySelector('#results');

        if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            if (humanChoice === 'rock') {
                console.log('It\'s a tie! You and the computer chose Rock!');
            } else if (humanChoice === 'paper') {
                console.log('It\'s a tie! You and the computer chose Paper!');
            } else if (humanChoice === 'scissors') {
                console.log('It\'s a tie! You and the computer chose Scissors!');
            }
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

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
    scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
    

    /* for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } */
    return "Your score: " + humanScore + "\nComputer score: " + computerScore;
}

console.log(playGame());
