// Variables 

var arr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]; 
          
// Functions that prints random string array thats been predefined above vs just a single number like in index2.js
          
function diceFun1() { 
   return arr[Math.floor(Math.random() * arr.length)]; 
}

function diceFun2() { 
    return arr[Math.floor(Math.random() * arr.length)];  
}  

function srcSwapDice1() {
    document.getElementById("img1").src = diceFun1();
}

function srcSwapDice2() {
    document.getElementById("img2").src = diceFun2();
}