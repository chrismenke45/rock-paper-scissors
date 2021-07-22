function computerPlay() {
    let decider = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options.slice(decider, (decider + 1));
    return computerSelection.toString();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        losses++;
        computerScore.innerHTML = "Computer: " + losses;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        losses++;
        computerScore.innerHTML = "Computer: " + losses;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        losses++;
        computerScore.innerHTML = "Computer: " + losses;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
    } else if (playerSelection === computerSelection) {
        alert('Tie, you both chose ' + playerSelection + '!');
    }
}
/*
let wins = 0;
let losses = 0;
let i;
for (let i = 0; i < 5;) {
    let computerSelection = computerPlay();
    let check = false;
    let playerSelection
    do {
        let playerSelectionInitial = prompt("Rock, Paper or Scissors?");
        let playerSelectionWhile = playerSelectionInitial.toLowerCase();
        if (playerSelectionWhile === 'rock' || playerSelectionWhile === 'paper' || playerSelectionWhile === 'scissors') {
            check = true;
            playerSelection = playerSelectionWhile
        } else {
            alert("Please try again with an accecpted value");
        }
    }
    while (check === false);

    playRound(playerSelection, computerSelection);
    i = wins + losses;
}
if (wins > losses) {
    alert('You won ' + wins + ' to ' + losses + '! Good Job!')
} else {
    alert('Sorry, you lost ' + losses + ' to ' + wins + '. Try again!')
} */
let wins = 0;
let losses = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#playerCaption');
const computerScore = document.querySelector('#computerCaption');

function yeehaw () {
    alert('yeehaw!');
}
function chooseRock () {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
function choosePaper () {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
function chooseScissors () {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);

