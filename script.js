// Here the computer chioce

const choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randNumber = Math.floor(Math.random() * 3);
  return choiceArray[randNumber];
}

console.log(getComputerChoice());

// Get the human chioce

function getHumanChoice() {
  const humanChoice = prompt(
    "You need to choice 'rock', 'paper' or 'scissoers'",
  );
  return humanChoice;
}

console.log(getHumanChoice());

// Score variables

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if humanChoice 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
