// Here the computer chioce

const choiceArray = ["rock", "paper", "scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.querySelector(".result");

function getComputerChoice() {
  const randNumber = Math.floor(Math.random() * 3);
  return choiceArray[randNumber];
}

// Score variables

let humanScore = 0;
let computerScore = 0;

function checkScores() {
  if (humanScore === 5) {
    result.textContent = "Player Wins the game";
    result.textContent +=
      `Player score ${humanScore} Computer score ${computerScore}.`;
  }
}

function playRound(humanChoice, computerChoice) {
  checkScores();
  if (humanChoice === "rock" && computerChoice === "rock") {
    result.innerText += "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result.innerText += "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    result.innerText += "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.innerText += "The player wins! Rock beat the Scissors";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.innerText += "The player wins! Paper beat the Rock";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.innerText += "The player wins! Scissors beat the Paper";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    result.innerText += "The player wins! Rock beat the Scissors";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    result.innerText += "The computer wins! Paper beat the Rock";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    result.innerText += "The computer wins! Scissors beat the Paper";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
    result.innerHTML += "<br>";
    result.innerHTML += "<br>";
  }
}

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
