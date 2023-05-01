
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
                alert(`You clicked ${gameType}`);
            }
            
        });
    }

});

function runGame() {

}

function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {



}

function displayQuestion() {


}