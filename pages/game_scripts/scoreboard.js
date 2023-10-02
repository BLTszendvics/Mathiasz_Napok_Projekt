let sep = '¤3';
let sep2 = '÷3';

const queryString = window.location.search;
const url = new URLSearchParams(queryString);

const ctime = url.get('time');

document.getElementById("out").innerHTML = ctime;

let score = [];
let cscore = document.cookie.split(sep);

let curscore;
let curi;

/*score.push(["andrás", "01:22:15"]);
score.push(["peti", "02:21:40"]);
score.push(["robi", "00:52:25"]);
SaveScores();*/

function LoadScores() {

    cscore = document.cookie.split(sep);

    curscore = ctime;

    for (let i = 0; i < cscore.length; i++) {

        let a = cscore[i].split(sep2);
        
        if (a.length > 1) {

            score.push(a);

        }

    }

    TextOut(false);

}

function TextOut(b) {

    let t = "";

    let placed = b;

    for (let i = 0; i < score.length; i++) {

        console.log(curscore);

        if (!placed && GetTime(curscore) < GetTime(score[i][1])) {

            placed = true;
            curi = i;

            t += "You " + curscore + "<br>";
            

        }

        t += score[i][0] + " " + score[i][1] + "<br>";

    }
    if (!placed) {

        t += "You " + curscore + "<br>";

        placed = true;
        curi = score.length;

    }

    document.getElementById("out").innerHTML = t;

}

function SaveScores() {

    let t = "";

    for (let i = 0; i < score.length; i++) {

        t += score[i][0] + sep2 + score[i][1] + sep;

    }

    t += "";

    document.cookie = t;

}

function GetTime(t) {

    console.log(t);

    let s = t.split(':');

    return parseInt(s[0])*60*60 + parseInt(s[1])*60 + parseInt(s[2]);

}

function Rajmund() { //button clicked

    let n = document.getElementById("yourname").value;
    console.log(n);

    score.splice(curi, 0, [n, curscore]);
    SaveScores();
    TextOut(true);

    document.getElementById("regcon").style.display = "none";

}

LoadScores();

console.log(document.cookie)