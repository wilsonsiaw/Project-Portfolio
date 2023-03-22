// Create an array and assign array the values
// "Rock", "Paper", "Scissors";
const array = ["Rock", "Paper", "Scissors"];

// create a function getComputerChoice and pass array
// a the parameter;
function getComputerChoice(array) {

// create a variable computeRandomChoice and calculate
// the random choice;
    const computeRandomChoice = Math.floor(Math.random() * array.length);

// create a variable randomChoice and assign it array
// giving computeRandomChoice access to the array;
    const randomChoice = array[computeRandomChoice];

// return randomChoice;
    return randomChoice;
}

// Create a function: playRound;
// Pass the parameters playerSelection and computerSelection
// to the playRound function;
function playRound(playerSelection, computerSelection) {

// Create comparison operators to determine who wins the round;
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It's a tie!";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It's a tie!";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It's a tie!";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You lose! Scissors beats Paper";
    } 
}

// Call the functions with a test playerSelection;
const playerSelection = prompt("Choose Rock, Paper, or Scissors");
const computerSelection = getComputerChoice(array);
console.log(playRound(playerSelection, computerSelection));



