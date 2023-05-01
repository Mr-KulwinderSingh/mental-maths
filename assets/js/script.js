
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
    let num5 = Math.floor(Math.random() * 25) +1;
    let num6 = Math.floor(Math.random() * 25) +1;
    let num7 = Math.floor(Math.random() * 25) +1;
    let num8 = Math.floor(Math.random() * 25) +1;
    let num9 = Math.floor(Math.random() * 25) +1;
    let num10 = Math.floor(Math.random() * 25) +1;
    let num11 = Math.floor(Math.random() * 25) +1;
    let num12 = Math.floor(Math.random() * 25) +1;

    if (gameType === "big-number") {
        displayBigNumbers(num1, num2, num3, num4);
    } else {
        alert(`unknown gmae type: ${gameType}`);
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

function displayBigNumbers(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator1').textContent = "+";

}

function displaySmallNumbers() {


}

function displaySecondSmallNumbers() {


}

function displayThirdSmallNumbers() {


}