var timerEl = document.getElementById("countdown");
var quizDivEl = document.getElementById("quiz-name-div");
var quizQuestEl = document.getElementById("hidden-container");
var questionsEl = document.getElementById("quiz-question");
var answerButtons = document.querySelectorAll(".answers")
var currentQuestion, currentQuestionIndex;
var currentAnswers, currentAnswerIndex;

var score = 0;


// questions and answers stored as object 
var quizQuestions = [
    {
    title: ["Which of the following is not the way to declare a Javascript variable?"],
    options: ['Var', 'Let', 'Variable', 'Const'],
    correctAnswer: ['Variable'],
    },
    {
    title: ["Which of the following is not a Javascript Data Type?"],
    options: ['Data', 'Number', 'String', 'Object'],
    correctAnswer: ['Data'],    
    },
    {
    title: ["How do you start a comment in Javascript?"],
    options: ['<!--', '//', 'Comment', '/*'],
    correctAnswer: ['//'],    
    },
    {
    title: ["Which Javascript data type can only have a value of true/false?"],
    options: ['Number', 'bigInt', 'Boolean', 'Object'],
    correctAnswer: ['Boolean'],    
    },
];




    
    
    
    
    






//When I click start the countdown timer starts counting
//When I click start the first question also appears 

function questionsStart() {
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function() {
        quizDivEl.setAttribute("style", "display:none");
        quizQuestEl.setAttribute("style", "display: block");
        currentQuestion = quizQuestions[0].title;
        
        countdownTimer();
        askQuestion();
    })

    
}

questionsStart();

//loop through questions after next is selected 
function askQuestion () {
    
    
    // determines quiz question
    for (let i = 0; i < quizQuestions[0].title.length; i++) {
        questionsEl.innerText = quizQuestions[i].title[i];
    // determines answers on buttons     
    for (let j = 0; j < quizQuestions[i].options.length; j++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "answers");
        btn.textContent = quizQuestions[i].options[j];
        
        
        btn.addEventListener("click", function(event) {
           
        if (event.target === quizQuestions[i].correctAnswer[0]) {
            console.log("you are right!");
            score++
        }
        else {
            console.log("you are wrong");
            score--
        }
        })
        quizQuestEl.appendChild(btn); 
       
    }
    
}
    
    
   
    
    


  

}








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

// When I click a wrong answer then wrong answer is displayed and 10 s is taken off the timer
//Next question appears

// When I click the correct answer then correct is displayed and the next question appears 

//Correct answers are assessed points

//incorrect answers deduct points

//score is tallied 

// user is allowed to enter initials to save high score to local storage

//high scores need to be pulled from local storage when high scores is clicked

