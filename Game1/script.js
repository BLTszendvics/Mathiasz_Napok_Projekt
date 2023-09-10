class Img {

    Obj;
    Id;
    InPlace;
    DefX;
    DefY;

    IPosX;
    IPosY;

    constructor(_Obj, _Id, _x, _y) {

        this.Obj = _Obj;
        this.Id = _Id;

        this.InPlace = false;

        this.DefX = _x;
        this.DefY = _y;

        this.ResetIPos();

    }

    ResetIPos() {

        this.IPosX = -1;
        this.IPosY = -1;

    }

}
var timg = document.getElementById("imgcontainer").children;
var Imgs = [new Img(timg[0], 11, 0, 0), new Img(timg[1], 21, 0, 0)];

/*var imageIDs = [11, 21];

let tid = 11;
for (let i = 0; i < timg.length; i++) {

    console.log(t1[i]);

}*/

var size = 2;

var map = [];
for (let y = 0; y < size; y++) { let f = [];  map.push(f); for (let x = 0; x < size; x++) {map[y].push(false)}}

var good = 0;
var maxGood = size * size;

var drag = false;
var iIndex;

var imageSize = 200;

var imageMainX = 300;
var imageMainY = 300;
var imageMainSize = imageSize * 2; // 2 * 2

var mx;
var my;

var spawn = [100, 50, 2];

function MouseMove(m) {

    console.log(drag);

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
    console.log("down " + " " + drag + " " + this.iIndex + " " + iIndex);
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
    //console.log(this.iIndex + " " + iIndex);
    console.log("up");
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

                Move(Imgs[this.iIndex].DefX+imageSize/2, Imgs[this.iIndex].DefX+imageSize/2, this.iIndex);

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

    Imgs[i].Obj.style.left = (x - imageSize / 2) + "px";
    Imgs[i].Obj.style.top = (y - imageSize / 2) + "px";

}

function Check(x, y) {

    if (parseInt((x + 1) + "" + (y + 1)) == Imgs[iIndex].Id) {
        
        good++;
        Imgs[iIndex].InPlace = true;

    }

}

function Scroll(s) {

    MouseUp(window.event, this.iIndex);

}