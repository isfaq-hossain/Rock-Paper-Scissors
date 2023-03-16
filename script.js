//variables
const strings = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerWinCounter = 0;
let computerWinCounter = 0;

//Returns a random string from the list of strings
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  const randomString = strings[randomIndex];
  return randomString;
}

//plays a round and returns win or lose statement
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Its a Tie!';
  } else if (playerSelection === 'rock') {
    return computerSelection === 'scissors'
      ? winOrLose('win')
      : winOrLose('lose');
  } else if (playerSelection === 'paper') {
    return computerSelection === 'rock' ? winOrLose('win') : winOrLose('lose');
  } else if (playerSelection === 'scissors') {
    return computerSelection === 'paper' ? winOrLose('win') : winOrLose('lose');
  }
}

//count winner and return a statement
function winOrLose(str) {
  if (str === 'win') {
    playerWinCounter++;
    return `You Win! ${playerSelection} beats ${computerSelection} `;
  } else if (str === 'lose') {
    computerWinCounter++;
    return `You Lose! ${computerSelection} beats ${playerSelection} `;
  }
}

//play the game 5 times
function game() {
  //   for (let i = 0; i < 5; i++) {
  playerSelection = prompt('Enter your choice');
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  //   }

  if (playerWinCounter > computerWinCounter) {
    alert('Hurry! You won the game');
  } else if (computerWinCounter > playerWinCounter) {
    alert('You lost! Better luck next time');
  } else {
    alert("It's a Tie!");
  }
}

game();
