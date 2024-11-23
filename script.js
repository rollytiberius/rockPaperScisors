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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    result.innerText = "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result.innerText = "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    result.innerText = "Drow round... Nobudy Win!!!";
    result.innerHTML += "<br>";
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.innerText = "The player wins! Rock beat the Scissors";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.innerText = "The player wins! Paper beat the Rock";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.innerText = "The player wins! Scissors beat the Paper";
    result.innerHTML += "<br>";
    humanScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    result.innerText = "The player wins! Rock beat the Scissors";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    result.innerText = "The computer wins! Paper beat the Rock";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    result.innerText = "The computer wins! Scissors beat the Paper";
    result.innerHTML += "<br>";
    computerScore += 1;
    result.innerText +=
      `Player score = ${humanScore} Computer score = ${computerScore}`;
  }
}

rockBtn.addEventListener("click", () => {
  if (computerScore === 5) {
    alert("Computer Win The Game");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else if (humanScore === 5) {
    alert("Player Win The GAme");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else {
    playRound("rock", getComputerChoice());
  }
});

paperBtn.addEventListener("click", () => {
  if (computerScore === 5) {
    alert("Computer Win The Game");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else if (humanScore === 5) {
    alert("Player Win The GAme");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else {
    playRound("paper", getComputerChoice());
  }
});

scissorsBtn.addEventListener("click", () => {
  if (computerScore === 5) {
    alert("Computer Win The Game");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else if (humanScore === 5) {
    alert("Player Win The GAme");
    result.textContent = "";
    computerScore = 0;
    humanScore = 0;
    return;
  } else {
    playRound("scissors", getComputerChoice());
  }
});
