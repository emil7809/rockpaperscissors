"use strict";
window.addEventListener("load", start);

let playersChoice = "";
let computersChoice = "";


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

    


function start() {
    console.log("start");
    document.querySelector("#play_again").classList.add("hidden"); 
    document.querySelector("#black").classList.add("hidden"); 
    playerChoice()
}

function playerChoice() {
    console.log("playersChoice");

   

   rock.addEventListener("click", function() {
    playersChoice = "rock";
    computerRandomChoice();
   });

   paper.addEventListener("click", function() {
    playersChoice = "paper";
    computerRandomChoice();
   });

   scissors.addEventListener("click", function() {
    playersChoice = "scissors";
    computerRandomChoice();
   });
   
}

function computerRandomChoice() {
    console.log("computersRandomChoice");
   
    computersChoice = Math.floor(Math.random() * 2);

    startTimeAnimation()
}



function startTimeAnimation() {
    console.log("startTimeAnimation");

    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    document.querySelector("#player1").addEventListener("animationend", reveal);

   
}

function reveal() {
    console.log("reveal");
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    if (playersChoice === "rock") {
        document.querySelector("#player1").classList.add("rock");
    } else if (playersChoice === "paper") {
        document.querySelector("#player1").classList.add("paper");
    } else if (playersChoice === "scissors") {
        document.querySelector("#player1").classList.add("scissors");
    }
    
    if (computersChoice === 0) {
        document.querySelector("#player2").classList.add("rock");
    } else if (computersChoice === 1) {
        document.querySelector("#player2").classList.add("paper");
    } else if (computersChoice === 2) {
        document.querySelector("#player2").classList.add("scissors");
    }

    whoWins()
}

function whoWins() {
    console.log("whoWins");

    if (playersChoice === "rock" && computersChoice === 0) {
        showDraw();
    } else if (playersChoice === "rock" && computersChoice === 1) {
        showLooser();
    } else if (playersChoice === "rock" && computersChoice === 2) {
        showWinnner();
    } else if (playersChoice === "scissors" && computersChoice === 0) {
        showLooser();
    }
    else if (playersChoice === "scissors" && computersChoice === 1) {
        showWinnner();
    } else if (playersChoice === "scissors" && computersChoice === 2) {
        showDraw();
    } else if (playersChoice === "paper" && computersChoice === 0) {
        showWinnner();
    } else if (playersChoice === "paper" && computersChoice === 1) {
        showDraw();
    } else {
        showLooser();
    }
}

function showWinnner() {
    console.log("showWinnner");
    document.querySelector("#black").classList.remove("hidden"); 
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#play_again").classList.remove("hidden");
    document.querySelector("#play_again").addEventListener("click", restart);
}

function showLooser() {
    console.log("showLooser");
    document.querySelector("#black").classList.remove("hidden"); 
    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#play_again").classList.remove("hidden");
    document.querySelector("#play_again").addEventListener("click", restart);
}

function showDraw() {
    console.log("showDraw");
    document.querySelector("#black").classList.remove("hidden"); 
    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#play_again").classList.remove("hidden");
    document.querySelector("#play_again").addEventListener("click", restart);
}

function restart() {
playersChoice = "";
computersChoice = "";  

document.querySelector("#player1").classList.remove("scissors");
document.querySelector("#player1").classList.remove("paper");
document.querySelector("#player1").classList.remove("rock");

document.querySelector("#player2").classList.remove("scissors");
document.querySelector("#player2").classList.remove("paper");
document.querySelector("#player2").classList.remove("rock");

document.querySelector("#draw").classList.add("hidden");
document.querySelector("#win").classList.add("hidden");
document.querySelector("#lose").classList.add("hidden");

start();

}
