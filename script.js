let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let num = Math.random();
    if (num < 0.33) {
        return "rock";
    } else if (num < 0.66) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt('Choose "rock", "paper", or "scissors":');
    return choice;
}
