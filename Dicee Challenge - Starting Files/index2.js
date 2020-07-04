// Variables

var num1 = diceCalc1();
var num2  = diceCalc2();

// The functions below create random numbers

function diceCalc1() { 
   var randomNum1 = Math.floor(Math.random() * 6) + 1;
   return randomNum1;
}

function diceCalc2() { 
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    return randomNum2;
} 

// The functions below swap the <img> src

function srcSwapDice1() {
    document.getElementById("img1").src = "images/dice" + num1 + ".png"
}

function srcSwapDice2() {
    document.getElementById("img2").src = "images/dice" + num2 + ".png"
}

// The functions below call the new randomized src for the winner() function else if statement

function srcCall1() {
    return document.getElementById("img1").src
}

function srcCall2() {
    return document.getElementById("img2").src
}

// This function is the else if determining the winner & changing the header

function winner() {

    if (num1 > num2) {
        document.getElementById("header").innerHTML = "🏆 Player 1 Wins!";
    }
    else if (num1 < num2) {
        document.getElementById("header").innerHTML = "Player 2 Wins! 🏆";
    }
    else if (srcCall1() === srcCall2()) {
        document.getElementById("header").innerHTML = "DRAW!";
    }
}

    
