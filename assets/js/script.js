//* * * *~ START OF SCRIPT ~* * * * //
var body = document.body;

// set interval //

var currentQuestionIndex = 0;
var time = questions.length * 10;
function countDownFrom (10) {
var timerId;
timerId = setInterval(tick, 3000);

// querySelector to select the elements //

var timerEl = document.getElementById("timer");

// querySelector to select the elements //
// to start and submit buttons //

var startBtn = document.getElementById("start");
var submitBtn = document.querySelector("submit");

//

var optionsEl = document.querySelector('#options');
var questionsEl = document.querySelector('#questions');
var nameEl = document.querySelector('#name');
var feedbackEl = document.querySelector('#feedback');

//* * * *~ BEGINNING OF QUIZ CODE ~* * * * //
// to start quiz //

function startQuiz() {
    var startScreenEl = document.querySelector("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    // time, text context //

    timerEl.textContent = time;

    getQuestions();
}

// to get the question from the array and eventually clear it out //

function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    optionsEl.innerHTML = "";

// callback function for the options // 
    currentQuestion.options.forEach(function(option, i) {
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "option");
        optionNode.setAttribute("value", option);
        optionNode.textContent = i + 1 + " . " + option;

        // event listener //
        optionNode.onclick = questionClick;

        // option, append to the DOM //
        
        optionsEl.appendChild(optionNode);
    });
}
// FOR TIMER //
// to have time options //

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
}

let time; 
if (time < 0) {
} else {
    time = 0;
}

// return content, 
// to show wrong and correct answers 

timerEl.textContent = time;

feedbackEl.textContent = "Wrong!";
} else {

feedbackEl.textContent = "Correct!";
}

feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
}, 3000);

currentQuestionIndex++;

// END GAME
// to end the quiz, questions
if (currentQuestionIndex === questions.length) {
    quizEnd();
} else {
    getQuestions();
    }
}

// END GAME //
// to stop the timer 

function quizEnd() {
    clearInterval(timerId);
}

// END GAME //
// to show the final score place

var endScreenEl = document.getElementsByClassName("end-screen");
    endScreenEl.removeAttribute("class");

var finalScoreEl = document.getElementsByClassName("final-score");
    finalScoreEl.textContent = time;

questionsEl.setAttribute("class", "hide");
}

function Tick() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

// END GAME //
// to score 

function saveScore() {
    var initials = initialsEl.value.trim();

    if (initials !=="") {
        var Scores = 
        JSON.parse(window.localStorage.getItem("scores")) || [];

        var newScore = {
            score: time;
            initials: initials;
        };

// END GAME //
// to use local storage //

    scores.push(newScore);
    window.localStorage.setItem("scores", JSON.stringify(scores));

    window.location.href = "scores.html";
    }
}

// END GAME //
// to start, to submit button

function checkForEvent(event) {
    if (event.key === "Enter") {
        saveSscore();
    }
}

submitBtn.onclick = saveScore;

startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

//* * * *~ START OF QUESTIONS ~* * * * //

// question #1 //
var questions = [
    {
    title: "What does HTML stand for?", 
    options: ["home tool markup langage", "hyperlinks and text markup language", "hyper total mongo language"],
    answer: "hyper text markup language"
    },

// question #2 //

    {
    title: "Arrays in JavaScript can be used to store ____.", 
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },

// question #3 //

{
    title: "String values must be enclosed within ___ when being assigned to variables.", 
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    }
];