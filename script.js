/*------clock------*/

function time() {
    var date = new Date;
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var hrsTimeClock = document.getElementById("yellow-hour-time");
    var minTimeClock = document.getElementById("black-minute-time");
    var secTimeClock = document.getElementById("red-second-time");

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs < 10){
        hrs = `0${hrs}`;
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    if (secs < 10) {
        secs = `0${secs}`;
    }
    hrsTimeClock.style.transform = `rotate(${(hrs * 30)-90}deg)`;
    minTimeClock.style.transform = `rotate(${(mins * 6)-90}deg)`;
    secTimeClock.style.transform = `rotate(${(secs * 6)-90}deg)`;
    document.getElementById("time-border").innerHTML = `${hrs} : ${mins} : ${secs}`;
}
time();
setInterval(time, 500);

/*------stopwatch------*/

var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var interval;
var minStopwatchClock = document.getElementById("yellow-minute-stopwatch");
var secStopwatchClock = document.getElementById("black-second-stopwatch");
var milisecStopwatchClock = document.getElementById("red-milisecond-stopwatch");


document.getElementById("start").addEventListener("click", () => {
    interval = setInterval(stopwatch, 10);
});
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval)
});
document.getElementById("reset").addEventListener("click", () => {
    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    minStopwatchClock.style.transform = `rotate(-90deg)`;
    secStopwatchClock.style.transform = `rotate(-90deg)`;
    milisecStopwatchClock.style.transform = `rotate(-90deg)`;
    document.getElementById("stopwatch").innerHTML = `${minutes} : ${seconds} : ${miliseconds}`;
});
function stopwatch() {
    miliseconds++;
    if (miliseconds > 100) {
        miliseconds = 0;
        seconds++;
    }
    if (seconds > 60) {
        seconds = 0;
        minutes++;
    }

    minStopwatchClock.style.transform = `rotate(${(minutes * 6) - 90}deg)`;
    secStopwatchClock.style.transform = `rotate(${(seconds * 6) - 90}deg)`;
    milisecStopwatchClock.style.transform = `rotate(${(miliseconds * 6) - 90}deg)`;
    document.getElementById("stopwatch").innerHTML = `${minutes} : ${seconds} : ${miliseconds}`;
}

/*------timer------*/

var timer = document.getElementById("timer-display");
var timerStart = document.getElementById("timer-start-button");
var min = document.getElementById("mins");
var sec = document.getElementById("secs");
var _min ;
var _sec;
var Interval;
var result = document.getElementById("result");
var minTimerClock = document.getElementById("black-minute-timer");
var secTimerClock = document.getElementById("red-second-timer");


timerStart.addEventListener("click", () => {
    _min = min.value;
    _sec = sec.value;
    Interval = setInterval(timerstart,1000);
})

function timerstart() {
    if (_min > 0) {
        if (_sec < 0) {
            _sec = 59;
            _min--;
        }
        minTimerClock.style.transform = `rotate(${(_min * 6) - 90}deg)`;
        secTimerClock.style.transform = `rotate(${(_sec * 6) - 90}deg)`;
        timer.innerHTML = `${_min} : ${_sec}`;
        result.innerHTML = `clock's ticking`;
        _sec--;
    }
    else if (_min == 0 & _sec > 0) {
        minTimerClock.style.transform = `rotate(${(_min * 6) - 90}deg)`;
        secTimerClock.style.transform = `rotate(${(_sec * 6) - 90}deg)`;
        timer.innerHTML = `${_min} : ${_sec}`;
        _sec--;
        result.innerHTML = `clock's ticking`;
    }
    else {
        clearInterval(Interval);
        _sec = 0;
        minTimerClock.style.transform = `rotate(${(_min * 6) - 90}deg)`;
        secTimerClock.style.transform = `rotate(${(_sec * 6) - 90}deg)`;
        timer.innerHTML = `${_min} : ${_sec}`;
        result.innerHTML = `time's up`;
    }
}


