let allWords = [
    "ÁRPA",
    "KUKORICA",
    "KOMBÁJN",
    "TRAKTOR",
    "MOTOR",
    "ALANY",
    "ADALÉKANYAG",
    "ARBORÉTUM",
    "ÁGYÁS",
    "BUJTÁS",
    "BAKHÁT",
    "DÍSZNÖVÉNY",
    "DUGVÁNY",
    "GYOMLÁLÁS",
    "HIBRID",
    "HÓNALJRÜGY",
    "INDA",
    "LOMBTRÁGYA",
    "MULCSOZÁS",
    "OLTÁS",
    "REZISZTENCIA",
    "SARJ",
    "SZIKLEVÉL",
    "VETÉSFORGÓ",
    "VETÉS",
    "EKEFEJ",
    "EKETALP",
    "SORTÁVOLSÁG",
    "CSOROSZLYA",
    "NYOMJELZŐ",
    "HENGER",
    "DUGATTYÚ",
    "OLVADÁSPONT",
    "KOVALENS",
    "RIDEGSÉG",
    "EUTEKTOID",
    "AUSZTENIT",
    "TŰRÉS",
    "ABS",
    "ÉKSZÍJ",
    "MOTORBLOKK",
    "LEFÚJÓSZELEP",
    "OKTÁNSZÁM"/*,
    "DIFFERENCIÁLMŰ"*/
]

let word = [];
let letterNumber;

let green = "greenyellow"
let def = "red";
let yellow = "yellow";

let letterSize = 0;

let container = document.getElementById("wordcontainer");

let wordStart = '<div style="display: flex; justify-content:center">';
let wordEnd = '</div>';

/*let letterStart = '100px; height: 100px; font-size: 30px; background-color:';
let letterMiddle = '"><p style="text-align: center; vertical-align: middle;">';
let letterEnd = '</p></div></div>';*/

let letterText = [

    '<div style="padding:10px; display: flex;"><div style="width:',
    'px; height: ',
    'px; font-size: 30px; background-color:',
    '"><p style="text-align: center; vertical-align: middle;">',
    '</p></div></div>'

]

var currentHTML = wordStart;

var y = 500;
var max = 5;
var cur = 0;

var loaded = false;

function Load2() {

    loaded = true;

    let i = Math.floor(Math.random() * allWords.length);
    let w = allWords[i];

    for (let e = 0; e < w.length; e++) {

        word.push(w[e]);

    }

    letterNumber = w.length;

    document.getElementById("wordlenumber").innerHTML = letterNumber + "\t" + "karakter";

    let body = document.body,
    html = document.documentElement;

    let h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // trust me, I wrote these previous lines by myself

    h = h / 3 * 2;

    //let h = window.body.clientHeight;

    document.getElementById("game2").style.height = h + "px";
    
    document.getElementById("outgames").style.height = h + "px";


    let wWidth = document.getElementById("game2").offsetWidth;

    if (wWidth < 1000) {

        max = 5;

        letterSize = document.getElementById("body").offsetWidth / 16;

    }
    else if (wWidth < 1200) {

        max = 4;

        letterSize = document.getElementById("body").offsetWidth / 18;

    }
    else {

        max = 3;

        letterSize = document.getElementById("body").offsetWidth / 20;

    }

}

let enter = 13;

function OtherPress(e) {

    if (document.activeElement.id !== "word" && loaded && e.keyCode == 8 && document.getElementById("word").value.length > 0) {

        document.getElementById("word").value = document.getElementById("word").value.slice(0, -1);

    }
    else if (e.keyCode == enter) {

        Enter();

    }

}

function KeyPress(e) {

    if (document.activeElement.id !== "word" && loaded) {

        let c = e.keyCode;

        if (c == enter) {

            Enter();

        }
        else if (CheckLetter(c)) {

            document.getElementById("word").value += e.key;

        }

    }

}

function TypeInInput(e) {

    let n = e.data.charCodeAt(0);

    if (n != 8 && !CheckLetter(n)) {

        document.getElementById("word").value = document.getElementById("word").value.slice(0, -1);

    }

    console.log();

}

function Enter() {

    if (document.getElementById("word").value.length >= letterNumber) {

        CheckW(document.getElementById("word").value);
        document.getElementById("word").value = "";

    }

}

function CheckW(ww) {

    //if (w.length != letterNumber) {

    if (cur == max) {

        cur = 0;
        container.innerHTML = "";

    }

    let letterList = [];

    let w = [];

    for (let i = 0; i < ww.length; i++) {

        w[i] = ww[i].toUpperCase();

    }

    for (let i = 0; i < word.length; i++) {

        let f = word[i].charCodeAt(0);

        if (letterList[f] == null) {

            letterList[f] = 1;

        }
        else {

            letterList[f]++;

        }

    }

    let e = 0;



    for (let i = 0; i < letterNumber; i++) {

        if (w[i] === word[i]) {

            e++;

            letterList[w[i].charCodeAt(0)]--;

            if (letterList[w[i].charCodeAt(0)] == 0) {

                letterList[w[i].charCodeAt(0)] = null;

            }

        }

    }
    for (let i = 0; i < letterNumber; i++) {

        if (w[i] === word[i]) {

            CreateLetter(w[i], green);

        }

        else if (letterList[w[i].charCodeAt(0)] != null) {

            CreateLetter(w[i], yellow);
            letterList[w[i].charCodeAt(0)]--;

            if (letterList[w[i].charCodeAt(0)] == 0) {

                letterList[w[i].charCodeAt(0)] = null;

            }

        }
        else {

            CreateLetter(w[i], def);

        }

    }

    CreateWord();

    cur++;

    if (e == letterNumber) {

        Win();

    }

    //}

}

function CreateLetter(l, c) {

    currentHTML += letterText[0] + letterSize + letterText[1] + letterSize + letterText[2] + c + letterText[3] + l + letterText[4];

    //currentHTML += letterStart + c + letterMiddle + l + letterEnd;

}

function CreateWord() {

    currentHTML += wordEnd;
    container.innerHTML += currentHTML;
    currentHTML = wordStart;

}

function ContainsNumber(w, l) {

    let i = 0;

    for (let e = 0; e < w.length; e++) {

        if (w[i] == l) {

            i++;

        }

    }

    return i;

}

function Win() {

    console.log("ezaz");
    NextGame();

}

function CheckLetter(c) {

    return ((c > 64 && c < 91) || (c > 96 && c < 123) ||
        c == 246 || c == 252 || c == 243 || c == 337 ||
        c == 250 || c == 233 || c == 225 || c == 237 ||
        c == 214 || c == 220 || c == 211 || c == 336 ||
        c == 218 || c == 201 || c == 193 || c == 205 ||
        c == 368 || c == 369);

}