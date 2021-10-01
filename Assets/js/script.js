var timerEl = document.getElementById("countdown");
var quizDivEl = document.getElementById("quiz-name-div");
var quizQuestEl = document.getElementById("hidden-question");
// var score = 0;

// questions and answers stored as object 
var quizQuestions = 
    {
    title: 'Which of the following is not the way to declare a Javascript variable?',
    options: ['Var', 'Let', 'Variable', 'Const'],
    correctAnswer: 2,
    }
    // {
    // title: 'Which of the following is not a Javascript Data Type?',
    // options: ['Data', 'Number', 'String', 'Object'],
    // correctAnswer: 0,    
    // },
    // {
    // title: 'How do you start a comment in Javascript?',
    // options: ['<!--', '//', 'Comment', '/*'],
    // correctAnswer: 1,    
    // },
    // {
    // title: 'Which Javascript data type can only have a value of true/false?',
    // options: ['Number', 'bigInt', 'Boolean', 'Object'],
    // correctAnswer: 2,    
    // }
// ];

// for(var i=0; i < quizQuestions.length; i++) {
//function to put quizquestions on the page 
function askQuizQuestion () {
    var quizQuestionsDiv = document.getElementById("question-div");
    quizQuestionsDiv.textContent = quizQuestions.title;
    var answersOptions = document.querySelectorAll('.answers');
    answersOptions.forEach(function(element, index) {
        element.textContent = quizQuestions.options[element, index];
    });
   
}
// };

askQuizQuestion ();


//When I click start the countdown timer starts counting
//When I click start the first question also appears 

var btn = document.getElementById("start-button");
btn.addEventListener("click", function() {
    quizDivEl.setAttribute("style", "display:none");
    quizQuestEl.setAttribute("style", "display: block");



    countdownTimer();
})



function countdownTimer () {
    var timeLeft = 90;

    // call function to be executed every second or 1000 milliseconds

    var timeInterval = setInterval(function() {

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

// When I click a wrong answer then wrong answer is displayed and 10 s is taken off the timer
//Next question appears

// When I click the correct answer then correct is displayed and the next question appears 

//Correct answers are assessed points

//incorrect answers deduct points

//score is tallied 

// user is allowed to enter initials to save high score to local storage

//high scores need to be pulled from local storage when high scores is clicked

