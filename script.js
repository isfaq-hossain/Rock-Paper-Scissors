//variables
const strings = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let playerWinCounter = 0;
let computerWinCounter = 0;

//Dom Elements initialize
const psBtn = document.querySelectorAll('.btn');
// let resetBtn = document.querySelector('.reset-btn');
// let resultSection = document.querySelector('.final-result-section');
// let winnerText = document.querySelector('.winner');
let playerScore = document.querySelector('.player-score-count');
let computerScore = document.querySelector('.computer-score-count');
let playerChoiceText = document.querySelector('.player-choice .choice');
let computerChoiceText = document.querySelector('.computer-choice .choice');
let roundResultText = document.querySelector('.result');

//Dom Element Create
let resetBtn;
let winnerText;
let resultSection;
function domElementCreate() {
  let body = document.querySelector('body');

  resultSection = document.createElement('div');
  resultSection.className = 'final-result-section';

  let h2 = document.createElement('h2');
  h2.className = 'final-result-heading';
  h2.textContent = 'Game Result';

  winnerText = document.createElement('p');
  winnerText.className = 'winner';

  resetBtn = document.createElement('button');
  resetBtn.className = 'reset-btn';
  resetBtn.textContent = 'Play Again';
  resetBtn.addEventListener('click', resetGame);

  resultSection.append(h2, winnerText, resetBtn);
  body.appendChild(resultSection);
}

//Returns a random string from the list of strings
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  const randomString = strings[randomIndex];
  return randomString;
}

//plays a round and returns win or lose statement
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResultText.textContent = 'Its a Tie!';
    roundResultText.style.color = 'white';
  } else if (playerSelection === 'rock') {
    computerSelection === 'scissors'
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  } else if (playerSelection === 'paper') {
    computerSelection === 'rock'
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  } else if (playerSelection === 'scissors') {
    computerSelection === 'paper'
      ? roundWinOrLose('win')
      : roundWinOrLose('lose');
  }
}

//count round winner and return a statement
function roundWinOrLose(str) {
  if (str === 'win') {
    playerWinCounter++;
    roundResultText.textContent = `You Win! ${playerChoice} beats ${computerChoice} `;
    roundResultText.style.color = 'green';
  } else {
    computerWinCounter++;
    roundResultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice} `;
    roundResultText.style.color = 'red';
  }
}

function winner() {
  removeEvent();
  domElementCreate();
  if (playerWinCounter > computerWinCounter) {
    winnerText.textContent = 'Hurry! You won the game';
    winnerText.style.color = 'Green';
    playVictorySound();
  } else {
    winnerText.textContent = 'You lost! Better luck next time';
    winnerText.style.color = 'red';
    playLoseSound();
  }
}

//play the game 5 times
function game(e) {
  playerChoice = e.target.value;
  playerChoice = playerChoice.toLowerCase();
  computerChoice = getComputerChoice();

  //display the choice
  playerChoiceText.textContent = playerChoice;
  computerChoiceText.textContent = computerChoice;
  playRound(playerChoice, computerChoice);
  //display score
  playerScore.textContent = playerWinCounter;
  computerScore.textContent = computerWinCounter;

  if (computerWinCounter === 5 || playerWinCounter === 5) {
    winner();
  }
}

function resetGame() {
  playBtnSound();
  setTimeout(() => {
    window.location.reload();
  }, 300);
}

function removeEvent() {
  for (let i = 0; i < psBtn.length; i++) {
    psBtn[i].removeEventListener('click', game);
  }
}

for (let i = 0; i < psBtn.length; i++) {
  psBtn[i].addEventListener('click', game);
}

function playBtnSound() {
  let audio = document.getElementById('click-sound');
  audio.volume = 0.5;
  audio.play();
}
function playVictorySound() {
  let audio = document.getElementById('victory-sound');
  audio.volume = 0.2;
  audio.play();
}
function playLoseSound() {
  let audio = document.getElementById('lose-sound');
  audio.volume = 0.2;
  audio.play();
}
