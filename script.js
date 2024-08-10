function getComputerChoice {
    let num = Math.random();
    if (num < 0.33) {
        return "rock";
    } else if (num < 0.66) {
        return "paper";
    }
    return "scissors";
}