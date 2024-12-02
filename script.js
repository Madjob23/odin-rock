let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

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

function playRound () {
    const playerChoice = getHumanChoice();
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

function playGame() {
    let keepGoing = true; // just a looping variable
    let rounds = 0;
    while (keepGoing) {
        rounds = Number(prompt('How many rounds would you like to play?'));
        if (isNaN(rounds)) {
            alert('Invalid input. Please enter a number.');
        } else {
            keepGoing = false;
        }
    }
    while (rounds > 0) {
        // display the results of each round 
        console.log(playRound());
        rounds--;
    }
}

playGame();