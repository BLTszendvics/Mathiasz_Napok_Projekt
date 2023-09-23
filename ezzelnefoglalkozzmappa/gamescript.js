time = [0, 0, 0];

let timerIsOn = true;
var Timer;

function Tick() {

    time[2]++;

    if (time[2] == 20) {

        time[1]++;
        time[2] = 0;

        if (time[1] == 60) {

            time[0]++;
            time[1] = 0;

        }

    }

    WriteTime();
    
    if (!timerIsOn) {

        TimerOff();

    }

}

function TimerOn() {

    Timer = setInterval(Tick, 50);

}

function TimerOff() {

    clearInterval(Timer);

    console.log("timer is off");

}

function WriteTime() {

    let t = "";
    if (time[0] < 10) { t += "0" }
    t += time[0] + ":";
    if (time[1] < 10) { t += "0" }
    t += time[1] + ":";
    if (time[2]*5 < 10) { t += "0" }
    t += time[2]*5;

    document.getElementById("timeOut").innerHTML = t

}

TimerOn();