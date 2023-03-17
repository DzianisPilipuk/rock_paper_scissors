let computerScore = 0;
let userScore = 0;
let userChoice;
let computerChoice;
let comparisonResult;

const btn_rock = document.querySelector('#btn_rock');
const btn_paper = document.querySelector('#btn_paper');
const btn_scissors = document.querySelector('#btn_scissors');

btn_rock.addEventListener('click', () => {
    playRound("rock");
});
btn_paper.addEventListener('click', () => {
    playRound("paper");
});
btn_scissors.addEventListener('click', () => {
    playRound("scissors");
});

const variableContainer = document.querySelector('#variable-container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "variable content will appear here";

variableContainer.appendChild(content);

function playRound(choice) {
    userChoice = choice;
    computerChoice = getComputerChoice();
    alert( "Your choice is " + userChoice );
    alert( "Computer choice is " + computerChoice );
    comparisonResult = compareChoices();
    window.alert(comparisonResult);
    updateScore();
    window.alert("Computer: " + computerScore + "You: " + userScore );
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