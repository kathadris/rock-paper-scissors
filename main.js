let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerScore;
let computerScore;
let round;



function playRound(playerSelection, computerSelection) {
   if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors")  {
        return "It's A tie";
    } else if (playerSelection =="rock" && computerSelection =="scissors") {
        return "Player wins!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins!";   
   }  else { 
        return "Computer wins!";
   }
}

function getComputerChoice () {  // Get computer choice function
    let computerChoice = Math.floor(Math.random() * 3 + 1); // Random number 1 - 3 for cmoputer choice
        switch (computerChoice) { // Return selection based on random number picked
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        }
        return computerChoice;
}

function getPlayerChoice () {   // Get player choice function
    let playerChoice = "";
    if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") { // Verify correct entry from player
        playerChoice = "paper" //prompt("Please enter Rock, Paper, or Scissors");                                                     // Ask for player choice          
        playerChoice = playerChoice.toLowerCase; // Switch to lower if needed
        return playerChoice;
    } else {
        return playerChoice;
    }   
   
}
console.log(getPlayerChoice);






   
