let dButton = document.getElementById("start");
let dGames = document.getElementById("games").children;

let header = document.getElementById("header");
let footer = document.getElementById("footer");

let games = [0, 1, 2];

var gameIndex = 0;



var time = [0, 0, 0];
var tOut = "";

function StartGames() {

    games = shuffle(games);

    header.style.display = "none";
    footer.style.display = "none";

    document.getElementById("games").style.height = document.getElementById("body").offsetWidth/6*2 + "px";
    
    dButton.style.display = "none";

    Load(gameIndex);

    TimerOn();

}

function NextGame() {

    dGames[games[gameIndex]].style.display = "none";
    gameIndex++;

    if (gameIndex == games.length) {

        EndGame();

    }
    else {

        Load(gameIndex);

    }
    
}

function Load(ind) {

    dGames[games[gameIndex]].style.display = "block";
    //console.log(games);

    switch(games[gameIndex]) {

        case 0:

            Load1();
            break;

        case 1:

            Load2();
            break;

        case 2:

            Load3();
            break;

    }

}

function EndGame() {

    TimerOff();

    header.style.display = "block";
    footer.style.display = "block";

    dGames[3].style.display = "block"; //the last one - scoreboard

    LoadS();
    
    //window.open("scoreboard.html?time=" + tOut);

}


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

}

function WriteTime() {

    let t = "";
    if (time[0] < 10) { t += "0" }
    t += time[0] + ":";
    if (time[1] < 10) { t += "0" }
    t += time[1] + ":";
    if (time[2]*5 < 10) { t += "0" }
    t += time[2]*5;

    tOut = t
    document.getElementById("tOut").innerHTML = tOut;

}