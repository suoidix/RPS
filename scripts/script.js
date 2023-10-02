// Javascript for rock, paper, scissors game

let rpsArr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    rpsArr[(Math.floor(Math.random() * rpsArr.length))]
}
