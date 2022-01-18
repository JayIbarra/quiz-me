// local storage for the scores 

function printScores() {
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

highscores.sort(function(a,b) {
    return b - a
});

highscores.array.forEach(element => {
    
});

var olEl = document.getElementById("scores");
olEl.appendChild(liTag);
});
}

function clearScores() {
    window.localStorage.removeItem("scores");
    window.localStorage.reload();
}

documenbt.getElementById("clear").onclick = clearScores;

printScores();