//* * * *~ START OF SCRIPT ~* * * * //
// set interval //

var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;

// DOM element //
var timerEl = document.getElementById("time");

// DOM elements //
// to start and submit buttons //

var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

// DOM elements //

var optionsEl = document.getElementById("options");
var questionsEl = document.getElementById("questions");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//* * * *~ BEGINNING OF QUIZ CODE ~* * * * //
// to start quiz //

function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    // time, text context //

    timerId = setInterval(Tick, 3000);

    timerEl.textContent = time;

    getQuestion();
}

// to get the question from the array and eventually clear it out //

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    optionsEl.innerHTML = "";

    // callback function for the options // 
    currentQuestion.options.forEach(function(option, i) {
        var optionsNode = document.createElement("button");
        optionsNode.setAttribute("class", "options");
        optionsNode.setAttribute("value", options);
        optionsNode.textContent = i + 1 + " . " + options;

        // event listener //
        optionsNode.onclick = questionClick;

        // option, append to the DOM //
        
        optionsEl.appendChild(optionsNode);
    });
}
// FOR TIMER //
// to have time options //

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

    if (time < 0) {
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
    getQuestion();
    }
}

// END GAME //
// to stop the timer 

function quizEnd() {
    clearInterval(timerId);

// END GAME //
// to show the final score place

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
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

    if (initials !== "") {
        var scores = 
        JSON.parse(window.localStorage.getItem("scores")) || [];

        var newScore = {
            score: time,
            initials: initials
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

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveScore();
    }

submitBtn.onclick = saveScore;

startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;}