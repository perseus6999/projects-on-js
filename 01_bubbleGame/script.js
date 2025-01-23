let Timer = 10;
let newRandomHitVal;
let score = 0;

function makeBubble() {
    let clutter = "";
    let hasTarget = false;

    for (let i = 0; i < 168; i++) {
        let rn = Math.floor(Math.random() * 10);
        if (rn === newRandomHitVal) hasTarget = true;
        clutter += `<div class="bubble">${rn}</div>`;
    }

    // Ensure at least one bubble contains the target value
    if (!hasTarget) {
        const randomIndex = Math.floor(Math.random() * 168);
        const bubbles = clutter.split('</div>');
        bubbles[randomIndex] = `<div class="bubble">${newRandomHitVal}`;
        clutter = bubbles.join('</div>');
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    let setTimer = setInterval(function () {
        if (Timer > 0) {
            document.querySelector('#TimerVal').textContent = Timer;
            Timer--;
        } else {
            clearInterval(setTimer);
            document.querySelector('#pbtm').innerHTML = `Game Over! Your score is ${score}`;
        }
    }, 1000);
}

function getNewHit() {
    newRandomHitVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = newRandomHitVal;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

getNewHit();
runTimer();
makeBubble();

document.querySelector('#pbtm').addEventListener('click', function (dets) {
    if (dets.target.classList.contains('bubble')) {
        let hitedVal = Number(dets.target.textContent);
        if (newRandomHitVal === hitedVal) {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    }
});
