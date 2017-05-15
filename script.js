window.onload = windowLoad => {
    map.set();
    map.center();
    player.set();
    player.getPos(player.css);
}

window.onresize = windowSize => {
    map.resize();
    player.resize();
    
    map.set();
    map.center();
    player.set();
    player.getPos(player.css);
}

document.addEventListener('keyup', e => { player.move(e) });