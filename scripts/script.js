// Javascript for rock, paper, scissors game

const choiceArr = ["rock", "paper", "scissors"];
let pcScore = 0;
let cpuScore = 0;

game();

//function for computer selection
function getComputerChoice() {
    return choiceArr[(Math.floor(Math.random() * choiceArr.length))]
}

//function for player choice
function getPlayerChoice() {
    const pcChoice = prompt("Choose: Rock, Paper, or Scissors:").toLowerCase(); // prompt for input and change case to lower
    if (pcChoice == null || !choiceArr.includes(pcChoice)) { // determine if input is null or not equal to choice array
        alert("Please enter Rock, Paper, or Scissors."); // if true ask to input again
        return getPlayerChoice(); // must user return before recursive function call, otherwise otherwise the call will return undefined
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
function playRound(playerName) {

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        alert ("Tie!")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        cpuScore++;
        alert (`${playerName} looses! ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        pcScore++;
        alert (`${playerName} wins! ${playerChoice} beats ${computerChoice}!`);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        cpuScore++;
        alert (`${playerName} looses! ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        pcScore++;
        alert (`${playerName} wins! ${playerChoice} beats ${computerChoice}!`);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        cpuScore++;
        alert (`${playerName} looses! ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        pcScore++;
        alert (`${playerName} wins! ${playerChoice} beats ${computerChoice}!`);
    } 
}

//function to play game
function game() {

    alert("Let's play rock, paper, scissors!")

    const playerName = getPlayerName();
    let rounds = 5;

    for(let i = 0; i < rounds; i++) {
        playRound(playerName);
    }

    //display winner based on best out of 5
    if (pcScore > cpuScore) { 
            alert (`You win! You scored ${pcScore} points!`);
        } else if (cpuScore > pcScore) {
            alert (`You loose! Computer scored ${cpuScore} points!`);
        } else
            alert ('Tie! No one wins!')   
}