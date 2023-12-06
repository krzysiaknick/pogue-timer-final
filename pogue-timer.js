let minute_input = "";
let time = minute_input * 60;
let countdownInterval;
let showSeconds = false;

function start() {
    // Check if countdown is already running
    if (countdownInterval) {
        return;
    }

    countdownInterval = setInterval(countdown, 1000);
}

function pause() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}



function countdown() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    updateDisplay(minutes, seconds);
    time--;
    if (time < 60)
    showSeconds = true

    if (time < 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        var snd = new Audio('/sound.mp3');
        snd.play();
    }
}

function toggleDisplay() {
    showSeconds = !showSeconds;
    updateDisplay();
}

function updateDisplay(minutes, seconds) {
    if (typeof minutes === 'undefined' && typeof seconds === 'undefined') {
        // Display the initial message
        document.getElementById('countdown').innerHTML = minute_input;
    } else if (typeof seconds === 'undefined') {
        // Display only minutes when seconds are not provided
        const formattedMinutes = minutes < 10 ? String(minutes) : String(minutes).padStart(2, '0');
        const display = showSeconds ? `${formattedMinutes}:00` : `${formattedMinutes}`;
        document.getElementById('countdown').innerHTML = display;
    } else {
        // Display both minutes and seconds
        const formattedMinutes = minutes < 10 ? String(minutes) : String(minutes).padStart(2, '0');
        const display = showSeconds
            ? `${formattedMinutes}:${String(seconds).padStart(2, '0')}`
            : `${formattedMinutes}`;
        document.getElementById('countdown').innerHTML = display;
    }
}



function userinput(){
    let timeselection = document.getElementById("time").selectedOptions[0].value;
    time = timeselection * 60;
    updateDisplay(timeselection, 0);
}