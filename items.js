var itemsList = {
    healthPotion: {name: "Health Potion",
                image: "assets/items/potion_1.png",
                consumable: true,
                hp: 20},
    
    m1911:     {name: "M1911",
                image: "assets/items/m1911.png",
                consumable: false,
                strength: 40},

    
    // --- Armor items ---
    armorTier1: {name: "Armor Tier I",
                image: "",
                consumable: false,
                resistance: 10},
    armorTier2: {name: "Armor Tier II",
                image: "",
                consumable: false,
                resistance: 20},
    armorTier3: {name: "Armor Tier III",
                image: "",
                consumable: false,
                resistance: 30},
    armorTier4: {name: "Armor Tier IV",
                image: "",
                consumable: false,
                resistance: 40},
    armorTier5: {name: "Armor Tier V",
                image: "",
                consumable: false,
                resistance: 50}
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
        if (Item.resistance !== undefined) { hoverManager += " RES: " + Item.resistance; }
        if (Item.skill !== undefined) { hoverManager += " SKI: " + Item.skill; }
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
}

function removeItem(pos, isConsumable) {
    var cssItem = document.querySelector(".item" + pos);
    userEQ[(pos - 1)] = "";
    cssItem.style.display = "none";
}

function statEdit(change, Item) {
    if (change) {
        // add statistics
        if (Item.hp !== undefined) { player.hp += Item.hp }
        if (Item.strength !== undefined) { player.strength += Item.strength }
        if (Item.resistance !== undefined) { player.resistance += Item.resistance }
        if (Item.skill !== undefined) { player.skill += Item.skill }
        if (Item.dodge !== undefined) { player.dodge += Item.dodge }
    }
    else {
        // remove statistics
        if (Item.hp !== undefined) { player.hp -= Item.hp }
        if (Item.strength !== undefined) { player.strength -= Item.strength }
        if (Item.resistance !== undefined) { player.resistance -= Item.resistance }
        if (Item.skill !== undefined) { player.skill -= Item.skill }
        if (Item.dodge !== undefined) { player.dodge -= Item.dodge }
    }
    reloadStats();
}

function reloadStats() {
    editStats.hp.innerHTML = player.hp;
    editStats.strength.innerHTML = player.strength;
    editStats.resistance.innerHTML = player.resistance;
    editStats.skill.innerHTML = player.skill;
    editStats.dodge.innerHTML = player.dodge;
}


