function computerPlay() {
    let decider = Math.floor(Math.random() * 3);
    let options = ['rock', 'raper', 'scissors'];
    let computerSelection = options.slice(decider,(decider + 1));
    return computerSelection;
}
let computerSelection = 'paper';//computerPlay();
let check = false;
do {
    let playerSelectionInitial = prompt("Rock, Paper or Scissors?");
    let playerSelection = playerSelectionInitial.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        check = true;
        playerSelection = playerSelectionInitial
    } else {
        alert("Please try again with an accecpted value");
    }
}
while (check === false);

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper')
    alert('You Lose! ' + computerSelection + 'beats ' + playerSelection + '!')
    else {
        alert(yeehaw)
    }
}
//playRound(playerSelection, computerSelection);