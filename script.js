let computerScore = 0;
let userScore = 0;
let userChoice = "";
let computerChoice = "";
let comparisonResult;

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    })
})

function textAnimation(elem, text, delay, buttons_disable) {
    document.getElementById(elem).innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            document.getElementById(elem).innerHTML += text.charAt(i);
        }, delay + 50*i);
        if (buttons_disable) {
            disableButtons();
            if (userScore < 5 && computerScore < 5) {
                setTimeout(() => {
                    enableButtons();
                }, delay + 50*text.length);
            }
        }
    }
}
function displayVariableInformation() {
    textAnimation("computer-choice-displayer", computerChoice, 250);
    textAnimation("round-winner-displayer", comparisonResult, 1000, true);
    setTimeout(() => {
        document.getElementById("user-score-displayer").innerHTML = userScore;
        document.getElementById("computer-score-displayer").innerHTML = computerScore;
    }, 1000)
    if (userScore == 5 || computerScore == 5) {
        textAnimation("game-winner-displayer", declareWinner(), 2000);
        textAnimation("reload-notification", "Reload the page to try one more time", 3000);
    }
}
function playRound(choice) {
    document.getElementById("computer-choice-displayer").innerHTML = "";
    document.getElementById("round-winner-displayer").innerHTML = "";
    userChoice = choice;
    computerChoice = getComputerChoice();
    comparisonResult = compareChoices();
    displayVariableInformation();
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
function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false
    })
}