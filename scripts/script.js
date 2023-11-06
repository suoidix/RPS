// Javascript for rock, paper, scissors game
const choiceArr = ["rock", "paper", "scissors"];
let rounds = 5;
let pcScore = 0;
let cpuScore = 0;

const btns = document.querySelectorAll('#btn');

//game();
getPlayerChoice();

//function for computer selection
function getComputerChoice() {
    return choiceArr[(Math.floor(Math.random() * choiceArr.length))]
}

//function for player choice
/*function getPlayerChoice() {
    const pcChoice = prompt("Choose: Rock, Paper, or Scissors:").toLowerCase(); // prompt for input and change case to lower
    if (pcChoice == null || !choiceArr.includes(pcChoice)) { // determine if input is null or not equal to choice array
        alert("Please enter Rock, Paper, or Scissors."); // if true ask to input again
        return getPlayerChoice(); // must user return before recursive function call, otherwise otherwise the call will return undefined
    } else if (choiceArr.includes(pcChoice)){ // if present in array return choice
        return pcChoice; 
    }  
}*/


/*function for player name
function getPlayerName(){
    const playerName = prompt("What is your name?")
    return playerName; 
}*/

//function for play a round
function playRound(playerChoice) {

    const computerChoice = getComputerChoice();
    let result = ""

    if (playerChoice === computerChoice) {
        result = ("Tie!")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        cpuScore++;
        result = (`You lose, ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        pcScore++;
        result = (`You win ${playerChoice} beats ${computerChoice}!`);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        cpuScore++;
        result = (`You lose, ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        pcScore++;
        result = (`You win, ${playerChoice} beats ${computerChoice}!`);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        cpuScore++;
        result = (`You lose, ${computerChoice} beats ${playerChoice}!`);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        pcScore++;
        result = (`You win, ${playerChoice} beats ${computerChoice}!`);
    } 
    document.getElementById('result').innerHTML = result
}

//function to play game

function getPlayerChoice() {
    btns.forEach((btn) => {
        btn.addEventListener('click', () =>{
                playRound(btn.value); 
                console.log(`PC score: ${pcScore}`);
                console.log(`CPU score: ${cpuScore}`);
                rounds--;
                if (pcScore > cpuScore && rounds === 0) { 
                    alert (`You win! You scored ${pcScore} points!`);
                    result = 'Game reset.'
                    document.getElementById('result').innerHTML = result
                    rounds = 5;
                    pcScore = 0;
                    cpuScore = 0;
                } else if (cpuScore > pcScore && rounds === 0) {
                    alert (`You lose! Computer scored ${cpuScore} points!`);
                    result = 'Game reset.'
                    document.getElementById('result').innerHTML = result
                    rounds = 5;
                    pcScore = 0;
                    cpuScore = 0;
                } else if (rounds === 0) {
                    alert ('Tie! No one wins!')
                    result = 'Game reset.'
                    document.getElementById('result').innerHTML = result
                    rounds = 5;
                    pcScore = 0;
                    cpuScore = 0;
                }
        }) 
    })
}



/*function game() {

    alert("Let's play rock, paper, scissors!")

    const playerName = 'Dave' //getPlayerName();
    const playerChoice = getPlayerChoice();
    playRound(playerName, playerChoice);

    let rounds = 5;

    for(let i = 0; i < rounds; i++) {
        playRound(playerName);
    }

    //display winner based on best out of 5
    if (pcScore > cpuScore) { 
            alert (`You win! You scored ${pcScore} points!`);
        } else if (cpuScore > pcScore) {
            alert (`You lose! Computer scored ${cpuScore} points!`);
        } else
            alert ('Tie! No one wins!')  
} */