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
  return humanChoice.toLowerCase();
}

console.log(getHumanChoice());

// Score variables

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Drow round... Nobudy Win!!!");
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Drow round... Nobudy Win!!!");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("Drow round... Nobudy Win!!!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("The player wins! Rock beat the Scissors");
    humanScore += 1;
    console.log(
      `Player score = ${humanScore} Computer score = ${computerScore}`,
    );
  }
} else if (humanChoice === "paper" && computerChoice === "rock") {
  console.log("The player wins! Paper beat the Rock");
  humanScore += 1;
  console.log(
    `Player score = ${humanScore} Computer score = ${computerScore}`,
  );
}
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
  console.log("The player wins! Scissors beat the Paper");
  humanScore += 1;
  console.log(
    `Player score = ${humanScore} Computer score = ${computerScore}`,
  );
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
