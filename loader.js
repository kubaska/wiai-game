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




characterList.paladin.onclick = () => { 
    setPlayerAttrib("paladin"); 
    addItem(itemsList.healthPotion); 
    reloadStats();
}
characterList.warrior.onclick = () => { 
    setPlayerAttrib("warrior"); 
    addItem(itemsList.healthPotion); 
    reloadStats();
}
characterList.archer.onclick = () => { 
    setPlayerAttrib("archer"); 
    addItem(itemsList.healthPotion); 
    addItem(itemsList.m1911); 
    reloadStats();
}
characterList.necromancer.onclick = () => { 
    setPlayerAttrib("necromancer"); 
    addItem(itemsList.healthPotion);
    reloadStats();
}



