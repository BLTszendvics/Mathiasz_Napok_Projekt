document.getElementById("games").style.height = "800px";

let dButton = document.getElementById("start");
let dGames = document.getElementById("games").children;

let games = [0, 1];

var gameIndex = 0;

function StartGames() {

    games = shuffle(games);
    
    dButton.style.display = "none";

    Load(gameIndex);

}

function NextGame() {

    dGames[games[gameIndex]].style.display = "none";
    gameIndex++;
    Load(gameIndex);

}

function Load(ind) {

    dGames[games[gameIndex]].style.display = "block";

    switch(games[gameIndex]) {

        case 0:
            console.log("0");
            Load1();
            break;

        case 1:
            console.log("1");
            Load2();
            break;

        case 2:

            Load3();
            break;

    }

}