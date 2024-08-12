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
                results.textContent = 'It\'s a tie! You and the computer chose Rock!';
            } else if (humanChoice === 'paper') {
                results.textContent = 'It\'s a tie! You and the computer chose Paper!';
            } else if (humanChoice === 'scissors') {
                results.textContent = 'It\'s a tie! You and the computer chose Scissors!';
            }
        } else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScore++;
                results.textContent = 'You lose! Paper beats Rock';
                return;
            }
            humanScore++;
            console('You win! Rock beats Scissors');
            return;
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                results.textContent = 'You win! Paper beats Rock';
                return;
            }
            computerScore++;
            results.textContent = 'You lose! Scissors beats Paper';
            return;
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                results.textContent = 'You lose! Rock beats Scissors';
                return;
            }
            humanScore++;
            results.textContent = 'You win! Scissors beats Paper';
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

results.textContent = playGame();
