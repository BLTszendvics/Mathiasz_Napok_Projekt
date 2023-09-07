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

        mx = m.clientX;
        my = m.clientY;

        Move(mx, my, iIndex)

    }

}

function MouseDown(m, iIndex) {

    drag = true;
    this.iIndex = iIndex;

}

function MouseUp(m, iIndex) {

    drag = false;

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