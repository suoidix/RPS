// Javascript for rock, paper, scissors game
const choiceArr = ["rock", "paper", "scissors"];
let pcScore = 0;
let cpuScore = 0;

const btns = document.querySelectorAll('#btn');
const reset = document.getElementById('reset');

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
    let cpuItem = ""
    let images = ""

    if (playerChoice === computerChoice) {
        result = (`Tie! You both chose ${playerChoice}! 
        <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`)
        cpuItem = (`Computer chose ${computerChoice}!<br><br>`)
        images
    }  else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper") {
        pcScore++;
        result = (`You win, ${playerChoice} beats ${computerChoice}! 
        <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`);
        cpuItem = (`Computer chose ${computerChoice}!<br><br>`)
        images
    } else {
        cpuScore++;
        result = (`You lose, ${computerChoice} beats ${playerChoice}! 
        <br><br> Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`);
        cpuItem = (`Computer chose ${computerChoice}!<br><br>`)
        images
    }
    document.getElementById('result').innerHTML = result
    document.getElementById('cpuIcon').innerHTML = cpuItem
    getImage(computerChoice, playerChoice);
}

//function to play game
function getPlayerChoice() {
    let cpuItem = "";
    result = "";
    btns.forEach((btn) => {
        btn.addEventListener('click', () =>{
                playRound(btn.value); 
                if (pcScore === 5) { 
                    cpuItem = (`You win! You scored ${pcScore} points!<b><br><br>`);
                    resetGame();
                    document.getElementById('cpuIcon').innerHTML = cpuItem
                } else if (cpuScore === 5) {
                    cpuItem = (`You lose! Computer scored ${cpuScore} points!<b><br><br>`);
                    resetGame();
                    document.getElementById('cpuIcon').innerHTML = cpuItem
                } 
        }) 
    })
}

//function to reset game
function resetGame() {
    clearImage = "";
    cpuItem = "";
    result = `<b>Final Score:</b><br><br>Player Score: ${pcScore} <br> Computer Score: ${cpuScore}`
    document.getElementById('result').innerHTML = result
    disableButtons();
    createResetButton();
    pcScore = 0;
    cpuScore = 0;
    document.getElementById('resetBtn').onclick = function() {
        btns.forEach(btn => {
            btn.disabled = false
        })
        const resetBtn = document.getElementById('resetBtn');
        resetBtn.remove();
        document.getElementById('computerImage').innerHTML = clearImage
        document.getElementById('playerImage').innerHTML = clearImage
        result = ""
        cpuItem = "Let's play rock, paper, scissors! "
        document.getElementById('result').innerHTML = cpuItem
        document.getElementById('cpuIcon').innerHTML = result
    }
}

//function to insert image to playing field
function getImage (computerChoice, playerChoice) {
    let cpuImage = ""
    let playerImage = ""

    if (computerChoice === 'rock') {
        cpuImage = '<img src ="./images/rock.png">'
    }
    else if (computerChoice === 'paper') {
        cpuImage = '<img src ="./images/paper.png">'
    }
    else if (computerChoice === 'scissors') {
        cpuImage = '<img src ="./images/scissors.png">'
    }

    if (playerChoice === 'rock') {
        playerImage = '<img src ="./images/rock.png">'
    }
    else if (playerChoice === 'paper') {
        playerImage = '<img src ="./images/paper.png">'
    }
    else if (playerChoice === 'scissors') {
        playerImage = '<img src ="./images/scissors.png">'
    }

    document.getElementById('computerImage').innerHTML = cpuImage
    document.getElementById('playerImage').innerHTML = playerImage
}

//disable RPS buttons
function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true
    })
}

//reset game button 
function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game!';
    resetButton.id = 'resetBtn';
    reset.appendChild(resetButton);
} 