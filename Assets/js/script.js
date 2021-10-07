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
var answerEl = document.getElementById("options");
var answerButtons = document.querySelectorAll(".answers");
var correctEl = document.getElementById("correct-answers");
var btn = document.createElement("button");
btn.className += "answers";
var btn2 = document.createElement("button");
btn2.className += "answers";
let btn3 = document.createElement("button");
btn3.className += "answers";
let btn4 = document.createElement("button");
btn4.className += "answers";



var score = 0;



// questions 
var quizQuestions = ['What is the technique to invisibly graft live stitches together?', 'In addition to the knit stitch, what is the second basic knitting stitch?', 'Where does mohair yarn come from?', 'What is gauge in knitting patterns?'];

// answers for each button are stored in separate arrays 
var buttonOneAnswers = ['Cast On', 'Knot', 'Rabbit', 'Number of stitches and rows per inch', 'Thickness of needles', 'Weight of yarn', 'Width of yarn'];
var buttonTwoAnswers = ['Kitchener', 'Pearl', 'Cow', 'Thickness of needles'];
var buttonThreeAnswers = ['Brioche', 'Purl', 'Dog', 'Weight of yarn'];
var buttonFourAnswers = ['Short Rows', 'Slip', 'Goat', 'Width of yarn'];
var correctAnswers = ['Kitchener', 'Purl', 'Goat', 'Number of stitches and rows per inch'];
//correct answers for each question
// var questionOneCorrectAnswer = 'Kitchener';
// var questionTwoCorrectAnswer = 'Purl';
// var questionThreeCorrectAnswer = 'Goat';
// var questionFourCorrectAnswer = 'Number of stitches and rows per inch';

// index for the questions
var index = 0;

// indexes for the buttons
var buttonOneIndex = 0;
var buttonTwoIndex = 0;
var buttonThreeIndex = 0;
var buttonFourIndex = 0;
var correctAnswersIndex = 0;

console.log(correctAnswersIndex);


// on startbutton click the questions and answers appear to the page 
function quizStart() {
    startButton.addEventListener("click", function () {
        quizDivEl.setAttribute("style", "display:none");
        quizQuestEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");
        questionTextEl.innerText = quizQuestions[0];
        
        btn.textContent = buttonOneAnswers[0];
        answerEl.appendChild(btn);
        
        btn2.textContent = buttonTwoAnswers[0];
        answerEl.appendChild(btn2);
        
        btn3.textContent = buttonThreeAnswers[0];
        answerEl.appendChild(btn3);
        
        btn4.textContent = buttonFourAnswers[0];
        answerEl.appendChild(btn4);
       



      




        countdownTimer();

    })


}

nextButton.addEventListener("click", nextQuestion);
// questions and answers are flipped through 
function nextQuestion() {
    index++;
    index %= quizQuestions.length;
    questionTextEl.innerText = quizQuestions[index];
    
    buttonOneIndex++
    buttonOneIndex %= buttonOneAnswers.length;
    btn.textContent = buttonOneAnswers[index];

    buttonTwoIndex++
    buttonTwoIndex %= buttonTwoAnswers.length;
    btn2.textContent = buttonTwoAnswers[index];

    buttonThreeIndex++
    buttonThreeIndex %= buttonThreeAnswers.length;
    btn3.textContent = buttonThreeAnswers[index];

    buttonFourIndex++
    buttonFourIndex %= buttonFourAnswers.length;
    btn4.textContent = buttonFourAnswers[index];
    
    
    if (index < quizQuestions.length-1) {
        console.log("there are still questions left");
    }
    else  {
        console.log("last question");
        nextButton.setAttribute("style", "display: none;");
        
    }
    
}


//function to tally the score 
btn.addEventListener("click", function(event) {
    correctAnswersIndex = 0;
    if (event.target.textContent === correctAnswers[index]) {
       score++
       
       console.log(score);
    }
    else {
        console.log("Incorrect");
        score--
        console.log(score);
    }
})

btn2.addEventListener("click", function(event) {
    if (event.target.textContent === correctAnswers[index]) {
        score++
        console.log(score);
    }
    else {
        console.log("incorrect");
        score--
    }
})

btn3.addEventListener("click", function(event) {
    if (event.target.textContent === correctAnswers[index]) {
        score++
        console.log(score);
    }
    else {
        console.log("incorrect");
        score--
    }
})

btn4.addEventListener("click", function(event) {
    if (event.target.textContent === correctAnswers[index]) {
        score++
        console.log(score);
    }
    else {
        console.log("incorrect");
        score--
    }
})





// function to end the quiz 
function endQuiz() {
// display score and allow it to be saved to local storage 
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