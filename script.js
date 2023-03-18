//variables
const strings = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
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
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  } else if (playerSelection === 'paper') {
    return computerSelection === 'rock'
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  } else if (playerSelection === 'scissors') {
    return computerSelection === 'paper'
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  }
}

//count round winner and return a statement
function roundWinOrLose(str) {
  if (str === 'win') {
    playerWinCounter++;
    return `You Win! ${playerChoice} beats ${computerChoice} `;
  } else {
    computerWinCounter++;
    return `You Lose! ${computerChoice} beats ${playerChoice} `;
  }
}

function winner() {
  if (playerWinCounter > computerWinCounter) {
    alert('Hurry! You won the game');
  } else {
    alert('You lost! Better luck next time');
  }
  resetGame();
}

function psBtnClick(e) {
  playerChoice = e.target.textContent;
  playerChoice = playerChoice.toLowerCase();
  computerChoice = getComputerChoice();
  console.log(
    `Player choice: ${playerChoice}\nComputer choice: ${computerChoice}`
  );
  console.log(playRound(playerChoice, computerChoice));

  if (computerWinCounter === 5 || playerWinCounter === 5) {
    winner();
  }
}

//play the game 5 times
function game() {
  const psBtn = document.querySelectorAll('.btn');

  for (let i = 0; i < psBtn.length; i++) {
    psBtn[i].addEventListener('click', psBtnClick);
  }
}

game();

function resetGame() {
  playerWinCounter = 0;
  computerWinCounter = 0;
}
