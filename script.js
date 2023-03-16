let computerScore = 0;
let userScore = 0;
let userChoice;
let computerChoice;
let comparisonResult;

playGame();
declareWinner();

function playGame() {
    let roundsNumber = 3;
    while (computerScore < roundsNumber && userScore < roundsNumber) {
        playRound();
    }
}
function playRound() {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    window.alert( "Your choice is " + userChoice );
    window.alert( "Computer choice is " + computerChoice );
    comparisonResult = compareChoices();
    window.alert(comparisonResult);
    updateScore();
    window.alert("Computer: " + computerScore + "You: " + userScore );
}
function getUserChoice() {
    let convertedUserChoice
    do {
        let userChoice = prompt("Rock, paper, scissors?");
        convertedUserChoice = userChoice.toLowerCase()
    } while (convertedUserChoice !== "rock" && convertedUserChoice !== "paper" && convertedUserChoice !== "scissors")
    return convertedUserChoice;
} 
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber < 1) {
        return "rock";
    }
    else if (choiceNumber < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function compareChoices() {
    if (userChoice == computerChoice) {
        return 'Draw';
    }
    else if (userChoice == "rock") {
        if (computerChoice == "scissors") {
            return "You Win";
        }
        else {
            return "Computer Win";
        }
    }
    else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            return "You Win";
        }
        else {
            return "Computer Win";
        }
    }
    else if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            return "You Win";
        }
        else {
            return "Computer Win";
        }
    }
    else {
        return "Computer Win";
    }
}
function updateScore() {
    if (comparisonResult == "Computer Win") {
        computerScore++;
    }
    else if (comparisonResult == "You Win") {
        userScore++;
    }
    else {
    }
}
function declareWinner() {
    if (userScore > computerScore){
        window.alert ("You Win, congratulations!")
    }
    else {
        window.alert ("You Lose, sasi!")
    }
}