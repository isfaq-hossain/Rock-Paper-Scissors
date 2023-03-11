const strings = ['rock', 'paper', 'scissors'];

//Returns a random string from the list of strings
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomString = strings[randomIndex];
    return randomString;
}

//plays a round and returns win or lose statement
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Its a Tie!'
    } else if (playerSelection === 'rock') {
        return (computerSelection === 'scissors' ? `You Win! ${playerSelection} beats ${computerSelection}`
            : `You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock' ? `You Win! ${playerSelection} beats ${computerSelection}`
            : `You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'scissors') {
        return (computerSelection === 'paper' ? `You Win! ${playerSelection} beats ${computerSelection}`
            : `You Lose! ${computerSelection} beats ${playerSelection}`);
    }

}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
