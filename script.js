function update() {
    map.set();
    map.center();
    
    player.set();
    player.getPos(player.css);
    minimap.set();
}

window.onload = windowLoad => {
    minimap.create();
    update();
}

window.onresize = windowSize => {
    map.resize();
    player.resize();
    
    update();
}

document.addEventListener('keyup', e => { player.move(e) });