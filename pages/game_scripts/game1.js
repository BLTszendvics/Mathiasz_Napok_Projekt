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

var imgr = [0, 1, 2, 3, 4];
var imgn;

var size = 4;

var map = [];
for (let y = 0; y < size; y++) { let f = []; map.push(f); for (let x = 0; x < size; x++) { let g = [false, -1]; map[y].push(g); }}

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

var kmsX;
var kmsY;

function Load1() {

    imgr = shuffle(imgr);
    imgn = imgr[0];
    //imgn = 2;
    
    LoadSizes();

    Spawn();

}

function LoadSizes() {

    wWidth = document.getElementById("game1").offsetWidth;
    wHeight = document.getElementById("games").offsetHeight;
    ww = document.getElementById("game1").getBoundingClientRect();
    wX = ww.x + window.scrollX;
    wY = ww.y + window.scrollY;

    let t = document.getElementById("game1").getBoundingClientRect();

    kmsX = t.left;
    kmsY = t.top;

    LoadThings();

}

function LoadThings() {

    let imageGap;
    let gameHeight;

    // responsivity
    if (wWidth < 700) {

        imageGap = 10;

        imageSize = wWidth / 6;

        let imagesWidth = size * (imageSize + imageGap) - imageGap;

        imageMainSize = size * imageSize;

        gameHeight = imagesWidth + imageMainSize + imageGap * 5;

        imageMainX = (wWidth - (size) * imageSize) / 2 + kmsX;
        imageMainY = imageMainSize + imageGap*7 + kmsY;

        let i = document.getElementById("imgmain");

        i.style.left = imageMainX - kmsX + "px";
        i.style.top = imageMainY - kmsY + "px";
        i.style.width = imageMainSize + "px";
        i.style.height = imageMainSize + "px";

        spawnPos[0] = (wWidth - imagesWidth)/2;
        spawnPos[1] = imageGap*2; //imageMainY - ydif

        spawnPos[2] = size;
        spawnPos[3] = imageGap;

    }
    else if (wWidth < 1000) {

        imageGap = 10;

        imageSize = wWidth / 12;

        let imagesWidth = size * (imageSize + imageGap) - imageGap;

        gameHeight = imagesWidth + imageGap * 2;

        imageMainSize = size * imageSize;

        imageMainX = wWidth / 2 + (wWidth / 2 - (size) * imageSize) / 2 + kmsX;
        imageMainY = (gameHeight - imageMainSize) / 2 + kmsY;

        let i = document.getElementById("imgmain");

        i.style.left = imageMainX - kmsX + "px";
        i.style.top = imageMainY - kmsY + "px";
        i.style.width = imageMainSize + "px";
        i.style.height = imageMainSize + "px";

        spawnPos[0] = (wWidth/2 - imagesWidth)/2;
        spawnPos[1] = imageGap; //imageMainY - ydif

        spawnPos[2] = size;
        spawnPos[3] = imageGap;

    }
    else {

        imageGap = 20;

        imageSize = wWidth / 12;

        let imagesWidth = size * (imageSize + imageGap) - imageGap;

        gameHeight = imagesWidth + imageGap * 2;

        imageMainSize = size * imageSize;

        imageMainX = wWidth / 2 + (wWidth / 2 - (size) * imageSize) / 2 + kmsX;
        imageMainY = (gameHeight - imageMainSize) / 2 + kmsY;

        let i = document.getElementById("imgmain");

        i.style.left = imageMainX - kmsX + "px";
        i.style.top = imageMainY - kmsY + "px";
        i.style.width = imageMainSize + "px";
        i.style.height = imageMainSize + "px";

        spawnPos[0] = (wWidth/2 - imagesWidth)/2;
        spawnPos[1] = imageGap; //imageMainY - ydif

        spawnPos[2] = size;
        spawnPos[3] = imageGap;

    }

    document.getElementById("game1").style.height = gameHeight + "px";
    console.log(gameHeight);
    document.getElementById("outgames").style.height = gameHeight + "px";

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
        + 'ontouchstart="MouseDown(event, ' + i + ')"'
        + 'ontouchend="MouseUp(event, ' + i + ')"'
        + imgtexte);

        let o = "i" + i;
        let g = document.getElementById(o);
        
        g.style.width = imageSize + "px";
        g.style.height = imageSize + "px";

        g.style.left = x2 + "px";
        g.style.top = y2 + "px";

        let j = new Img(o, ((x+1)*10)+y+1, x2+kmsX, y2+kmsY, ('./game_images/image' + imgn + '/img_' + y + '_' + x + '.png')); //'images/image1/i0.png'

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

function TouchMove(m) {

    if (drag) {

        GetTouchPositons(m);

        Move(mx, my, iIndex);

    }

}

function test0(m) {

    //console.log(m.clientX + " " + m.clientY);

}

function GetTouchPositons(m) {

    mx = m.touches[0].clientX + window.scrollX;
    my = m.touches[0].clientY + window.scrollY;

}

function GetMousePositions(m) {

    mx = m.clientX + window.scrollX;
    my = m.clientY + window.scrollY;

}

function MouseDown(m, iIndex) {

    console.log("a");

    if (!drag) {

        drag = true;
        this.iIndex = iIndex;

        if (Imgs[iIndex].InPlace) {

            Imgs[iIndex].InPlace = false;
            good--;

        }
        if (Imgs[iIndex].IPosX != -1) {

            map[Imgs[iIndex].IPosX][Imgs[iIndex].IPosY][0] = false;
            map[Imgs[iIndex].IPosX][Imgs[iIndex].IPosY][1] = -1;
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
            
            let x = ix + imageMainX + imageSize / 2;
            let y = iy + imageMainY + imageSize / 2;
            
            let mapx = ix / imageSize;
            let mapy = iy / imageSize; 

            if (map[mapx][mapy][0]) {

                let n = map[mapx][mapy][1];

                Move(Imgs[n].DefX + imageSize / 2, Imgs[n].DefY + imageSize / 2, n);
                Imgs[n].ResetIPos();

                //Move(Imgs[this.iIndex].DefX + imageSize / 2, Imgs[this.iIndex].DefY + imageSize / 2, this.iIndex);

                map[mapx][mapy][1] = this.iIndex;

                Imgs[this.iIndex].IPosX = mapx;
                Imgs[this.iIndex].IPosY = mapy;

                Move(x, y, this.iIndex);
    
                Check(mapx, mapy);

            }
            else {
                
                map[mapx][mapy][0] = true;
                map[mapx][mapy][1] = this.iIndex;

                Imgs[this.iIndex].IPosX = mapx;
                Imgs[this.iIndex].IPosY = mapy;

                Move(x, y, this.iIndex);
    
                Check(mapx, mapy);

            }
            
        }

    }

}

function Move(x, y, i) {

    //console.log(document.getElementById("games").getBoundingClientRect().top);
    //(x - imageSize / 2)
    o(Imgs[i].Obj).style.left = (x - imageSize / 2) - kmsX + "px";
    o(Imgs[i].Obj).style.top = (y - imageSize / 2) - kmsY + "px";
    
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
    console.log(good + " " + parseInt((x + 1) + "" + (y + 1)) + " " + Imgs[iIndex].Id);
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