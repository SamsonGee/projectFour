var count = 10;

var hsButton = document.querySelector("#highscores")
var starter = document.querySelector("#startquiz");
var quiz = document.querySelector(".quiz");

// function to pull and log high score
var showResults = function(event){
    alert("Let's see your score!")

    var highScore = localStorage.getItem ("highscore");
    highScore = highScore || 0;

    // if high score is beaten;

    if (count > highScore) {
        var name = window.prompt("What's your name?")
        localStorage.setItem ("name", name);
        localStorage.setItem ("highscore", count);
        // alert
        alert(name + " now has a high score of " + count + "!")
    }
    else {
        // alert
        alert(name + " did not beat the high score of " + count + ". Maybe next time!")
    }

    var playerAgainConfirm = window.confirm("Would you like to play again?");

    if (playerAgainConfirm) {
        //restart game
        startQuiz();
    }

    else {
        window.alert("Thank you for playing! Come back again soon!")
    }
};

var stopQuiz = function(){
    quiz.classList.remove("active");
};

//function that runs the timer, every 1 second
var runTimer = function(){
    var timer = setInterval(function() {
        count--;
        document.querySelector("#timer").textContent = count;
        if(count === 0) {
        stopInterval()
        stopQuiz();
        /* showResults(); */
        }
        }, 1000);
    
        // once timer is at 0, we clear the interval, and alert the time is up.
    var stopInterval = function() {
        document.querySelector("#timer").textContent = count;
        alert("Your time is up!");
        clearInterval(timer);
        };
};

var startQuiz = function(event){
    event.preventDefault();
    quiz.classList.add("active")
    runTimer();
    /* askQuestions(); */
    /* stopQuiz(); */
};

hsButton.addEventListener("click", showResults)
starter.addEventListener("click", startQuiz);
/* scoreshower.addEventListener("click", showScores); */
