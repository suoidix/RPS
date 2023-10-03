// Javascript for rock, paper, scissors game

let pcScore = 0;
let cpuScore = 0;
const choiceArr = ["rock", "paper", "scissors"];

//function for computer selection
function getComputerChoice() {
    return choiceArr[(Math.floor(Math.random() * choiceArr.length))]
}

//function for player choice
function getPlayerChoice() {
    const pcChoice = prompt("Choose: Rock, Paper, or Scissors:").toLowerCase(); // prompt for input and change case to lower
    if (pcChoice == null || !choiceArr.includes(pcChoice)) { // determine if input is null or not equal to choice array
        alert("Please enter Rock, Paper, or Scissors."); // if true ask to input again
        return getPlayerChoice(); //must user return before function call, otherwise
    } else if (choiceArr.includes(pcChoice)){ // if present in array return choice
        return pcChoice; 
    }  
}

//function for player name
function getPlayerName(){
    const playerName = prompt("What is your name?")
    return playerName; 
}

//function for play a round
function playRound() {
    const playerName = getPlayerName();
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        return "Tie!"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        cpuScore++;
        return `${playerName} looses! ${computerChoice} beats ${playerChoice}!`;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        pcScore++;
        return `${playerName} wins! ${playerChoice} beats ${computerChoice}!`;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        cpuScore++;
        return `${playerName} looses! ${computerChoice} beats ${playerChoice}!`;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        pcScore++;
        return `${playerName} wins! ${playerChoice} beats ${computerChoice}!`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        cpuScore++;
        return `${playerName} looses! ${computerChoice} beats ${playerChoice}!`;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        pcScore++;
        return `${playerName} wins! ${playerChoice} beats ${computerChoice}!`;
    } 
}

playRound()