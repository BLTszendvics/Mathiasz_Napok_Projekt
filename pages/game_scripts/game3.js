let inputtexts = [
    
    "A ricsi ;2+dagadt+sovány+c;.;",

];

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

        console.log(this.text1 + " " + this.answers + " " + this.text2 + " " + this.correct);

    }

}

var Sentences = [];

for (let i = 0; i < inputtexts.length; i++) {

    Sentences.push(new Sentence(inputtexts[i]));

}

function Load3() {



}