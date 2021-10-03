var timerEl = document.getElementById("countdown");
var quizDivEl = document.getElementById("quiz-name-div");
var quizQuestEl = document.getElementById("hidden-container");
var questionsEl = document.getElementById("quiz-question");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");



var score = 0;


// questions and answers stored as object 
  var quizQuestions = [
    {
    title: ["Which of the following is not the way to declare a Javascript variable?"],
    options: ['Var', 'Let', 'Variable', 'Const'],
    correctAnswer: 'Variable',
    },
    {
    title: ["Which of the following is not a Javascript Data Type?"],
    options: ['Data', 'Number', 'String', 'Object'],
    correctAnswer: 'Data',    
    },
    {
    title: ["How do you start a comment in Javascript?"],
    options: ['<!--', '//', 'Comment', '/*'],
    correctAnswer: '//',    
    },
    {
    title: ["Which Javascript data type can only have a value of true/false?"],
    options: ['Number', 'bigInt', 'Boolean', 'Object'],
    correctAnswer: 'Boolean',    
    }
];




    
    
    
    
    






//When I click start the countdown timer starts counting
//When I click start the first question also appears 

function quizStart() {
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", function() {
        quizDivEl.setAttribute("style", "display:none");
        quizQuestEl.setAttribute("style", "display: block");
        
        
        countdownTimer();
        generateQuestion();
    })

    
}






//loop through questions 
function generateQuestion () {
    
for (let i =0; i < quizQuestions[0].title.length; i++) {
    

    var currentQuestion = quizQuestions[i].title[i];
    

    for (let j = 0; j <quizQuestions[i].options.length; j++) {
        
        var currentAnswers = quizQuestions[i].options[j];
        
        
        nextQuestion(currentQuestion, currentAnswers);  
    }
    
    
}   
  


   
}



//function to ask next question
function nextQuestion(currentQuestion, currentAnswers) {
    questionsEl.innerText = currentQuestion;

    

    var btn = document.createElement("button");
    btn.setAttribute("class", "answers");
    btn.textContent = currentAnswers;


    quizQuestEl.appendChild(btn);
    

    btn.addEventListener("click", function(event) {
        if (event.targetInnerText === currentQuestion.correctAnswer) {
            
            score++
            
            
        }
        else {
            console.log("incorrect");
            score--
        }
    })

    
    

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



//score is tallied 

// user is allowed to enter initials to save high score to local storage

//high scores need to be pulled from local storage when high scores is clicked

quizStart();