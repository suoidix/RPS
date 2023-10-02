// Javascript for rock, paper, scissors game

let rpsArr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return rpsArr[(Math.floor(Math.random() * rpsArr.length))]
}
