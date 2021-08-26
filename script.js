"use strict";
window.addEventListener("load", start);

let winner ="computer";




function start() {
    console.log("start");

    playersChoice()
}

function playersChoice() {
    console.log("playersChoice");

    computersRandomChoice()
}

function computersRandomChoice() {
    console.log("computersRandomChoice");

    startTimeAnimation()
}

function startTimeAnimation() {
    console.log("startTimeAnimation");

    if (winner === "computer") {
        showLooser()
    } else if (winner ==="user") {
        showWinnner();
    } else {
        showDraw();
    }

    whoWins()
}

function whoWins() {
    console.log("swhoWins");
}

function showWinnner() {
    console.log("showWinnner");
}

function showLooser() {
    console.log("showLooser");
}

function showDraw() {
    console.log("showDraw");
}

function tryAgain() {
    console.log("tryAgain");
}