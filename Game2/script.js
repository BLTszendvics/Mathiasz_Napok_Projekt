let word = ["R", "A", "J", "M", "A"];
let letterNumber = 5;

let green = "greenyellow"
let def = "burlywood";
let yellow = "yellow";

let container = document.getElementById("wordcontainer");

let wordStart = '<div style="display: flex;">';
let wordEnd = '</div>';

let letterStart = '<div style="padding:10px; display: flex;"><div style="width:100px; height: 100px; font-size: 30px; background-color:';
let letterMiddle = '"><p style="text-align: center; vertical-align: middle;">';
let letterEnd = '</p></div></div>';

var currentHTML = wordStart;


function otherPress(e) {

    if (e.keyCode == 8 && document.getElementById("word").value.length > 0) {

        document.getElementById("word").value = document.getElementById("word").value.slice(0, -1);

    }

}

function keyPress(e) {

    let enter = 13;
    
    let c = e.keyCode;

    if (c == enter) {

        Enter();

    }
    else if ((c > 64 && c < 91) || (c > 96 && c < 123)) {

        document.getElementById("word").value += e.key;

    }

}

function Enter() {

    if (document.getElementById("word").value.length >= letterNumber) {

        Check(document.getElementById("word").value);
        document.getElementById("word").value = "";

    }

}

function Check(ww) {

    //if (w.length != letterNumber) {

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

    if (e == letterNumber) {

        Win();

    }

    //}

}

function CreateLetter(l, c) {

    currentHTML += letterStart + c + letterMiddle + l + letterEnd; 

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

    alert("ezaz");

}