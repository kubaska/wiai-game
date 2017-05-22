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




characterList.paladin.onclick = () => { setPlayerAttrib("paladin"); }
characterList.soldier.onclick = () => { setPlayerAttrib("soldier"); }
characterList.archer.onclick = () => { setPlayerAttrib("archer"); }
characterList.necromant.onclick = () => { setPlayerAttrib("necromant"); }


