function o(name) {

    return document.getElementById(name);

}

class Img {

    Obj;
    Id;
    InPlace;
    DefX;
    DefY;

    IPosX;
    IPosY;

    constructor(_Obj, _Id, _x, _y, _path) {

        this.Obj = _Obj;
        this.Id = _Id;

        this.InPlace = false;

        this.DefX = _x;
        this.DefY = _y;

        this.ResetIPos();

        o(this.Obj).style.backgroundImage = 'url("' + _path + '")';

    }

    ResetIPos() {

        this.IPosX = -1;
        this.IPosY = -1;

    }

}

var wWidth;
var wHeight;
let ww;
var wX;
var wY;

var imgtext = '<div style="position: absolute; background-size: cover;"';
var imgtexte = '></div>';

var cont = document.getElementById("imgcontainer");

var Imgs = [];
var iImgs = [];

var size = 2;

var map = [];
for (let y = 0; y < size; y++) { let f = [];  map.push(f); for (let x = 0; x < size; x++) {map[y].push(false)}}

for (let i = 0; i < size*size; i++) {iImgs.push(i)}

iImgs = shuffle(iImgs);

var good = 0;
var maxGood = size * size;

var drag = false;
var iIndex;

var imageSize;

var imageMainX;
var imageMainY;

var spawnPos = [0, 0, 0, 0]//[50, 750, 4, 20];

var imageMainSize;

var mx;
var my;

function Load1() {
    
    wWidth = document.getElementById("game1").offsetWidth;
    wHeight = document.getElementById("games").offsetHeight;
    ww = document.getElementById("game1").getBoundingClientRect();
    wX = ww.x + window.scrollX;
    wY = ww.y + window.scrollY;

    LoadThings();

    Spawn();

}

function LoadThings() {

    imageSize = 200;
    let imageGap = 20;

    imageMainSize = size * imageSize;

    let heightDiffs = (wHeight - (imageMainSize + imageSize)) / 3;

    //

    imageMainX = (wWidth-(size)*imageSize) / 2;
    imageMainY = wY + heightDiffs;


    let i = document.getElementById("imgmain");

    i.style.left = imageMainX + "px";
    i.style.top = imageMainY + "px";
    i.style.width = imageMainSize + "px";
    i.style.height = imageMainSize + "px";

    //

    let veryspecialsize = imageMainSize + wY + heightDiffs * 3;

    //

    let e = size*size;
    let imagesWidth = e * (imageSize + imageGap) - imageGap;

    while (e >= 1 && imagesWidth > wWidth) {

        e /= 2;

        imagesWidth = e * (imageSize + imageGap) - imageGap;

    }

    if (e < 1) {

        console.log("BAJBAJBAJBJABJABAJBAJBAJBJABJABJAJBAJBAJBAJBAJBAJ");

    }
    else {

        spawnPos[0] = (wWidth - imagesWidth)/2;
        spawnPos[1] = imageMainY + size * imageSize + heightDiffs;

        spawnPos[2] = e;
        spawnPos[3] = imageGap;

    }

}

function Spawn() {

    let y = 0;
    let x = 0;

    let x2 = 0;
    let y2 = 0;

    while ( y < size ) {

        let i = x + y*size;/*x + y*size*/;
        let fakei = iImgs[x + y*size];

        let iy = Math.floor(fakei / spawnPos[2]);
        y2 = spawnPos[1] + (iy * (imageSize + spawnPos[3]));
        x2 = spawnPos[0] + ((fakei - iy*spawnPos[2]) * (imageSize + spawnPos[3]));

        cont.innerHTML += (imgtext + 'id="i' + i + '"' 
        + 'onmousedown="MouseDown(event, ' + i + ')"'
        + 'onmouseup="MouseUp(event, ' + i + ')"'
        + imgtexte);

        let o = "i" + i;
        let g = document.getElementById(o);
        
        g.style.width = imageSize + "px";
        g.style.height = imageSize + "px";

        g.style.left = x2 + "px";
        g.style.top = y2 + "px";

        let j = new Img(o, ((x+1)*10)+y+1, x2, y2, ('./game_images/image1/img' + i + '.png')); //'images/image1/i0.png'

        Imgs.push(j);

        x++;

        if (x == size) {

            y++;
            x = 0;

        }

    }

}

function MouseMove(m) {

    if (drag) {

        GetMousePositions(m);

        Move(mx, my, iIndex)

    }

}

function GetMousePositions(m) {

    mx = m.clientX + window.scrollX;
    my = m.clientY + window.scrollY;

}

function MouseDown(m, iIndex) {

    if (!drag) {

        drag = true;
        this.iIndex = iIndex;

        if (Imgs[iIndex].InPlace) {

            Imgs[iIndex].InPlace = false;
            good--;

        }
        if (Imgs[iIndex].IPosX != -1) {

            map[Imgs[iIndex].IPosX][Imgs[iIndex].IPosY] = false;
            Imgs[iIndex].ResetIPos();

        }

    }

}

function MouseUp(m, iIndex) {

    if (this.iIndex != iIndex) {



    }

    if (drag) {

        drag = false;

        if (mx > imageMainX && mx < imageMainX + imageMainSize &&
            my > imageMainY && my < imageMainY + imageMainSize) {
            
            let ix = (mx - imageMainX) - (mx - imageMainX) % imageSize;
            let iy = (my - imageMainY) - (my - imageMainY) % imageSize;
            
            let x = ix + imageMainX + imageSize/2;
            let y = iy + imageMainY + imageSize / 2;
            
            let mapx = ix / imageSize;
            let mapy = iy / imageSize; 

            if (map[mapx][mapy]) {

                Move(Imgs[this.iIndex].DefX+imageSize/2, Imgs[this.iIndex].DefY+imageSize/2, this.iIndex);

            }
            else {
                
                map[mapx][mapy] = true;

                Imgs[this.iIndex].IPosX = mapx;
                Imgs[this.iIndex].IPosY = mapy;

                Move(x, y, this.iIndex);
    
                Check(mapx, mapy);

            }
            
        }

    }

}

function Move(x, y, i) {

    o(Imgs[i].Obj).style.left = (x - imageSize / 2) + "px";
    o(Imgs[i].Obj).style.top = (y - imageSize / 2) + "px";
    
}

function Check(x, y) {

    if (parseInt((x + 1) + "" + (y + 1)) == Imgs[iIndex].Id) {
        
        good++;
        Imgs[iIndex].InPlace = true;

    }
    if (good == maxGood) {

        console.log("ezaz");
        NextGame();

    }

}

function Scroll(s) {

    MouseUp(window.event, this.iIndex);

}

function shuffle(l1) {

    let l2 = [];
    for (let i = 0; i < l1.length; i++) {

        l2[i] = -1;

    }

    for (let i = 0; i < l1.length; i++) {

        let e = Math.floor(Math.random()*l1.length);

        while (l2[e] != -1) {

            e = Math.floor(Math.random()*l1.length);

        }

        l2[e] = i;

    }

    return l2;

}