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
var correctResultsEl = document.getElementById("hidden-correct");
var wrongResultsEl = document.getElementById("hidden-incorrect");
var highScoreButton = document.getElementById("high-score-button");
var highScoreEl = document.getElementById("hidden-high-score");
var playAgainButton = document.getElementById("play-again");

btn.className += "buttons";
var btn2 = document.createElement("button");
btn2.className += "buttons";
let btn3 = document.createElement("button");
btn3.className += "buttons";
let btn4 = document.createElement("button");
btn4.className += "buttons";

var initialsInput = document.getElementById("initials");

var score = 0;
var timeInterval 




// questions 
var quizQuestions = ['What is the technique to invisibly graft live stitches together?', 'In addition to the knit stitch, what is the second basic knitting stitch?', 'Where does mohair yarn come from?', 'What words refers to the number of stitches and rows per inch?'];

// answers for each button are stored in separate arrays 
var buttonOneAnswers = ['Cast On', 'Knot', 'Rabbit', 'Gauge'];
var buttonTwoAnswers = ['Kitchener', 'Pearl', 'Cow', 'Blocking'];
var buttonThreeAnswers = ['Brioche', 'Purl', 'Dog', 'Weight'];
var buttonFourAnswers = ['Grafting', 'Slip', 'Goat', 'Darning'];
var correctAnswers = ['Kitchener', 'Purl', 'Goat', 'Gauge'];


// index for the questions
var index = 0;

// indexes for the buttons
var buttonOneIndex = 0;
var buttonTwoIndex = 0;
var buttonThreeIndex = 0;
var buttonFourIndex = 0;
var correctAnswersIndex = 0;




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



        btn.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                correctResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })

        btn2.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                correctResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;

            }
        })

        btn3.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                correctResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })

        btn4.addEventListener("click", function (event) {
            if (event.target.innerText === correctAnswers[index]) {
                score++;
                correctResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
            }
        })









        countdownTimer();

    })


}

nextButton.addEventListener("click", nextQuestion);
// questions and answers are flipped through 
function nextQuestion() {
    index++;
    index %= quizQuestions.length;
    questionTextEl.innerText = quizQuestions[index];

    correctAnswersIndex++;
    correctAnswersIndex %= correctAnswers.length;

    correctResultsEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");


    btn.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                correctResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn2.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                correctResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn3.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                correctResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;
        }
    })

    btn4.addEventListener("click", function (event) {
        if (event.target.innerText === correctAnswers[index]) {
            score +
                correctResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 3;

        }
    })


    buttonOneIndex++;
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


    if (index < quizQuestions.length - 1) {
        // there are still questions left
    }
    else {
        // last question display score box on next click
        nextButton.setAttribute("style", "display: none;");
        

    }
    
}







// function to end the quiz 
function endQuiz() {
    // display score and allow it to be saved to local storage 
    submitButton.setAttribute("style", "display: none;");
    quizQuestEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");
    correctResultsEl.setAttribute("style", "display: none;");
    nextButton.setAttribute("style", "display:none;");
    quizScoreEl.setAttribute("style", "display: block;");
    quizDivEl.setAttribute("style", "display:none;");

    var scoreDisplay = score;
    var scoreEl = document.getElementById("score");
    scoreEl.innerText = "All Done! Your score is " + scoreDisplay;
    clearInterval(timeInterval);

}





// button to submit when questions are finished 
submitButton.addEventListener("click", function () {
    quizQuestEl.setAttribute("style", "display: none;");
    quizScoreEl.setAttribute("style", "display: block");
    wrongResultsEl.setAttribute("style", "display: none;");
    correctResultsEl.setAttribute("style", "display: none;");
    nextButton.setAttribute("style", "display: none;");
    endQuiz();
    
})


// pull values from local storage to display when high score button is clicked

highScoreButton.addEventListener("click", function () {
    quizQuestEl.setAttribute("style", "display: none;");
    quizDivEl.setAttribute("style", "display:none");
    quizScoreEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");
    correctResultsEl.setAttribute("style", "display: none;");
    controlsEl.setAttribute("style", "display: none;");
    highScoreEl.setAttribute("style", "display: block;");


    // get tasks from local storage and display them
    savedScore = JSON.parse(localStorage.getItem("user"));
    var scoreList = document.getElementById("score-list");
    scoreList.setAttribute("style", "list-style: none;");
    var listItemEl = document.createElement("li");
    listItemEl.setAttribute("style", "align-items: center;");
    listItemEl.innerText = savedScore.name + " " + savedScore.score;
    scoreList.appendChild(listItemEl);

    // highScoreEl.innerText = savedScore.name + "  " + savedScore.score;

    


})


// save values to local storage 
var saveButton = document.getElementById("save-button");


saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    // get values from the form
    initials = initialsInput.value.trim();

    // if values are valid

    if (!initials) {
        alert("Please input your initials");
    }
    // save them in local storage
    var savedScore = {
        name: initials,
        score: score
    };

    localStorage.setItem("user", JSON.stringify(savedScore));


});
// button to play the quiz again
playAgainButton.addEventListener("click", function() {
    quizDivEl.setAttribute("style", "display: block;");
    quizScoreEl.setAttribute("style", "display: none;");
    highScoreEl.setAttribute("style", "display: none;");
    
});





var timeLeft = 60;

// timer countdown function
function countdownTimer() {


    // call function to be executed every second or 1000 milliseconds

    timeInterval = setInterval(function () {

        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + 's';
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            window.alert("Time is up!");
            endQuiz();
            // run end game function if time runs out

        }
    }, 1000);
}
















quizStart();