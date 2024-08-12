function getComputerChoice () {
    let num = Math.random();
    if (num < 0.33) {
        return 'rock';
    } else if (num < 0.66) {
        return 'paper';
    }
    return 'scissors';
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let roundWinner = document.querySelector('#round-winner');
        let score = document.querySelector('#score');

        if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            if (humanChoice === 'rock') {
                roundWinner.textContent = 'It\'s a tie! You and the computer chose Rock!';
            } else if (humanChoice === 'paper') {
                roundWinner.textContent = 'It\'s a tie! You and the computer chose Paper!';
            } else if (humanChoice === 'scissors') {
                roundWinner.textContent = 'It\'s a tie! You and the computer chose Scissors!';
            }
        } else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScore++;
                roundWinner.textContent = 'You lose! Paper beats Rock';
            } else {
                humanScore++;
                roundWinner.textContent = ('You win! Rock beats Scissors');
            }
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                roundWinner.textContent = 'You win! Paper beats Rock';
            } else {
                computerScore++;
                roundWinner.textContent = 'You lose! Scissors beats Paper';
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                roundWinner.textContent = 'You lose! Rock beats Scissors';
            } else {
                humanScore++;
                roundWinner.textContent = 'You win! Scissors beats Paper';
            }
        } 
        score.textContent = "Your score: " + humanScore + "\nComputer score: " + computerScore;
    
        let gameWinner = document.querySelector('#game-winner');
        if (humanScore === 5 && computerScore === 5) {
            gameWinner.textContent = 'It\'s a tie!';
        } else if (humanScore === 5 && !gameWinner.textContent) {
            gameWinner.textContent = 'You won!';
        } else if (computerScore === 5 && !gameWinner.textContent) {
            gameWinner.textContent = 'The computer won!';
        } else {
        }
    }

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');  

    rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
    scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));
}

playGame();
