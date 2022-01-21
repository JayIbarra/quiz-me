// to get scores from local storage for the scores 
function printHighscores() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // high scores 
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {

    // to display scores list
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + newLocal + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
    });
}

// to clear scores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
    }

    document.getElementById("clear").onclick = clearHighscores;

    // to load 
    printHighscores();