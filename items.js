var itemsList = {
    healthPotion: {name: "Health Potion",
                   image: "assets/items/potion_1.png",
                   consumable: true,
                   hp: 20},
    
    m1911: {name: "M1911",
            image: "assets/items/m1911.png",
            consumable: false,
            attack: 40},

    armorTier1: {name: "Armor Tier 1",
                image: "",
                consumable: false,
                resistance: 10}
};

var userEQ = [];

function eqPos() {
    for (var i = 0; i <= userEQ.length; i++) {
        if (userEQ[i] !== true) { console.log(i); return i; } 
    } 
}
    
var cssInventory = document.querySelector(".inventory");

function addItem(Item) {
    var pos = eqPos();
    userEQ[pos] = true;
    var position = pos + 1;
    
    if (document.querySelector(".item" + position) === null){
        
        var _elem = document.createElement("div");
        _elem.className = "col-3 item item" + position;
        cssInventory.appendChild(_elem);
    }
    
    var cssItem = document.querySelector(".item" + position);
    var cssItemHover = document.getElementById('itemHover');
    
    cssItem.style.display = "block";
    cssItem.style.backgroundImage = 'url("' + Item.image + '")';
    cssItem.style.backgroundSize = "48px";
    cssItem.style.backgroundRepeat = "no-repeat";
    cssItem.style.backgroundPosition = "center";
    
    cssItem.onmouseover = function () {
        cssItemHover.style.display = 'block';
        var hoverManager = "";
        if (Item.hp !== undefined) { hoverManager += " HP: " + Item.hp; }
        if (Item.strength !== undefined) { hoverManager += " STR: " + Item.strength; }
        if (Item.attack !== undefined) { hoverManager += " ATT: " + Item.attack; }
        if (Item.resistance !== undefined) { hoverManager += " RES: " + Item.resistance; }
        if (Item.skill !== undefined) { hoverManager += " SKI: " + Item.skill; }
        if (Item.armor !== undefined) { hoverManager += " ARM: " + Item.armor; }
        cssItemHover.innerHTML = hoverManager;
    };
    cssItem.onmouseout = function () {
        cssItemHover.style.display = 'none';
    };
    cssItem.onclick = function () {
        if (cssItem.style.border == "") {
            if(Item.consumable === false) {
                cssItem.style.border = "2px solid #fff";
            }
            else {
                // consumable
                removeItem(position, true);
            }
            statEdit(true, Item);
        }
        else {
            cssItem.style.border = "";
            statEdit(false, Item);
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

function statEdit(change, Item) {
    if (change) {
        // add statistics
        console.log(change);
        if (Item.hp !== undefined) { player.hp += Item.hp }
        if (Item.strength !== undefined) { player.strength += Item.strength }
        if (Item.attack !== undefined) { player.attack += Item.attack }
        if (Item.resistance !== undefined) { player.resistance += Item.resistance }
        if (Item.skill !== undefined) { player.skill += Item.skill }
        if (Item.armor !== undefined) { player.armor += Item.armor }
    }
    else {
        // remove statistics
        console.log(change);
    }
    reloadStats();
}

function reloadStats() {
    editStats.hp.innerHTML = player.hp;
    editStats.strength.innerHTML = player.strength;
    editStats.attack.innerHTML = player.attack;
    editStats.resistance.innerHTML = player.resistance;
    editStats.skill.innerHTML = player.skill;
    editStats.armor.innerHTML = player.hp();
}


