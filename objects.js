var map_div = document.querySelector('#map-div');

var map = {
    css: document.querySelector('#map'),
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

var player = {
    css: document.querySelector('#player'),
    edge: map_div.offsetHeight/10,
    currentLeft: null,
    currentBottom: null,
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
    },
    move: e => {
        player.getPos(player.css);

        switch(e.keyCode) {
            case 37: if (player.currentLeft !== 0) player.css.style.left = player.currentLeft-player.edge + "px";
            break;
            case 39: if (player.currentLeft !== map.edge-player.edge) player.css.style.left = player.currentLeft+player.edge + "px";
            break;
            case 38: if (player.currentBottom !== map.edge-player.edge) player.css.style.bottom = player.currentBottom+player.edge + "px";
            break;
            case 40: if (player.currentBottom !== 0) player.css.style.bottom = player.currentBottom-player.edge + "px";
            break;
        }
    }
}