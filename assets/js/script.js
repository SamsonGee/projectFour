var count = 20;
var questionCount = 0;

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
    showResults();
};

//function that runs the timer, every 1 second
var runTimer = function(){
    var timer = setInterval(function() {
        count--;
        document.querySelector("#timer").textContent = count;
        if(count <= 0) {
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
    // timer resets
    count = 20;
    document.querySelector("#timer").textContent = count;
};

var lessTime = function(){
    count = count-5;
};

var moreTime = function(){
    count = count+5;
};

var effectTimer = function(){
    if(quizSelect) {
        
    }
};

var questionCycle = function () {
    
    for (index=0; index < questions.length; index++){
        askQuestions(index);
        /* quizAnswer.addEventListener("click", count+10);
        quizSelect.addEventListener("click", count-10); */
        effectTimer();
        
        /* if (quizSelect.addEventListener("click", effectTimer)){
            console.log("test");
        }; */
        /* quizSelect.addEventListener("click", effectTimer); */
        
        console.log("testies");
    }
}

var startQuiz = function(event){
    event.preventDefault();
    quiz.classList.add("active")
    runTimer();
    questionCycle();
    /* stopQuiz(); */
};

var askQuestions = function(index){
    var quizBox = document.querySelector(".quiz-box");
    var quizList = document.querySelector(".quiz-list");
    let questionPrompt = '<span><strong>' + questions[index].ask + ')</strong></span>';
    let quizOptions = '<div class="quiz-options"><span class="correct list-group-item rounded-pill">' + questions[index].options[0] + '</span></div>'
                    + '<div class="quiz-options"><span class="correct list-group-item rounded-pill">' + questions[index].options[1] + '</span></div>'
                    + '<div class="quiz-options"><span class="correct list-group-item rounded-pill">' + questions[index].options[2] + '</span></div>';
    quizBox.innerHTML = questionPrompt;
    quizList.innerHTML = quizOptions
    console.log(questions[index].ask);
    var options = quizOptions.querySelectorAll("quiz-options");
    for (var i = 0; i < quizList.length; i++){
     quizList[i].setAttribute("click", "answerSelected(this)");   
    }
}

function answerSelected(answer){

}

//an array that houses the questions and answers
let questions = [
    {
        number: 1,
        ask: "What was the name of the first Robin? (Batman's sidekick)",
        answer: "Dick Grayson",
        options: [
            "Dick Grayson",
            "Jason Todd",
            "Tim Drake"
        ]
    },
    {
        number: 2,
        ask: "Which of these characters are the fastest?",
        answer: "The Flash",
        options: [
            "The Flash",
            "Superman",
            "Green Lantern"
        ]
    },
    {
        number: 3,
        ask: "Who is a villain to Green Lantern?",
        answer: "Sinestro",
        options: [
            "Solomon Grundy",
            "Poison Ivy",
            "Sinestro"
        ]
    }
];

quizSelect.addEventListener("click", moreTime);
/* quizAnswer.correct.addEventListener("click", lessTime); */
hsButton.addEventListener("click", showResults);
starter.addEventListener("click", startQuiz);
