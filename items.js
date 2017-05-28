var itemsList = {
    healthPotion: {name: "Health Potion",
                   image: "assets/items/potion_1.png",
                   consumable: true,
                   hp: 20},
    
    m1911: {name: "M1911",
            image: "assets/items/m1911.png",
            consumable: false,
            dmg: 40}
};

var userEQ = [];

function eqPos() {
    for (var i = 0; i <= userEQ.length; i++) {
        if (userEQ[i] !== true) { console.log(i); return i; } 
    } 
}
    
var cssInventory = document.querySelector(".inventory");
console.log(cssInventory);

function addItem(Item) {
    console.log(cssInventory);
    var pos = eqPos();
    userEQ[pos] = true;
    var position = pos + 1;
    
    if (document.querySelector(".item" + position) === null){
        
        var _elem = document.createElement("div");
        _elem.className = "col-3 item item" + position;
        //_elem.innerHTML = '<div class="col-3 item item' + position + '" id="item' + position + '"></div>';
        cssInventory.appendChild(_elem);
    }
    
    var cssItem = document.querySelector(".item" + position);
    console.log(cssItem);
    var cssItemHover = document.getElementById('itemHover');
    
    cssItem.style.display = "block";
    cssItem.style.backgroundImage = 'url("' + Item.image + '")';
    cssItem.style.backgroundSize = "48px";
    cssItem.style.backgroundRepeat = "no-repeat";
    cssItem.style.backgroundPosition = "center";
    console.log("cc");
    
    cssItem.onmouseover = function () {
        console.log("dd");
        cssItemHover.style.display = 'block';
        var hoverManager = "";
        if (Item.hp !== undefined) { hoverManager += " HP: " + Item.hp; }
        if (Item.dmg !== undefined) { hoverManager += " DMG: " + Item.dmg; }
        cssItemHover.innerHTML = hoverManager;
    };
    cssItem.onmouseout = function () {
        cssItemHover.style.display = 'none';
    };
    console.log("ee");
    cssItem.onclick = function () {
        if (cssItem.style.border == "") {
            if(Item.consumable === false) {
                cssItem.style.border = "2px solid #fff";
                console.log("bb");
            }
            else {
                // consumable
                removeItem(position, true);
            }
        }
        else {
            cssItem.style.border = "";
        }
        
    };
    
    //Do uzupełnienia
}

function removeItem(pos, isConsumable) {
    var cssItem = document.querySelector(".item" + pos);
    userEQ[(pos - 1)] = "";
    cssItem.style.display = "none";
    if(isConsumable) {
        // TODO
    }
}