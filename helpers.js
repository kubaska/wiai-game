var map_div = document.querySelector('#map-div');

var map = {
    css: document.querySelector('#map'),
    id: 1,
    edge: map_div.offsetHeight,
    center: () => {
        map.css.style.left = map_div.offsetWidth/2 - map.edge/2 + "px";
    },
    set: () => {
        map.css.style.height = map.edge + "px";
        map.css.style.width = map.edge + "px";
    },
    resize: () => {
        if (map_div.offsetWidth > map_div.offsetHeight) map.edge = map_div.offsetHeight;
        else map.edge = map_div.offsetWidth;
    }
}

var matrix = maps[0];

var minimap = {
    css: document.querySelector("#minimap"),
    safeX: null,
    safeY: null,
    create: () => {
        var tableHTML;
        tableHTML = '<table id="minimapTable">\n';
        for (var i=0; i<10; i++) {
            tableHTML = tableHTML + '<tr>';
            for (var j=0; j<10; j++) {
                tableHTML += '<td id="m' + (j+1 + i*10) + '"</td>';
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</table>';
        minimap.css.innerHTML = tableHTML;

        minimap.getSafeSpot();
        minimap.switch(minimap.safeX, minimap.safeY);
    },
    set: () => {
        for (var i=0; i<matrix.length; i++) {
            for (var j=0; j<matrix[i].length; j++) {
                var pos = matrix[i][j];
                if (player.currentY-1 === i && player.currentX-1 === j) pos = 2;
                if (pos === 0) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'black';
                else if (pos === 1 || pos === 10) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'white';
                else if (pos === 2) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'red';
                else if (pos === 3 || pos === 4) {
                    document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'blue'
                }
            }
        }
    },
    switch: (x,y) => {
        player.currentX = x+1;
        player.currentY = y+1;
        player.css.style.left = (player.currentX-1) * player.edge + "px";
        player.css.style.bottom = (10-player.currentY) * player.edge + "px";
    },
    getSafeSpot: () => {
        for (var i=0; i<matrix.length; i++) {
            for (var j=0; j<matrix[i].length; j++) {
                if (matrix[i][j] === 10) {
                    minimap.safeX = j;
                    minimap.safeY = i;
                }
            }
        }
    }
}

var player = {
    hp: 0,
    strength: 0,
    attack: 0,
    resistance: 0,
    skill: 0,
    armor: 0,
    isAlive: false,
    // ...
    css: document.querySelector('#player'),
    edge: map_div.offsetHeight/10,
    currentLeft: null,
    currentBottom: null,
    currentX: null,
    currentY: null,
    getPos: css => {
        var style = window.getComputedStyle(css),
            left = style.getPropertyValue('left'),
            bottom = style.getPropertyValue('bottom');

        player.currentLeft = parseFloat(left),
        player.currentBottom = parseFloat(bottom);
    },
    set: () => {
        player.css.style.height = player.edge + "px";
        player.css.style.width = player.edge + "px";
    },
    resize: () => {
        if (map_div.offsetWidth > map_div.offsetHeight) player.edge = map_div.offsetHeight/10;
        else player.edge = map_div.offsetWidth/10;
        minimap.switch(player.currentX-1, player.currentY-1);
    },
    check: key => {
        var pos = matrix[player.currentY-1][player.currentX-1];
        if (pos === 3 || pos === 4) {
            if (pos === 3) matrix = maps[1];
            else if (pos === 4) matrix = maps[0];
            minimap.getSafeSpot();
            minimap.switch(minimap.safeX, minimap.safeY);
            return 2;
        }
        switch(key) {
            case 37: if (pos === 0) {
                player.currentX++;
                return 0;
            }
            break;
            case 39: if (pos === 0) {
                player.currentX--;
                return 0;
            }
            break;
            case 38: if (pos === 0) {
                player.currentY++;
                return 0;
            }
            break;
            case 40: if (pos === 0) {
                player.currentY--;
                return 0;
            }
            break;
        }
        return 1;
    },
    move: e => {
        player.getPos(player.css);

        if (player.isAlive) {
            switch(e.keyCode) {
                case 37: if (player.currentLeft !== 0) {
                    player.currentX--;
                    if (player.check(e.keyCode) == 1) player.css.style.left = player.currentLeft-player.edge + "px";
                }
                break;
                case 39: if (player.currentLeft !== map.edge-player.edge) {
                    player.currentX++;
                    if (player.check(e.keyCode) == 1) player.css.style.left = player.currentLeft+player.edge + "px";
                }
                break;
                case 38: if (player.currentBottom !== map.edge-player.edge) {
                    player.currentY--;
                    if (player.check(e.keyCode) == 1) player.css.style.bottom = player.currentBottom+player.edge + "px";
                }
                break;
                case 40: if (player.currentBottom !== 0) {
                    player.currentY++;
                    if (player.check(e.keyCode) == 1) player.css.style.bottom = player.currentBottom-player.edge + "px";
                }
                break;
            }
        }
        minimap.set();
    }
}

var characterList = {
    paladin: document.querySelector('#class1'),
    warrior: document.querySelector('#class2'),
    archer: document.querySelector('#class3'),
    necromancer: document.querySelector('#class4')
}

var editStats = {
    hp: document.querySelector('#hp'),
	strength: document.querySelector("#strength"),
	attack: document.querySelector("#attack"),
	resistance: document.querySelector("#resistance"),
	skill: document.querySelector("#skill"),
	armor: document.querySelector("#armor")
}

function setPlayerAttrib(champion){
    document.getElementById("selector").style.display = "none";
    document.getElementById("map").style.display = "block";
    // Funkcja ustawia statystyki każdej z postaci
    // ...
    // Do ustalenia statystyk...
    switch (champion){
        case "paladin":
            editStats.hp.innerHTML = basePaladin.hp();
            editStats.strength.innerHTML = basePaladin.strength;
            editStats.attack.innerHTML = basePaladin.attack();
            editStats.resistance.innerHTML = basePaladin.dexterity;
            editStats.skill.innerHTML = basePaladin.mana();
            editStats.armor.innerHTML = basePaladin.hp();
            
            player.hp = basePaladin.hp();
            player.strength = basePaladin.strength;
            player.attack = basePaladin.attack();
            player.resistance = basePaladin.dexterity;
            player.skill = basePaladin.mana();
            player.armor = basePaladin.hp();
            break;
        case "archer":
            editStats.hp.innerHTML = baseArcher.hp();
            editStats.strength.innerHTML = baseArcher.strength;
            editStats.attack.innerHTML = baseArcher.attack();
            editStats.resistance.innerHTML = baseArcher.dexterity;
            editStats.skill.innerHTML = baseArcher.mana();
            editStats.armor.innerHTML = baseArcher.hp();
            
            player.hp = baseArcher.hp();
            player.strength = baseArcher.strength;
            player.attack = baseArcher.attack();
            player.resistance = baseArcher.dexterity;
            player.skill = baseArcher.mana();
            player.armor = baseArcher.hp();
            break;
        case "necromancer":
            editStats.hp.innerHTML = baseNecromancer.hp();
            editStats.strength.innerHTML = baseNecromancer.strength;
            editStats.attack.innerHTML = baseNecromancer.attack();
            editStats.resistance.innerHTML = baseNecromancer.dexterity;
            editStats.skill.innerHTML = baseNecromancer.mana();
            editStats.armor.innerHTML = baseNecromancer.hp();
            
            player.hp = baseNecromancer.hp();
            player.strength = baseNecromancer.strength;
            player.attack = baseNecromancer.attack();
            player.resistance = baseNecromancer.dexterity;
            player.skill = baseNecromancer.mana();
            player.armor = baseNecromancer.hp();
            break;
        case "warrior":
            editStats.hp.innerHTML = baseWarrior.hp();
            editStats.strength.innerHTML = baseWarrior.strength;
            editStats.attack.innerHTML = baseWarrior.attack();
            editStats.resistance.innerHTML = baseWarrior.dexterity;
            editStats.skill.innerHTML = baseWarrior.mana();
            editStats.armor.innerHTML = baseWarrior.hp();
            
            player.hp = baseWarrior.hp();
            player.strength = baseWarrior.strength;
            player.attack = baseWarrior.attack();
            player.resistance = baseWarrior.dexterity;
            player.skill = baseWarrior.mana();
            player.armor = baseWarrior.hp();
            break;
    }
    player.isAlive = true;
    // TODO
}