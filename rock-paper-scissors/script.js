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
function game() {

    let userScore = 0;
    let machineScore = 0;
    let tie = 0;

    function playRound(playerSelection, computerSelection) {
// Create comparison operators to determine who wins the round;
        if (playerSelection === "Rock" && computerSelection === "Scissors") {

            let div = document.querySelector("#text");
            div.textContent = "You win! Rock beats Scissors";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You win! Rock beats Scissors") {
                user = document.querySelector(".userScore");
                user.textContent = userScore += 1;
            }

        } else if (playerSelection === "Rock" && computerSelection === "Rock") {

            let div = document.querySelector("#text");
            div.textContent = "It's a tie!";

            // condition to check who wins the round and assign a score
            if (div.textContent === "It's a tie!") {
                ties = document.querySelector(".ties");
                ties.textContent = tie += 1;
            }

        } else if (computerSelection === "Rock" && playerSelection === "Scissors") {

            let div = document.querySelector("#text");
            div.textContent = "You lose! Rock beats Scissors";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You lose! Rock beats Scissors") {
                machine = document.querySelector(".machineScore")
                machine.textContent = machineScore += 1;
            }

        } else if (playerSelection === "Paper" && computerSelection === "Rock") {

            let div = document.querySelector("#text");
            div.textContent = "You win! Paper beats Rock";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You win! Paper beats Rock") {
                user = document.querySelector(".userScore");
                user.textContent = userScore += 1;
            }


        } else if (playerSelection === "Paper" && computerSelection === "Paper") {

            let div = document.querySelector("#text");
            div.textContent = "It's a tie";

            // condition to check who wins the round and assign a score
            if (div.textContent === "It's a tie") {
                ties = document.querySelector(".ties");
                ties.textContent = tie += 1;
            }


        } else if (computerSelection === "Paper" && playerSelection === "Rock") {

            let div = document.querySelector("#text")
            div.textContent = "You lose! Paper beats Rock";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You lose! Paper beats Rock") {
                machine = document.querySelector(".machineScore")
                machine.textContent = machineScore += 1;
            }

        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {

            let div = document.querySelector("#text");
            div.textContent = "You win! Scissors beats Paper";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You win! Scissors beats Paper") {
                user = document.querySelector(".userScore");
                user.textContent = userScore += 1;
            }

        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {

            let div = document.querySelector("#text");
            div.textContent = "It's a tie!";

            // condition to check who wins the round and assign a score
            if (div.textContent === "It's a tie!") {
                ties = document.querySelector(".ties");
                ties.textContent = tie += 1;
            }

        } else if (computerSelection === "Scissors" && playerSelection === "Paper") {

            let div = document.querySelector("#text");
            div.textContent = "You lose! Scissors beats Paper";

            // condition to check who wins the round and assign a score
            if (div.textContent === "You lose! Scissors beats Paper") {
                machine = document.querySelector(".machineScore")
                machine.textContent = machineScore += 1;
            }
        } 
}

    const computerSelection = getComputerChoice(array);

        // Create three buttons and attach event listeners to them.
        const rock = document.querySelector(".rock");
        rock.addEventListener("click", function() {
            playRound("Rock", computerSelection);
        });

        const paper = document.querySelector(".paper");
        paper.addEventListener("click", function() {
            playRound("Paper", computerSelection);
        });

        const scissors = document.querySelector(".scissors");
        scissors.addEventListener("click", function() {
            playRound("Scissors", computerSelection);
        });

}


game();

