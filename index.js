$ = (queryString) => document.querySelector(queryString);

var hue = 0;
const MAXDIS = -3;
var zPos = MAXDIS;
const MOVE = 0.1;
var zSign = MOVE;

function ChangeColor() {
    hue = (hue + 1) % 360;
    var color = `hsl(${hue}, 100%, 50%)`;
    zPos = zPos + zSign;

    if (zPos >= -MAXDIS) {
        zSign = -MOVE;
    }
    else if (zPos <= MAXDIS) {
        zSign = MOVE;
    }

    // console.log(zPos);
    $('a-sphere').setAttribute('color', color);
    $('a-sphere').setAttribute('position', `0 ${zPos} -4`);
    requestAnimationFrame(ChangeColor);
}

requestAnimationFrame(ChangeColor);