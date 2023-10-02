let inputtexts = [
    
    "A ricsi ;2+dagadt+sovány+c;.;",
    "A balázs nagyon;0+c+nagy+he?;!;",
    "A ;0+magyarokat+románokat+franciákat;szeressük.",
    "Who's gonna carry the;2+single moms+trains+boat;?!",
    "Piros szív, fehér hó,;0+zöld+kék+rózsaszín;levél."

];

let obj = [

    '<select id="s',
    '" onchange="Change(',
    ')"><option value="false"></option>',
    '<option value="',
    '">',
    '</option>',
    '</select>',
    '<label>',
    '</label>',
    '<br>'

]

class Sentence {

    text1;
    text2;
    answers;
    correct;

    constructor(text) {

        let a = text.split(";");

        this.text1 = a[0];
        this.text2 = a[2];

        let b = a[1].split("+");

        this.answers = [];

        for (let i = 1; i < b.length; i++) {

            this.answers.push(b[i]);

        }

        this.correct = parseInt(b[0]);

        //console.log(this.text1 + " " + this.answers + " " + this.text2 + " " + this.correct);

    }

}

let n = 5;

let cCorrect = 0;
let maxCorrect = n;

let corrects = [];
for (let i = 0; i < n; i++) {

    corrects.push(false);

}

var Sentences = [];

for (let i = 0; i < inputtexts.length; i++) {

    Sentences.push(new Sentence(inputtexts[i]));

}

function Load3() {

    for (let i = 0; i < 5; i++) {

        LoadSentence(i, i);

    }

}

function LoadSentence(windex, sindex) {

    let a = "";

    a += obj[7];
    a += Sentences[sindex].text1;
    a += obj[8];

    a += obj[0];
    a += windex;
    a += obj[1];
    a += windex;
    a += obj[2];

    for (let i = 0; i < Sentences[sindex].answers.length; i++) {

        a += obj[3];

        if (Sentences[sindex].correct == i) {

            a += "true";

        }
        else {

            a += "false";

        }

        a += obj[4];

        a += Sentences[sindex].answers[i];

        a += obj[5];

    }

    a += obj[6];

    a += obj[7];
    a += Sentences[sindex].text2;
    a += obj[8];
    a += obj[9];

    document.getElementById("game3").innerHTML += a;

}

function Change(index) {

    let v = document.getElementById('s' + index).value;

    if (v == "true") {

        if (!corrects[index]) {

            cCorrect++;

            if (cCorrect == maxCorrect) {
    
                console.log("ezaz");
                NextGame();
    
            }

            corrects[index] = true;

        }

    }
    else {

        if (corrects[index]) {

            cCorrect--;

            corrects[index] = false;

        }

    }

    console.log(cCorrect + " " + document.getElementById('s' + index).value);

}