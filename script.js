let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const choicesDiv = document.querySelector('#choices');
const resultDisplay = document.querySelector('#resultDisplay');
const resetbtn = document.querySelector('#reset');
/* create a new event for firing when needed 
through the dispatchEvent method*/
const resetClick = new Event('click', {bubbles:false}) 

function getComputerChoice (choiceArr) {
    //multiplying Math.random() by the length of the array 
    // and then using Math.floor() to round down to the nearest whole number
    return choiceArr[Math.floor(Math.random()  * choiceArr.length)]
}

function playGame (playClick) {
    playClick.stopPropagation(); // no need to bubble this event  
    if (choices.includes(playClick.target.id)) {
        let choice = playClick.target.id;
        roundResult = playRound(choice);
    }
    if (humanScore < 5 && computerScore < 5) {
        display(roundResult, humanScore);
    }else if (humanScore == 5) {
        resultDisplay.textContent = `${roundResult}. Your score is: ${humanScore}. You WON!!`;
        resetbtn.dispatchEvent(resetClick);
    } else if (computerScore == 5) {
        resultDisplay.textContent = `${roundResult}. Your score is: ${humanScore}. You Lost, the computer scored 5 first!!`;
        resetbtn.dispatchEvent(resetClick);
    }
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

function resetGame (event) {
    humanScore = 0;
    computerScore = 0;
    /* true if the user has clicked reset 
    and false if it's through the dispatchEvent method*/
    if (event.isTrusted) {
        resultDisplay.textContent = '';
    }
}

choicesDiv.addEventListener('click', playGame);

resetbtn.addEventListener('click', resetGame);