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
        //playerImage (playerSelection);
        computerImage (computerSelection, computerScore);
        winOrLoss.innerHTML = '<';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        losses++;
        computerScore.innerHTML = "Computer: " + losses;
        playerImage (playerSelection);
        computerImage (computerSelection);
        winOrLoss.innerHTML = '<';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        losses++;
        computerScore.innerHTML = "Computer: " + losses;
        playerImage (playerSelection);
        computerImage (computerSelection);
        winOrLoss.innerHTML = '<';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
        playerImage (playerSelection, playerScore);
        // computerImage (computerSelection);
        winOrLoss.innerHTML = '>';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
        playerImage (playerSelection);
        computerImage (computerSelection);
        winOrLoss.innerHTML = '>';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        wins++;
        playerScore.innerHTML = "Player: " + wins;
        playerImage (playerSelection);
        computerImage (computerSelection);
        winOrLoss.innerHTML = '>';
    } else if (playerSelection === computerSelection) {
        playerImage (playerSelection, playerScore);
        computerImage (computerSelection, computerScore);
        winOrLoss.innerHTML = '=';
    }
    winOrLoss.classList.add('newFight')
}
function chooseRock () {
    instructions.innerHTML = 'First to 5 Wins!'
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    audio.currentTime = 0;
    audio.play();
    endCheck();
}
function endCheck () {
    if (wins >= 5) {
        instructions.innerHTML = 'You won ' + wins + ' to ' + losses + '. Good Job!';
        wins = 0;
        losses = 0;
        computerScore.innerHTML = "Computer: 0";
        playerScore.innerHTML = "Player: 0"
        winOrLoss.innerHTML = ' ';
    } else if (losses >= 5) {
        instructions.innerHTML = 'You lost ' + losses + ' to ' + wins + '. Better luck next time!';
        wins = 0;
        losses = 0;
        computerScore.innerHTML = "Computer: 0";
        playerScore.innerHTML = "Player: 0"
        winOrLoss.innerHTML = ' ';
    }
}
function choosePaper () {
    instructions.innerHTML = 'First to 5 Wins!'
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    audio.currentTime = 0;
    audio.play();
    endCheck();
}
function chooseScissors () {
    instructions.innerHTML = 'First to 5 Wins!'
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    audio.currentTime = 0;
    audio.play();
    endCheck();
}
function playerImage (playerSelection, playerScore) {
    let playerIMG = document.createElement("img");
    playerIMG.src = playerSelection + '.png';
    document.getElementById('playerChoice').replaceChildren(playerIMG, playerScore);
}
function computerImage (computerSelection, computerScore) {
    let computerIMG = document.createElement("img");
    computerIMG.src = computerSelection + '.png';
    document.getElementById('computerChoice').replaceChildren(computerIMG, computerScore);
}
function removeTransition(e) {
    if (e.propertyName !== 'color') return;
    e.target.classList.remove('newFight');
  }
let wins = 0;
let losses = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#playerCaption');
const computerScore = document.querySelector('#computerCaption');
const instructions = document.querySelector('h3');
const audio = document.querySelector('audio')
const winOrLoss = document.querySelector('#winOrLoss')

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);
winOrLoss.addEventListener('transitionend', removeTransition);

