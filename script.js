let playerScore = 0;
let computerScore = 0;

main();

function main() {
    playGame();
}

function playGame() {
    for (let i = 0; i < 5; i++)
        playRound();
    if (playerScore > computerScore)
        console.log("Player wins the game!");
    else if (computerScore > playerScore)
        console.log("Computer wins the game!");
    else
        console.log("The game was a draw!");
}

function playRound() {
    let pc = playerChoice();
    let cc = computerChoice();
    console.log("Player chose", pc);
    console.log("Computer chose", cc);
    if (pc == cc)
        console.log("It was a tie!");
    if (pc == "rock" && cc == "paper") {
        computerWin();
    } else if (cc == "rock" && pc == "paper") {
        playerWin();
    } else if (pc == "paper" && cc == "scissors") {
        computerWin();
    } else if (cc == "paper" && pc == "scissors") {
        playerWin();
    } else if (pc == "scissors" && cc == "rock") {
        computerWin();
    } else if (cc == "scissors" && pc == "rock") {
        playerWin();
    }
    displayScore();
}

function playerChoice() {
    return prompt(`
        Enter one of the three options:
        - Rock
        - Paper
        - Scissors
        `).toLowerCase();
}

function computerChoice() {
    switch (randomInt(1, 3)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playerWin() {
    console.log("Player wins!");
    playerScore++;
}

function computerWin() {
    console.log("Computer wins!");
    computerScore++;
}

function displayScore() {
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}