let inputtexts = [
    
    /*"A ricsi ;2+dagadt+sovány+c;.;",
    "A balázs nagyon;0+c+nagy+he?;!;",
    "A ;0+magyarokat+románokat+franciákat;szeressük.",
    "Who's gonna carry the;2+single moms+trains+boat;?!",
    "Piros szív, fehér hó,;0+zöld+kék+rózsaszín;levél.",*/


    "A gőzgépet ;1+Gotilieb Daimler+James Watt+Rudolf Diesel; találta fel.",
    "A négyütemű Ottó motor helyes folyamata: ;2+terjeszkedés - szívás - kipufogás - sűrítés+szívás - terjeszkedés - sűrítés - kipufogás+szívás - sűrítés - terjeszkedés - kipufogás;.",
    "A ;0+tüzelőanyag-ellátó rendszer+dugattyúemelő rugó+kotló; a motorok egyik fő szerkezeti egysége.",

    "A „kukoricafattyasodás“ fogalma:;2+A kukoricán parazita élősködik+A kukorica nem terem akkor mennyiségben ,mint vártuk+A kukorica oldalhajtást növeszt;.",
    "Az őszi bűza:;1+Április-Májusban+Július-Augusztusban+Június-Júliusban; kezd teremni.",
    "A ;1+Juh+Borjú+Birka; a tehén kicsinye.",
    "A(z) ;2+ásás más szóval+palánták elültetése+növényvédelmi eljárás; a csávázás jelentése.",

    "Az ekének a ;0+előhántó+tolórúd+kulissza;az egyik működő része",


    "A rózsákat;1+február végén+amikor a levél rügyei megduzzadnak, bepirosodnak akkor+amikor a rózsa elvirágzott akkor;érdemes megmetszeni",
    "A;1+Rozmaringnak+Tearózsának+Bazsalikomnak;nincsen rovarriasztó hatása.",
    "Az alvószemzés;0+egy olyan oltásmód, amikor egy rügyet helyezünk át egy másik növénybe+egy olyan szaporítás fajta, amikor a növény egy szem termését használjuk fel+egy késő őszi kerti tevékenység, amikor a fagyérzékeny növényeket földdel fedünk be;.",
    "A;2+Nárcisz+Jácint+Kőrislevelű ezerjófű;egy szárazságtűrő növény"
];

let obj = [

    '<select id="s',
    '" onchange="Change(',
    ')"><option value="false"></option>',
    '<option value="',
    '">',
    '</option>',
    '</select>',
    '<label style="margin-bottom:1%;">',
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

let order = [];
for (let i = 0; i < inputtexts.length; i++) {

    order.push(i);

}

let corrects = [];
for (let i = 0; i < n; i++) {

    corrects.push(false);

}

var Sentences = [];

function Load3() {

    order = shuffle(order);

    for (let i = 0; i < inputtexts.length; i++) {

        Sentences.push(new Sentence(inputtexts[order[i]]));
    
    }

    for (let i = 0; i < 5; i++) {

        LoadSentence(i, i);

    }

    LoadResponsivity();

}

function LoadResponsivity() {

    let body = document.body,
    html = document.documentElement;

    let h = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight); // trust me, I wrote these previous lines by myself

    h = h / 5 * 3;

    document.getElementById("game3").style.height = h + "px";
    
    document.getElementById("outgames").style.height = h + "px";

    document.getElementById("g3h2").style.marginBottom = h / 4 + "px";  

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

}