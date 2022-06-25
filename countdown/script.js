const hoursCounter = document.getElementById('hours-counter')
const minutesCounter = document.getElementById('minutes-counter')
const secondsCounter = document.getElementById('seconds-counter')

const hoursInput = document.getElementById('hours-input')
const minutesInput = document.getElementById('minutes-input')
const secondsInput = document.getElementById('seconds-input')

function setCountdownTimer() {
    if (window.countdown) {
        clearInterval(window.countdown)
    }
    hoursCounter.innerText = hoursInput.value;
    minutesCounter.innerText = minutesInput.value;
    secondsCounter.innerText = secondsInput.value;
}

function time(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 60 / 60);
    const minutes = Math.floor(timeInSeconds / 60) - hours * 60;
    const seconds = timeInSeconds - minutes * 60 - hours * 60 * 60;


    hoursCounter.innerText = hours;
    minutesCounter.innerText = minutes;
    secondsCounter.innerText = seconds;
}

function startTimer() {
    const hours = +hoursCounter.innerText;   // + for converting it to number.
    const minutes = +minutesCounter.innerText;
    const seconds = +secondsCounter.innerText;

    let totalTimerSeconds = hours * 60 * 60 + minutes * 60 + seconds;

    window.countdown = setInterval(() => {
        totalTimerSeconds--;
        time(totalTimerSeconds);
    }, 1000)

}
function stopTimer() {
    clearInterval(window.countdown)

}