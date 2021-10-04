// elements on the page that we will manipuolate
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("countdown");
var option1Button = document.getElementById("option1");
var option2Button = document.getElementById("option2");
var option3Button = document.getElementById("option3");
var option4Button = document.getElementById("option4");
var nextButton = document.getElementById("next-button");
var spanCorrect = document.getElementById("correct");
var spanIncorrect = document.getElementById("incorrect");
var quizDivEl = document.getElementById("quiz-name-div");
var quizQuestEl = document.getElementById("hidden-container");
var questionTextEl = document.getElementById("question-text");
var quizScoreEl = document.getElementById("hidden-score-container");
var submitButton = document.getElementById("submit-button");
var controlsEl = document.getElementById("hidden-controls-container");

// placekeeper for the store 
var score = 0;
var currentQuestion = 0;
var currentAnswers = 0;
var q = 0;

// questions and answers stored as object
var quizQuestions = [
    {
    title: 'Which of the following is not the way to declare a Javascript variable?',
    options: ['Var', 'Let', 'Variable', 'Const'],
    correctAnswer: 'Variable',
    },
    {
    title: 'Which of the following is not a Javascript Data Type?',
    options: ['Data', 'Number', 'String', 'Object'],
    correctAnswer: 'Data',    
    },
    {
    title: 'How do you start a comment in Javascript?',
    options: ['<!--', '//', 'Comment', '/*'],
    correctAnswer: '//',    
    },
    {
    title: 'Which Javascript data type can only have a value of true/false?',
    options: ['Number', 'bigInt', 'Boolean', 'Object'],
    correctAnswer: 'Boolean',    
    }
];




    
    
    
    
    






//When I click start the countdown timer starts counting
//When I click start the first question also appears 

function quizStart() {
    startButton.addEventListener("click", function() {
        quizDivEl.setAttribute("style", "display:none");
        quizQuestEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");
        
        
        
        
        countdownTimer();
        displayQuestion();
    })

    
}


// display question and answers to html
function displayQuestion() {
    for (var i = 0; i <quizQuestions.length; i++) {
        currentQuestion = quizQuestions[i].title;
        questionTextEl.innerText = currentQuestion;
        
          
        
    }
    
}







//when next button is clicked next question is generated
function nextQuestion () {

    //logic to print next question to the html
    console.log("I was clicked");
    }

nextButton.addEventListener("click", nextQuestion);


submitButton.addEventListener("click", function () {
    quizQuestEl.setAttribute("style", "display: none;");
    quizScoreEl.setAttribute("style", "display: block");
})







// timer countdown function
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

 //if score wrong or correct display result
    // if wrong take time off the timer 
    // move to next question
    //go through questions
    //score tally @end
    //text box for initials
    //save initials and score to local storage


    //high scores are availble to be viewed via link

quizStart();