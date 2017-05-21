characterList.paladin.onclick = () => { setPlayerAttrib("paladin"); }
characterList.soldier.onclick = () => { setPlayerAttrib("soldier"); }
characterList.archer.onclick = () => { setPlayerAttrib("archer"); }
characterList.necromant.onclick = () => { setPlayerAttrib("necromant"); }


function setPlayerAttrib(champion){
    document.getElementById("selector").style.display = "none";
    document.getElementById("map").style.display = "block";
    // Funkcja ustawia statystyki każdej z postaci
    // ...
}
