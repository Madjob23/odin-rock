let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const choicesDiv = document.querySelector('#choices');
const resultDisplay = document.querySelector('#resultDisplay');

function getComputerChoice (choiceArr) {
    //multiplying Math.random() by the length of the array 
    // and then using Math.floor() to round down to the nearest whole number
    return choiceArr[Math.floor(Math.random()  * choiceArr.length)]
}

function getHumanChoice () {
    let keepGoing = true;// just a looping variable
    let playerChoice = '';
    while (keepGoing) {
        playerChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
        if (!choices.includes(playerChoice)) {
            alert('Invalid choice. Please try again.');
        } else {
            keepGoing = false;
        }
    }
    return playerChoice;
}

function playRound (playerChoice) {
    const computerChoice = getComputerChoice(choices);
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        playerChoice === 'rock' && computerChoice === 'scissors' || 
        playerChoice === 'paper' && computerChoice === 'rock' || 
        playerChoice === 'scissors' && computerChoice === 'paper'
        ) {
        humanScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function display (result, score) {
    resultDisplay.textContent = `${result}. Your score is: ${score}` ;
}

choicesDiv.addEventListener('click', (event) => {
    if (humanScore < 5 && computerScore < 5) {
        choice = event.target.id;
        roundResult = playRound(choice);
        display(roundResult, humanScore);
    } else if (humanScore == 5) {
        resultDisplay.textContent = `${result}. Your score is: ${score}. You WON!!`
    } else {
        resultDisplay.textContent = `${result}. Your score is: ${score}. You Lost, the computer scored 5 first!!`
    }
});
