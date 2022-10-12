let playerChoice = "paper";  /* Remove variable after testing */
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let round = 0;



function playRound() {
            if (playerChoice === computerSelection) {
                return "It's A tie";
            } else if (playerChoice === "rock" && computerSelection === "scissors") {
                return "Player wins!";
            } else if (playerChoice === "paper" && computerSelection === "rock") {
                return "Player wins!";
            } else if (playerChoice === "scissors" && computerSelection === "paper") {
                return "Player wins!";   
            }  else {
                return "Computer wins!";
            } 
        } 


function getComputerChoice() {  // Get computer choice function
    let computerChoice = Math.floor(Math.random() * 3 + 1); // Random number 1 - 3 for cmoputer choice
        switch (computerChoice) { // Return selection based on random number picked
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        }
}



console.log(computerSelection);
console.log(playerChoice);
console.log(playRound());
console.log(round);







   
