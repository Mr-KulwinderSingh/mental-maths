
// As soon as the page will load along with the DOM contents
// Get the elements and add event listeners to them to start game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for ( let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert ("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
            
        });
    }

    runGame("number")



});

function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;
    let num3 = Math.floor(Math.random() * 25) +1;
    let num4 = Math.floor(Math.random() * 25) +1;
    let num5 = Math.floor(Math.random() * 10) +1;
    let num6 = Math.floor(Math.random() * 25) +1;
    let num7 = Math.floor(Math.random() * 25) +1;
    let num8 = Math.floor(Math.random() * 25) +1;
    let num9 = Math.floor(Math.random() * 25) +1;
    let num10 = Math.floor(Math.random() * 25) +1;
    let num11 = Math.floor(Math.random() * 25) +1;
    let num12 = Math.floor(Math.random() * 25) +1;

    if (gameType === "big-number") {
        displayBigNumbersQuestion1(num1);
    } else if (gameType === "big-number2") {
        displayBigNumbersQuestion2(num2);
    } else if (gameType === "big-number3") {
        displayBigNumbersQuestion3(num3);
    } else if (gameType === "big-number4") {
        displayBigNumbersQuestion4(num4);
    } else if (gameType === "small-number") {
        displaySmallNumbersQuestion1(num5);
    } else if (gameType === "small-number2") {
        displaySmallNumbersQuestion3(num6);
    } else if (gameType === "small-number3") {
        displaySmallNumbersQuestion4(num7);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw`unknown game type ${gameType}. Aborting!`;
    }

    

}

function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {



}

function displayBigNumbersQuestion1(operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator1').textContent = "";

}

function displayBigNumbersQuestion2(operand2) {
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "";

}
function displayBigNumbersQuestion3(operand3) {
    document.getElementById('operand3').textContent = operand3;
    document.getElementById('operator').textContent = "";

}
function displayBigNumbersQuestion4(operand4) {
    document.getElementById('operand4').textContent = operand4;
    document.getElementById('operator').textContent = "";

}
function displaySmallNumbersQuestion1(operand5) {
    document.getElementById('operand5').textContent = operand5;
    document.getElementById('operator').textContent = "";

}
function displaySmallNumbersQuestion2(operand6) {
    document.getElementById('operand6').textContent = operand6;
    document.getElementById('operator').textContent = "";

}
function displaySmallNumbersQuestion3(operand7) {
    document.getElementById('operand7').textContent = operand7;
    document.getElementById('operator').textContent = "";

}

function displaySmallNumbers() {


}

function displaySecondSmallNumbers() {


}

function displayThirdSmallNumbers() {


}