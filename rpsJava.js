function computerPlay() {
    let decider = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options.slice(decider, (decider + 1));
    return computerSelection.toString();
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        losses++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        losses++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        losses++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
        wins++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
        wins++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
        wins++;
    } else if (playerSelection === computerSelection) {
        alert('Tie, you both chose ' + playerSelection + '!');
    }
}
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
}