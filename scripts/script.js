// Javascript for rock, paper, scissors game

let pcScore = 0;
let cpuScore = 0;
const choiceArr = ["rock", "paper", "scissors"];

//function for computer selection
function getComputerChoice() {
    return rpsArr[(Math.floor(Math.random() * rpsArr.length))]
}

//function for player choice
function getPlayerChoice() {
    const pcChoice = prompt("Choose: Rock, Paper, or Scissors:").toLowerCase(); // prompt for input and change case to lower
    if (pcChoice == null || !choiceArr.includes(pcChoice)){ // determine if input is null or not equal to choice array
        console.log("Please enter Rock, Paper, or Scissors."); // if true ask to input again
    } else if (choiceArr.includes(pcChoice)) { // if present in array return choice
        return pcChoice;
    }
}

function getPlayerName(){
    const playerName = prompt("What is your name?")
    return playerName; 
}

