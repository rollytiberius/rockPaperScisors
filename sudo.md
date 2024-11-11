# Rock paper scissors game

## Write the logic to get the computer choice

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint:
The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
Note:
Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.

### My pseudo code

Before to use the getComputerChoice function we need an array to chose from

declare an array named choiceArray [rock, paper, scissors]

The getComputerChoice function will return the computer choice
the function will pick up a random number from 0 to 2 inclusive and will pick up the
corect word from the choiceArray and return the word.

## Write the logic to get the human choice

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
Test what your function returns by using console.log.

## Step 5: Write the logic to play a single round

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

### Rock wins against scissors

### Scissors win against paper

### Paper wins against rock

Lets write all cases.
Computer player. result
rock rock draw
paper paper draw
scissors scissors draw

Computer player. result
paper rock Computer Win. add a point to comp
scissors paper Computer Win. add a point to comp
rock scissors Computer Win. add a point to comp

Computer player. result
scissors rock Computer Lose add point to player
rock paper Computer Lose add point to player
paper scissors Computer Lose add point to player
