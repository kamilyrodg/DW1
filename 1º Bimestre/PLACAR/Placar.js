let scoreA = 0;
let scoreB = 0;

function updateDisplay() {
    document.getElementById("scoreA").textContent = scoreA;
    document.getElementById("scoreB").textContent = scoreB;
}

function addPoint(team) {
    if (team === "A") scoreA++;
    else scoreB++;

    updateDisplay();
}

function resetScore() {
    scoreA = 0;
    scoreB = 0;
    updateDisplay();
}