var images = document.getElementById("imgcontainer").children;
var imageIDs = [11, 21];

var size = 2;

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

function MouseMove(m) {

    if (drag) {

        GetMousePositions(m);

        Move(mx, my, iIndex)

    }

}

function GetMousePositions(m) {

    mx = m.clientX;
    my = m.clientY;

}

function MouseDown(m, iIndex) {

    if (!drag) {

        drag = true;
        this.iIndex = iIndex;

    }

}

function MouseUp(m, iIndex) {

    if (drag) {

        GetMousePositions(m);

        drag = false;

        console.log(mx + " " + my + " ");

        if (mx > imageMainX && mx < imageMainX + imageMainSize &&
            my > imageMainY && my < imageMainY + imageMainSize) {
            
            let ix = (mx - imageMainX) - (mx - imageMainX) % imageSize;
            let iy = (my - imageMainY) - (my - imageMainY) % imageSize;
            
            let x = ix + imageMainX + imageSize/2;
            let y = iy + imageMainY + imageSize/2;
    
            Move(x, y, iIndex);
    
            Check(ix / imageSize, iy / imageSize);
            
        }

    }

}

function Move(x, y, i) {

    images[i].style.left = (x - imageSize / 2) + "px";
    images[i].style.top = (y - imageSize / 2) + "px";

}

function Check(x, y) {
    
    if (parseInt((x + 1) + "" + (y + 1)) == imageIDs[iIndex]) {
        
        good++;
        console.log(good);

    }

}

function Scroll() {

    console.log(document.event);

    MouseUp(window.event, this.iIndex);

}