const strings = ['rock', 'paper', 'scissors'];
let playerSelection = 'Rock';
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

//Returns a random string from the list of strings
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomString = strings[randomIndex];
    return randomString;
}

//plays a round and returns win or lose statement
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a Tie!'
    } else if (playerSelection === 'rock') {
        return (computerSelection === 'scissors' ? winOrLose('win')
            : winOrLose('lose'));
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock' ? winOrLose('win')
            : winOrLose('lose'));
    } else if (playerSelection === 'scissors') {
        return (computerSelection === 'paper' ? winOrLose('win')
            : winOrLose('lose'));
    }

}

function winOrLose(str) {
    return (str === 'win' ? `You Win! ${playerSelection} beats ${computerSelection} `
        : `You Lose! ${computerSelection} beats ${playerSelection} `)
}
console.log(playRound(playerSelection, computerSelection))
