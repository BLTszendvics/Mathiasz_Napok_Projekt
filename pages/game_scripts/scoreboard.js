let sep = '¤';
let sep2 = '÷';

const queryString = window.location.search;
const url = new URLSearchParams(queryString);

const ctime = url.get('time');

document.getElementById("out").innerHTML = ctime;

let score = [];
let cscore = document.cookie.split(sep);



function LoadScores() {

    cscore = document.cookie.split(sep);

    for (let i = 0; i < cscore.length; i++) {

        let a = cscore[i].split(sep2);
        
        if (a.length > 1) {

            score.push(a);

        }

    }

    TextOut();

}

function TextOut() {

    let t = "";

    for (let i = 0; i < score.length; i++) {

        t += score[i][0] + " " + score[i][1] + "<br>";

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

    let s = t.split(':');

    return parseInt(s[0])*60*60 + parseInt(s[1])*60 + parseInt(s[2]);

}

function Rajmund() {

    // majd megoldom kesobb

}

LoadScores();

console.log(document.cookie)