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

//function for play a round
function playRound(playerChoice) {

    const computerChoice = getComputerChoice();
    let result = ""

    if (playerChoice === computerChoice) {
        result = (`Tie! You both chose ${playerChoice}! <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`)
    }  else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper") {
        pcScore++;
        result = (`You win, ${playerChoice} beats ${computerChoice}! <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`);
    } else {
        cpuScore++;
        result = (`You lose, ${computerChoice} beats ${playerChoice}! <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`);
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
                    resetGame();
                } else if (cpuScore > pcScore && rounds === 0) {
                    alert (`You lose! Computer scored ${cpuScore} points!`);
                    resetGame();
                } else if (rounds === 0) {
                    alert ('Tie! No one wins!')
                    resetGame();
                }
        }) 
    })
}

//function to reset game
function resetGame() {
    result = 'Game reset.'
    document.getElementById('result').innerHTML = result
    rounds = 5;
    pcScore = 0;
    cpuScore = 0;
}