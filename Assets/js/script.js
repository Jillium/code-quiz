// elements on the page that we will manipuolate
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("countdown");
var nextButton = document.getElementById("next-button");
var spanCorrect = document.getElementById("correct");
var spanIncorrect = document.getElementById("incorrect");
var quizDivEl = document.getElementById("quiz-name-div");
var quizQuestEl = document.getElementById("hidden-container");
var questionTextEl = document.getElementById("question-text");
var quizScoreEl = document.getElementById("hidden-score-container");
var submitButton = document.getElementById("submit-button");
var controlsEl = document.getElementById("hidden-controls-container");
var answerButtons = document.getElementsByClassName("answers");



var score = 0;



// questions and answers stored as object
var quizQuestions = ['Question One', 'Question two', 'Question three', 'Question 4'];
index = 0;






function quizStart() {
    startButton.addEventListener("click", function () {
        quizDivEl.setAttribute("style", "display:none");
        quizQuestEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");
        questionTextEl.innerText = quizQuestions[0];
      



      




        countdownTimer();

    })


}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    index++;
    index %= quizQuestions.length
    questionTextEl.innerText = quizQuestions[index];
}









submitButton.addEventListener("click", function () {
    quizQuestEl.setAttribute("style", "display: none;");
    quizScoreEl.setAttribute("style", "display: block");
})






var timeLeft = 90;

// timer countdown function
function countdownTimer() {
    

    // call function to be executed every second or 1000 milliseconds

    var timeInterval = setInterval(function () {

        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + 's';
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            window.alert("Time is up!");
        }
    }, 1000);
}

//if score wrong or correct display result
// if wrong take time off the timer 
// move to next question
//go through questions
//score tally @end
//text box for initials
//save initials and score to local storage


//high scores are availble to be viewed via link

quizStart();