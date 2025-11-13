let timer = document.getElementById("timer")
let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")
let tomato = {
    seconds: 25 * 60,
    running: false,
    timer: null
}

function showTimer() {
    let mins = Math.floor(tomato.seconds / 60) //approssima per difetto
    let secs = tomato.seconds % 60
    if (secs < 10) secs = "0" + secs
    if (mins < 10) mins = "0" + mins
    timer.textContent = mins + ":" + secs
}

function tick() {
    if (tomato.seconds > 0) {
        tomato.seconds--
        showTimer()
    } else {
        clearInterval(tomato.timer)
        tomato.running = false
    }
}

function start() {
    if (!tomato.running) {
        //setTimeout(p1, p2) --> esegue p1 tra p2 ms (ONESHOT)
        //setInterval(p1, p2) --> esegue p1 ogni p2 ms
        tomato.timer = setInterval(tick, 1000)
        tomato.running = true
    }
}

function reset() {
    tomato.seconds = 25 * 60
    tomato.running = false
    clearInterval(tomato.timer)
    showTimer()
}

function pause() {
    //parte un timer di 5 mins
    if (!tomato.running) {
        clearInterval(tomato.timer)
        tomato.seconds = 5 * 60
        tomato.timer = setInterval(tick, 1000)
        tomato.running = true
    }
}

startBtn.addEventListener("click", start)
resetBtn.addEventListener("click", reset)
pauseBtn.addEventListener("click", pause)