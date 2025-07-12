const round = document.querySelector(".round")
const score = document.querySelector(".score")
const playerAction = document.querySelector(".players-container .player .action")
const computerAction = document.querySelector(".players-container .computer .action")
const dialogue = document.querySelector(".dialogue")
const choices = document.querySelectorAll(".choices button")
const playAgain = document.querySelector(".play-again")

let roundCounter = 0
let playerScore = 0
let computerScore = 0
let playerChoice = ""
let computerChoice = ""

main()

function main() {
    choices.forEach((choice) => {
        choice.addEventListener("click", playRound)
    })
}

function playRound(e) {
    if (roundCounter >= 5) return

    roundCounter++
    playerChoice = e.target.innerText
    computerChoice = randomChoice()

    updatePlayerAction();
    updateComputerAction();

    if (playerChoice == computerChoice) {
        updateDialogue("It was a tie!")
    } else if (playerChoice == "Rock"     && computerChoice == "Scissors" ||
        playerChoice == "Paper"    && computerChoice == "Rock"     ||
        playerChoice == "Scissors" && computerChoice == "Paper") {
        playerScore++
        updateDialogue("Player wins the round!")
    }
    else {
        computerScore++
        updateDialogue("Computer wins the round!")
    }

    if (roundCounter >= 5) {
        if (playerScore == computerScore)
            updateDialogue("It was a tie! The match is over!")
        else if (playerScore > computerScore) 
            updateDialogue("Player wins! The match is over!")
        else
            updateDialogue("Computer wins! The match is over!")
        endGame()
    }

    updateScoreboard()
}

function endGame() {
    let playAgainButton = document.createElement("button")
    playAgainButton.innerText = "Play Again"
    playAgainButton.addEventListener("click", reset)
    playAgain.appendChild(playAgainButton)
}

function reset(e) {
    playAgain.removeChild(e.target)
    roundCounter = 0
    playerScore = 0
    computerScore = 0
    playerAction.innerText = ""
    computerAction.innerText = ""
    updateDialogue("")
    updateScoreboard()
}

function randomChoice() {
    switch (randomInt(1, 3)) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

function updatePlayerAction() {
    playerAction.innerText = `Player chose ${playerChoice}!`
}

function updateComputerAction() {
    computerAction.innerText = `Computer chose ${computerChoice}!`
}

function updateDialogue(str) {
    dialogue.innerText = str
}

function updateScoreboard() {
    round.innerText = `Round: ${roundCounter}`
    score.innerText = `${playerScore}:${computerScore}`
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}