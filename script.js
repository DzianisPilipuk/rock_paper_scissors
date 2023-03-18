let computerScore = 0;
let userScore = 0;
let userChoice = "";
let computerChoice = "";
let comparisonResult
let gameWinner = "";

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    })
})

function playRound(choice) {
    userChoice = choice;
    computerChoice = getComputerChoice();
    comparisonResult = compareChoices();
    displayVariableInformation();
}
function displayVariableInformation() {
    document.getElementById("user-choice-displayer").innerHTML = "Your choice: " + userChoice;
    document.getElementById("computer-choice-displayer").innerHTML = "Computer choice: " + computerChoice;
    document.getElementById("round-winner-displayer").innerHTML = comparisonResult;
    document.getElementById("score-displayer").innerHTML = "You: " + userScore + " Computer: " + computerScore;
    if (userScore == 5 || computerScore == 5) {
        document.getElementById("game-winner-displayer").innerHTML = declareWinner() + "<br>Reload the page to try one more time";
        disableButtons();
    }
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[~~(Math.random()*choices.length)]
}
function compareChoices() {
    if (userChoice == computerChoice) {
        return "It's a tie, you both chose " + userChoice;
    }
    else if ((userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")) {
        userScore++;
        return "You Win, " + userChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        return "Computer Win, " + computerChoice + " beats " + userChoice;
    }
}
function declareWinner() {
    if (userScore > computerScore){
        return ("You Win, congratulations!")
    }
    else {
        return ("You Lose!")
    }
}
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}