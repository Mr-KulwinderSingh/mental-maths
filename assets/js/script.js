
// As soon as the page will load along with the DOM contents
// Get the elements and add event listeners to them to start game

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                getTarget();
            } else if (this.getAttribute("data-type") === "How-to-play") {
                let play = this.getAttribute("data-type");
                myFunction(play);
            } else if (this.getAttribute("data-type") === "information") {
                let infor = this.getAttribute("data-type");
                aboutGame(infor);
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

        });
    }





});

function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 25;
    let num2 = Math.floor(Math.random() * 5) + 1;
    let num3 = Math.floor(Math.random() * 25) + 20;
    let num4 = Math.floor(Math.random() * 25) + 9;
    let num5 = Math.floor(Math.random() * 10) + 1;
    let num6 = Math.floor(Math.random() * 10) + 2;









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
        displaySmallNumbersQuestion2(num6);
    } else if (gameType === "small-number3") {
        displaySmallNumbersQuestion3(num5);
    } else if (gameType === "small-number4") {
        displaySmallNumbersQuestion4(num6);
    } else if (gameType === "small-number5") {
        displaySmallNumbersQuestion5(num5);
    } else if (gameType === "small-number6") {
        displaySmallNumbersQuestion6(num6);
    } else if (gameType === "small-number7") {
        displaySmallNumbersQuestion7(num5);
    } else if (gameType === "small-number8") {
        displaySmallNumbersQuestion8(num6);
    } else if (gameType === "small-number9") {
        displaySmallNumbersQuestion9(num5);
    } else if (gameType === "small-number10") {
        displaySmallNumbersQuestion10(num6);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type ${gameType}. Aborting!`;
    }



}

function checkAnswer() {


}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operand3 = parseInt(document.getElementById('operand3').innerText);
    let operand4 = parseInt(document.getElementById('operand4').innerText);
    let operand5 = parseInt(document.getElementById('operand5').innerText);
    let operand6 = parseInt(document.getElementById('operand6').innerText);

    let operator1 = document.getElementById("operator1").innerText;
    let operator2 = document.getElementById("operator2").innerText;
    let operator3 = document.getElementById("operator3").innerText;
    let operator5 = document.getElementById("operator5").innerText;


    if (operator1 === "+") {
        return [operand1 * operand2 + operand3 - operand4 + operand5 / operand6];
    } else {
        alert(`You need to choose at least 6 digits to play`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }
}


function incrementScore() {


}

function incrementWrongAnswer() {



}

function displayBigNumbersQuestion1(operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator1').textContent = "+";

}

function displayBigNumbersQuestion2(operand2) {
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator2').textContent = "+";

}
function displayBigNumbersQuestion3(operand3) {
    document.getElementById('operand3').textContent = operand3;
    document.getElementById('operator3').textContent = "x";

}
function displayBigNumbersQuestion4(operand4) {
    document.getElementById('operand4').textContent = operand4;
    document.getElementById('operator4').textContent = "+";

}
function displaySmallNumbersQuestion1(operand5) {

    document.getElementById('operand5').textContent = operand5;
    document.getElementById('operator5').textContent = "/";

}
function displaySmallNumbersQuestion2(operand6) {

    document.getElementById('operand6').textContent = operand6;
    document.getElementById('operator').textContent = "/";


}
function displaySmallNumbersQuestion3(operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator1').textContent = "+";

}

function displaySmallNumbersQuestion4(operand2) {
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator2').textContent = "x";
}

function displaySmallNumbersQuestion5(operand3) {
    document.getElementById('operand3').textContent = operand3;
    document.getElementById('operator3').textContent = "x";
}

function displaySmallNumbersQuestion6(operand4) {
    document.getElementById('operand4').textContent = operand4;
    document.getElementById('operator4').textContent = "+";
}
function displaySmallNumbersQuestion7(operand5) {

    document.getElementById('operand5').textContent = operand5;
    document.getElementById('operator5').textContent = "/";
}

function displaySmallNumbersQuestion8(operand6) {

    document.getElementById('operand6').textContent = operand6;
    document.getElementById('operator').textContent = "/";

}

function displaySmallNumbersQuestion9(operand1) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator1').textContent = "+";

}
function displaySmallNumbersQuestion10(operand2) {
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator2').textContent = "x";

}

function myFunction() {
    let play = document.getElementById('play-instructions');

    play.innerHTML = `<p>To play the game please follow the steps. 
       <ol>
       <li>Choose the combination of six numbers, big and small. 3 maximum big numbers and 3 small or you can 
       have a choice of all small, it's your choice.
       </li>
       <li>If your answer is coming in decimal points not to worry, it is possible to get the answer in the decimal points, 
       just to make it easier the game has rounded off answer.
       </li>
       <li>After choosing the numbers using human brain try to achieve the given target.
       </li>
       <li> You have to either add, subtract,
      multiply or divide to match the result in the target.
       </li>
       <li>If you can get the target within 30 seconds then
       you are the winner and your mathematical skills are excellent.
       </li>
       </ol></p>`;

    play.style.background = 'linear-gradient(#f8f6c2, #36eddd)';
    play.style.border = '1px solid blue';
    play.style.borderRadius = '10px';

}

function aboutGame() {
    let infor = document.getElementById('info');

    infor.innerHTML = `<p>The Mental Maths is a mathematical fun game to play with the numbers. 
    The game is designed for younger children to play & learn basic maths, but any person of any age can play. 
    It is all about your mathematical knowledge and how challenging human brain is? Use of calculator is not recomended for this game. </p>`;

    infor.style.background = 'linear-gradient(#f8f6c2, #36eddd)';
    infor.style.border = '1px solid blue';
    infor.style.borderRadius = '10px';

}

function getTarget() {
    let calculatedAnswer = calculateCorrectAnswer();

    Answer = Math.round(calculatedAnswer);

    document.getElementById("target").innerText = Answer;

    
        alert("Please choose six digits to play");
    

}
