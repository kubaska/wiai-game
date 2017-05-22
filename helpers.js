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

const matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

var minimap = {
    css: document.querySelector("#minimap"),
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
    },
    set: () => {
        for (var i=0; i<matrix.length; i++) {
            for (var j=0; j<matrix[i].length; j++) {
                var pos = matrix[i][j];
                if (player.currentY-1 === i && player.currentX-1 === j) pos++;
                if (pos === 0) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'black';
                else if (pos === 1) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'white';
                else if (pos === 2) document.querySelector('#m'+(j+1 + i*10)).style.backgroundColor = 'red';
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
    // ...
    css: document.querySelector('#player'),
    edge: map_div.offsetHeight/10,
    currentLeft: null,
    currentBottom: null,
    currentX: 1,
    currentY: 10,
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
        player.css.style.left = 0;
        player.css.style.bottom = 0;
        player.currentX = 1;
        player.currentY = 10;
    },
    check: key => {
        var pos = matrix[player.currentY-1][player.currentX-1];
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

        switch(e.keyCode) {
            case 37: if (player.currentLeft !== 0) {
                player.currentX--;
                if (player.check(e.keyCode)) player.css.style.left = player.currentLeft-player.edge + "px";
            }
            break;
            case 39: if (player.currentLeft !== map.edge-player.edge) {
                player.currentX++;
                if (player.check(e.keyCode)) player.css.style.left = player.currentLeft+player.edge + "px";
            }
            break;
            case 38: if (player.currentBottom !== map.edge-player.edge) {
                player.currentY--;
                if (player.check(e.keyCode)) player.css.style.bottom = player.currentBottom+player.edge + "px";
            }
            break;
            case 40: if (player.currentBottom !== 0) {
                player.currentY++;
                if (player.check(e.keyCode)) player.css.style.bottom = player.currentBottom-player.edge + "px";
            }
            break;
        }
        minimap.set();
    }
}

var characterList = {
    paladin: document.querySelector('#class1'),
    soldier: document.querySelector('#class2'),
    archer: document.querySelector('#class3'),
    necromant: document.querySelector('#class4')
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
    console.log("1");
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
    }
    // TODO
}