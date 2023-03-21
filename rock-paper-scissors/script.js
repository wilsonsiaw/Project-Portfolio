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

// Call the function with array as the argument;
console.log(getComputerChoice(array));
