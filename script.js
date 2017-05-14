/// Resetowanie położenia postaci przy załadowaniu 
/// lub zmianie rozmiaru okna
function resize(){
    var _temp = 0;
    _temp = document.getElementById("map-div").offsetWidth / 2;
    //console.log(_temp);
    chara.style.left = _temp + "px";
    
    _temp = document.getElementById("map-div").offsetHeight / 2;
    //console.log(_temp);
    chara.style.bottom = _temp + "px";
}

window.onload = function (windowLoad){
    resize();
}

window.onresize = function (windowResize){
    resize();
};

/// Zmienia string przy pomocy Regex 
/// TODO: poprawić :(
function imageMove(entry, pixelAmount){
    var _t = 0;
    //var separate = entry.match(/\d\d\d/g);
    var separate = entry.match(/^[0-9]{1,4}/g);
    
    _t = +separate + +pixelAmount;
    console.log("entry: " + entry + " separate: " + separate + " _t: " + _t + " chara.style.left: "+ chara.style.left + " mapdiv: " + document.getElementById("map-div").offsetWidth);

    if(_t <= 0 || _t >= (document.getElementById("map-div").clientWidth - pixelAmount)){
        if(_t >= (document.getElementById("map-div").clientWidth - pixelAmount)){
            console.log("c");
            return (document.getElementById("map-div").clientWidth - pixelAmount) + "px";
        }
        else if(_t <= 0){
            console.log("a");
            return "0px";
        }
    }
    else{
        console.log("b");
        return _t + "px";
    }
}

function imageMove2(entry, pixelAmount){
    var _t = 0;
    //var separate = entry.match(/\d\d\d/g);
    var separate = entry.match(/^[0-9]{1,4}/g);
    
    _t = +separate + +pixelAmount;
    console.log("entry: " + entry + " separate: " + separate + " _t: " + _t + " chara.style.bottom: "+ chara.style.bottom + " mapdiv: " + document.getElementById("map-div").clientHeight);

    if(_t <= 0 || _t >= (document.getElementById("map-div").clientHeight - pixelAmount)){
        if(_t >= (document.getElementById("map-div").clientHeight - pixelAmount)){
            console.log("c");
            return (document.getElementById("map-div").clientHeight - pixelAmount) + "px";
        }
        else if(_t <= 0){
            console.log("a");
            return "0px";
        }
    }
    else{
        console.log("b");
        return _t + "px";
    }
}

function separatePx(entry){
    var _t = 0;
    var separate = entry.match(/^[0-9]{1,4}/g);
    return +separate;
}


// ID strzałek: 37 left; 38 up; 39 right; 40 down
document.onkeyup = function (e) {
    switch(e.keyCode){
        case 37:
            console.log("left: " + chara.style.left);
            chara.style.left = imageMove(chara.style.left, "-48");
            console.log(chara.style.left);
            break;
        case 38:
            console.log(chara.style.bottom);
            chara.style.bottom = imageMove2(chara.style.bottom, "48");
            console.log(chara.style.bottom);
            break;
        case 39:
            console.log(chara.style.left);
            chara.style.left = imageMove(chara.style.left, "48");
            console.log(chara.style.left);
            break;
        case 40:
            console.log(chara.style.bottom);
            chara.style.bottom = imageMove2(chara.style.bottom, "-48");
            console.log(chara.style.bottom);
            break;
    }
};










